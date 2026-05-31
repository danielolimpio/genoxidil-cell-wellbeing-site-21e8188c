// PWA install trigger using only native browser interfaces.
// - Android/Chrome/Desktop: captures beforeinstallprompt and fires on first user click.
// - iOS Safari: shows native share-sheet instruction via alert (no custom modal).

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

const isInIframe = (() => {
  try {
    return window.self !== window.top;
  } catch {
    return true;
  }
})();

const isPreviewHost =
  typeof window !== 'undefined' &&
  (window.location.hostname.includes('lovable.app') ||
    window.location.hostname.includes('lovableproject.com') ||
    window.location.hostname === 'localhost');

const isStandalone = () =>
  window.matchMedia('(display-mode: standalone)').matches ||
  // @ts-expect-error iOS Safari
  window.navigator.standalone === true;

const isIOS = () => /iPad|iPhone|iPod/.test(navigator.userAgent) && !('MSStream' in window);

export function initPwaInstall() {
  if (typeof window === 'undefined') return;
  if (isInIframe || isPreviewHost) return; // Skip in editor preview
  if (isStandalone()) return;

  // Register minimal service worker (required for install prompt on Chrome/Android).
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('/sw.js').catch(() => {});
    });
  }

  let deferredPrompt: BeforeInstallPromptEvent | null = null;
  let promptShown = false;

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e as BeforeInstallPromptEvent;
  });

  const tryPrompt = async () => {
    if (promptShown) return;

    // iOS Safari: no beforeinstallprompt API. Show native-style instruction.
    if (isIOS()) {
      promptShown = true;
      const alreadySeen = sessionStorage.getItem('ios-install-hint');
      if (!alreadySeen) {
        sessionStorage.setItem('ios-install-hint', '1');
        // Native browser alert (no custom modal)
        alert('Para instalar o app: toque em Compartilhar e selecione "Adicionar à Tela de Início".');
      }
      cleanup();
      return;
    }

    // Chrome/Edge/Android/Desktop: fire native prompt
    if (deferredPrompt) {
      promptShown = true;
      try {
        await deferredPrompt.prompt();
        await deferredPrompt.userChoice;
      } catch {
        // user gesture lost or already used
      }
      deferredPrompt = null;
      cleanup();
    }
  };

  const onFirstClick = () => {
    void tryPrompt();
  };

  const cleanup = () => {
    document.removeEventListener('click', onFirstClick, true);
  };

  document.addEventListener('click', onFirstClick, true);

  window.addEventListener('appinstalled', () => {
    deferredPrompt = null;
    cleanup();
  });
}

// Minimal service worker for PWA installability.
// No caching - just satisfies browser install criteria.
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', () => {
  // Pass-through; no caching to avoid stale content.
});


import { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Shield, Zap, Heart } from 'lucide-react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([0]);

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqData = [
    {
      category: 'Sobre o Produto',
      icon: HelpCircle,
      questions: [
        {
          question: 'O que é o Genoxidil?',
          answer: 'O Genoxidil é um suplemento alimentar revolucionário desenvolvido pela NBN Living que ativa a proteína Nrf2, promovendo saúde celular e bem-estar através de uma combinação única de fitonutrientes e vitaminas.'
        },
        {
          question: 'Como o Genoxidil funciona?',
          answer: 'O Genoxidil funciona ativando a proteína Nrf2, um fator de transcrição que regula a produção de enzimas antioxidantes naturais. Isso ajuda a proteger as células contra o estresse oxidativo e promove a desintoxicação natural do organismo.'
        },
        {
          question: 'Qual a diferença do Genoxidil para outros multivitamínicos?',
          answer: 'Diferentemente dos multivitamínicos tradicionais, o Genoxidil foca na ativação da proteína Nrf2, que potencializa a produção natural de antioxidantes pelo próprio corpo, oferecendo uma proteção mais eficaz e duradoura.'
        }
      ]
    },
    {
      category: 'Uso e Dosagem',
      icon: Zap,
      questions: [
        {
          question: 'Como devo tomar o Genoxidil?',
          answer: 'Recomenda-se tomar 1 cápsula ao dia, preferencialmente pela manhã com o estômago vazio ou conforme orientação de um profissional de saúde. Não exceda a dose recomendada.'
        },
        {
          question: 'Posso tomar o Genoxidil com outros medicamentos?',
          answer: 'É importante consultar seu médico antes de combinar o Genoxidil com outros medicamentos. Embora seja um suplemento natural, pode haver interações que precisam ser avaliadas por um profissional.'
        },
        {
          question: 'Quanto tempo demora para ver resultados?',
          answer: 'Os resultados podem variar de pessoa para pessoa. Alguns usuários relatam melhorias na energia e bem-estar em 2-4 semanas, mas recomenda-se uso contínuo por pelo menos 3 meses para obter benefícios completos.'
        }
      ]
    },
    {
      category: 'Segurança e Contraindicações',
      icon: Shield,
      questions: [
        {
          question: 'O Genoxidil é seguro?',
          answer: 'Sim, o Genoxidil é formulado com ingredientes naturais e passou por rigorosos testes de qualidade. É produzido seguindo as boas práticas de fabricação e possui certificações de segurança.'
        },
        {
          question: 'Quem não deve tomar o Genoxidil?',
          answer: 'Gestantes, lactantes, crianças menores de 18 anos e pessoas com condições médicas específicas devem consultar um médico antes do uso. Pessoas alérgicas a algum dos componentes também devem evitar o produto.'
        },
        {
          question: 'Existem efeitos colaterais?',
          answer: 'O Genoxidil é bem tolerado pela maioria das pessoas. Raramente podem ocorrer sintomas gastrointestinais leves. Se você sentir qualquer desconforto, suspenda o uso e consulte um profissional de saúde.'
        }
      ]
    },
    {
      category: 'Benefícios e Resultados',
      icon: Heart,
      questions: [
        {
          question: 'Quais são os principais benefícios do Genoxidil?',
          answer: 'Os principais benefícios incluem: nutrição celular otimizada, desintoxicação natural, ação antioxidante potente, melhora da saúde da pele/cabelo/unhas, fortalecimento imunológico, saúde cardiovascular e cognitiva, além de maior energia e vitalidade.'
        },
        {
          question: 'O Genoxidil ajuda no envelhecimento?',
          answer: 'Sim, através da ativação da proteína Nrf2 e proteção antioxidante, o Genoxidil ajuda a combater o estresse oxidativo, uma das principais causas do envelhecimento celular, promovendo um envelhecimento mais saudável.'
        },
        {
          question: 'Posso usar o Genoxidil para melhorar a imunidade?',
          answer: 'O Genoxidil contribui para o fortalecimento do sistema imunológico através da otimização da função celular e redução do estresse oxidativo, ajudando o corpo a manter suas defesas naturais mais eficazes.'
        }
      ]
    }
  ];

  return (
    <section id="faq" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Perguntas <span className="bg-gradient-to-r from-blue-600 to-orange-500 bg-clip-text text-transparent">Frequentes</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tire todas suas dúvidas sobre o Genoxidil, sua composição, uso e benefícios. 
            Nossa equipe científica preparou as respostas mais completas.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqData.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <div key={categoryIndex} className="mb-8">
                <div className="flex items-center mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-orange-500 rounded-lg flex items-center justify-center mr-4">
                    <IconComponent className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{category.category}</h3>
                </div>

                <div className="space-y-4">
                  {category.questions.map((item, questionIndex) => {
                    const globalIndex = categoryIndex * 10 + questionIndex;
                    const isOpen = openItems.includes(globalIndex);

                    return (
                      <div key={questionIndex} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <button
                          className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                          onClick={() => toggleItem(globalIndex)}
                        >
                          <span className="font-semibold text-gray-900 pr-4">{item.question}</span>
                          {isOpen ? (
                            <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                          )}
                        </button>
                        
                        {isOpen && (
                          <div className="px-6 pb-4">
                            <div className="border-t border-gray-100 pt-4">
                              <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-2xl mx-auto">
            <HelpCircle className="w-16 h-16 text-blue-600 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ainda tem dúvidas?</h3>
            <p className="text-gray-600 mb-6">
              Nossa equipe de especialistas está pronta para esclarecer todas suas questões 
              sobre o Genoxidil e seus benefícios.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-orange-600 transition-all">
                Falar com Especialista
              </button>
              <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Enviar Pergunta
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;

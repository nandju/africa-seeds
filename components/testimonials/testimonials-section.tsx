'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  daysAgo: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Les semences de qualité d'AfricaSeeds ont transformé nos pratiques agricoles. Nos cultures sont plus saines et la productivité s'est considérablement améliorée.",
    author: "Jean Kouassi",
    daysAgo: 2,
  },
  {
    id: 2,
    quote: "Leurs produits sont fiables et faciles à utiliser. Nous avons constaté une croissance notable et une meilleure résilience dans nos champs.",
    author: "Sophie Diallo",
    daysAgo: 4,
  },
  {
    id: 3,
    quote: "Travailler avec AfricaSeeds ressemble à un véritable partenariat. Leur soutien et leur expertise nous aident à obtenir des résultats cohérents année après année.",
    author: "David Mensah",
    daysAgo: 7,
  },
  {
    id: 4,
    quote: "Les programmes de formation complets ont doté notre équipe des connaissances nécessaires pour maximiser les rendements tout en maintenant la durabilité.",
    author: "Amara Okonkwo",
    daysAgo: 5,
  },
  {
    id: 5,
    quote: "L'accès à des semences de qualité via AfricaSeeds a ouvert de nouvelles opportunités commerciales pour notre coopérative et amélioré les moyens de subsistance de nos membres.",
    author: "Ibrahim Hassan",
    daysAgo: 3,
  },
  {
    id: 6,
    quote: "Leur engagement envers la gestion environnementale s'aligne parfaitement avec nos valeurs. Nous sommes fiers de nous associer à une organisation qui privilégie la santé des sols.",
    author: "Zainab Mohammed",
    daysAgo: 6,
  },
  {
    id: 7,
    quote: "Le portail de connaissances semencières a été inestimable pour rester informé des meilleures pratiques et des nouvelles variétés de semences adaptées à notre région.",
    author: "Kwame Asante",
    daysAgo: 8,
  },
  {
    id: 8,
    quote: "Des rendements améliorés aux coûts d'intrants réduits, AfricaSeeds s'est révélé être un véritable changement pour notre entreprise agricole.",
    author: "Fatima Abdallah",
    daysAgo: 1,
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - itemsPerView);

  const handlePrev = () => {
    setCurrentIndex(Math.max(0, currentIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex(Math.min(maxIndex, currentIndex + 1));
  };

  return (
    <section 
      className="py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: '#FFFFFF' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 mb-12">
          <button 
            className="px-4 py-2 border rounded-full text-sm font-medium transition-colors"
            style={{ 
              borderColor: 'rgba(186, 142, 59, 0.5)',
              color: '#BA8E3B',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'rgba(186, 142, 59, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            RETOURS CLIENTS
          </button>
          <h2 
            className="text-4xl md:text-5xl font-bold text-center leading-tight"
            style={{ color: '#000000' }}
          >
            De vrais agriculteurs,<br />
            De vraies réussites
          </h2>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-300 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="flex-shrink-0"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <div 
                    className="rounded-lg p-8 h-full flex flex-col justify-between transition-all duration-300"
                    style={{ 
                      background: 'linear-gradient(135deg, rgba(140, 197, 62, 0.08) 0%, rgba(186, 142, 59, 0.08) 100%)',
                      border: '1px solid rgba(140, 197, 62, 0.2)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = '0 8px 30px rgba(140, 197, 62, 0.15)';
                      e.currentTarget.style.transform = 'translateY(-4px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = 'none';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <p 
                      className="italic text-lg leading-relaxed mb-6"
                      style={{ color: '#374151' }}
                    >
                      "{testimonial.quote}"
                    </p>
                    <div>
                      <p 
                        className="font-semibold"
                        style={{ color: '#000000' }}
                      >
                        — {testimonial.author}
                      </p>
                      <p 
                        className="text-sm mt-1"
                        style={{ color: '#6b7280' }}
                      >
                        Il y a {testimonial.daysAgo} jour{testimonial.daysAgo !== 1 ? 's' : ''}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 md:translate-x-0 z-10 p-2 rounded-full border transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            style={{
              backgroundColor: '#FFFFFF',
              borderColor: '#e5e7eb',
            }}
            onMouseEnter={(e) => {
              if (currentIndex !== 0) {
                e.currentTarget.style.backgroundColor = 'rgba(140, 197, 62, 0.1)';
                e.currentTarget.style.borderColor = '#8CC53E';
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#FFFFFF';
              e.currentTarget.style.borderColor = '#e5e7eb';
            }}
            aria-label="Témoignages précédents"
          >
            <ChevronLeft className="w-6 h-6" style={{ color: '#8CC53E' }} />
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex === maxIndex}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 md:translate-x-0 z-10 p-2 rounded-full border transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            style={{
              backgroundColor: '#FFFFFF',
              borderColor: '#e5e7eb',
            }}
            onMouseEnter={(e) => {
              if (currentIndex !== maxIndex) {
                e.currentTarget.style.backgroundColor = 'rgba(140, 197, 62, 0.1)';
                e.currentTarget.style.borderColor = '#8CC53E';
              }
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#FFFFFF';
              e.currentTarget.style.borderColor = '#e5e7eb';
            }}
            aria-label="Témoignages suivants"
          >
            <ChevronRight className="w-6 h-6" style={{ color: '#8CC53E' }} />
          </button>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className="w-3 h-3 rounded-full transition-colors"
              style={{
                backgroundColor: index === currentIndex ? '#8CC53E' : '#d1d5db',
              }}
              onMouseEnter={(e) => {
                if (index !== currentIndex) {
                  e.currentTarget.style.backgroundColor = '#9ca3af';
                }
              }}
              onMouseLeave={(e) => {
                if (index !== currentIndex) {
                  e.currentTarget.style.backgroundColor = '#d1d5db';
                }
              }}
              aria-label={`Aller au groupe de témoignages ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
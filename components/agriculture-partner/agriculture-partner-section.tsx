'use client';

import { ReactNode } from 'react';

interface ServiceCard {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function AgriculturePartnerSection() {
  const services: ServiceCard[] = [
    {
      icon: (
        <svg
          className="w-12 h-12"
          style={{ color: '#8CC53E' }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="5" r="1.5" />
          <circle cx="7" cy="8" r="1.5" />
          <circle cx="17" cy="8" r="1.5" />
          <circle cx="6" cy="13" r="1.5" />
          <circle cx="18" cy="13" r="1.5" />
          <circle cx="12" cy="16" r="1.5" />
          <line x1="12" y1="5" x2="12" y2="16" strokeWidth="1" />
          <line x1="7" y1="8" x2="12" y2="13" strokeWidth="1" />
          <line x1="17" y1="8" x2="12" y2="13" strokeWidth="1" />
          <line x1="6" y1="13" x2="12" y2="16" strokeWidth="1" />
          <line x1="18" y1="13" x2="12" y2="16" strokeWidth="1" />
        </svg>
      ),
      title: 'Gestion des Nutriments',
      description:
        'La gestion des nutriments garantit que les cultures reçoivent le bon équilibre de nutriments pour stimuler la croissance et améliorer la productivité.',
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
          style={{ color: '#8CC53E' }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C12 2 9 6 9 9C9 11.21 10.33 13 12 13C13.67 13 15 11.21 15 9C15 6 12 2 12 2Z" />
          <line x1="8" y1="14" x2="16" y2="14" strokeWidth="1.5" />
          <line x1="7" y1="16" x2="17" y2="16" strokeWidth="1.5" />
          <line x1="6" y1="18" x2="18" y2="18" strokeWidth="1.5" />
          <line x1="8" y1="20" x2="16" y2="20" strokeWidth="1.5" />
        </svg>
      ),
      title: 'Solutions de Planification des Cultures',
      description:
        'Aide les agriculteurs à prendre de meilleures décisions basées sur les données pour des rendements plus élevés et une utilisation efficace des ressources.',
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
          style={{ color: '#8CC53E' }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M8 12L7 15C6.5 16 7 17 8 17H16C17 17 17.5 16 17 15L16 12" />
          <rect x="7" y="8" width="10" height="4" rx="1" />
          <line x1="11" y1="8" x2="11" y2="5" strokeWidth="1.5" />
          <line x1="13" y1="8" x2="13" y2="5" strokeWidth="1.5" />
          <line x1="9" y1="8" x2="9" y2="4" strokeWidth="1.5" />
          <line x1="15" y1="8" x2="15" y2="4" strokeWidth="1.5" />
        </svg>
      ),
      title: 'Mécanisation Agricole',
      description:
        'Utilise des outils avancés et des équipements intelligents pour augmenter l\'efficacité, gagner du temps et réduire la main-d\'œuvre.',
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
          style={{ color: '#8CC53E' }}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2C12 2 12 8 12 12C12 14 10.5 16 8 16C5.5 16 4 14 4 12C4 8 4 2 4 2" />
          <circle cx="18" cy="15" r="4" fill="none" strokeWidth="1.5" />
          <path d="M18 12V18M15 15H21" strokeWidth="1.5" />
          <path d="M8 16C8 18 8 20 8 22" />
          <line x1="6" y1="22" x2="10" y2="22" strokeWidth="1.5" />
        </svg>
      ),
      title: 'Gestion de l\'Eau',
      description:
        'Assure une utilisation efficace et durable de l\'eau pour des cultures saines et une productivité améliorée.',
    },
  ];

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <div className="flex justify-start mb-8">
          <button 
            className="px-6 py-2 border-2 rounded-full text-sm font-medium transition-colors"
            style={{ 
              borderColor: '#BA8E3B',
              color: '#BA8E3B'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#BA8E3B';
              e.currentTarget.style.color = '#FFFFFF';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#BA8E3B';
            }}
          >
            PARTENAIRE AGRICOLE
          </button>
        </div>

        {/* Section Heading and Cards */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left: Heading */}
          <div className="lg:w-1/3 flex items-start">
            <h2 
              className="text-5xl lg:text-6xl font-bold leading-tight text-black"
            //   style={{ color: '#8CC53E' }}
            >
              Votre Partenaire Agricole
            </h2>
          </div>

          {/* Right: Services Grid */}
          <div className="lg:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="flex flex-col items-start">
                  {/* Icon */}
                  <div className="mb-4 flex items-center justify-center">
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 
                    className="text-2xl font-bold mb-3"
                    style={{ color: '#BA8E3B' }}
                  >
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p 
                    className="text-base leading-relaxed"
                    style={{ color: '#666666' }}
                  >
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
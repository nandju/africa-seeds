'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function BenefitsSection() {
  const router = useRouter();
  const benefits = [
    {
      title: 'Réseau continental complet',
      description: 'Opérant dans toutes les nations africaines avec des stratégies coordonnées pour un développement durable du système semencier',
      image: '/assets/images/illustrations/page-accueil/benefit-network.jpg',
    },
    {
      title: 'Solutions fondées sur des preuves',
      description: 'Soutien aux agriculteurs avec des approches éprouvées et des semences de qualité validées par des tests rigoureux',
      image: '/assets/images/illustrations/page-accueil/benefit-solutions.jpg',
    },
    {
      title: 'Impact durable',
      description: 'Conduire la transformation agricole qui renforce la sécurité alimentaire et autonomise les communautés agricoles africaines',
      image: '/assets/images/illustrations/page-accueil/benefit-impact.jpg',
    },
  ];

  return (
    <section className="w-full py-16 md:py-24" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col items-center gap-6 mb-16">
          <button onClick={() => router.push('/a-propos')} 
            className="px-6 py-2 border rounded-full text-sm font-medium transition-colors"
            style={{ borderColor: '#8CC53E', color: '#8CC53E' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#8CC53E';
              e.currentTarget.style.color = '#FFFFFF';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#8CC53E';
            }}
          >
            POURQUOI NOUS CHOISIR
          </button>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-balance" style={{ color: '#000000' }}>
            Pourquoi choisir AfricaSeeds ?
          </h2>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="relative h-96 rounded-3xl overflow-hidden group cursor-pointer"
              style={{
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = `0 20px 40px ${index === 0 ? '#8CC53E' : '#BA8E3B'}30`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
              }}
            >
              {/* Background Image */}
              <Image
                src={benefit.image || "/placeholder.svg"}
                alt={benefit.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-between p-8" style={{ color: '#FFFFFF' }}>
                <div />
                <div className="flex flex-col gap-4">
                  <h3 className="text-2xl md:text-3xl font-semibold leading-tight text-balance">
                    {benefit.title}
                  </h3>
                  <button onClick={() => router.push('/a-propos')} 
                    className="w-fit px-5 py-2 border rounded-full text-sm font-medium transition-colors duration-200"
                    style={{ 
                      borderColor: '#FFFFFF',
                      color: '#FFFFFF',
                      backgroundColor: 'transparent',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = '#8CC53E';
                      e.currentTarget.style.borderColor = '#8CC53E';
                      e.currentTarget.style.color = '#FFFFFF';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = 'transparent';
                      e.currentTarget.style.borderColor = '#FFFFFF';
                      e.currentTarget.style.color = '#FFFFFF';
                    }}
                  >
                    En savoir plus
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
'use client';

import { useState } from 'react';

export default function TrustedSolutionsSection() {
  const [openSection, setOpenSection] = useState<number | null>(0);

    const sections = [
    {
        title: "Rendements Supérieurs",
        content:
        "Des semences améliorées et des pratiques écologiques pour produire plus tout en préservant les sols et la biodiversité."
    },
    {
        title: "Efficacité des Coûts",
        content:
        "Des solutions innovantes qui réduisent les dépenses agricoles tout en boostant la productivité."
    },
    {
        title: "Support Expert",
        content:
        "Un accompagnement professionnel pour optimiser vos cultures et garantir de meilleurs résultats."
    }
    ];


  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=2070)',
        }}
      >
        {/* Overlay sombre pour améliorer la lisibilité */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content Container */}
      <div className="relative h-full flex flex-col lg:flex-row">
        {/* Left Side - Empty on desktop, content on mobile */}
        <div className="hidden lg:block lg:w-1/2"></div>

        {/* Right Side - Blurred Content */}
        <div className="flex-1 lg:w-1/2 flex items-center justify-center p-6 md:p-8 lg:p-12">
          <div 
            className="w-full max-w-2xl rounded-3xl p-8 md:p-10 lg:p-12"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(255, 255, 255, 0.2)'
            }}
          >
            {/* Badge */}
            <div className="inline-block mb-6">
              <span 
                className="px-6 py-2 rounded-full text-xs sm:text-sm font-medium border-2"
                style={{
                  borderColor: '#FFFFFF',
                  color: '#FFFFFF',
                  backgroundColor: 'rgba(255, 255, 255, 0.1)'
                }}
              >
                SOLUTIONS AGRICOLES CONFIANCE
              </span>
            </div>

            {/* Main Heading */}
            <h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 md:mb-12 leading-tight"
              style={{ color: '#FFFFFF' }}
            >
              Du Champ au Futur
            </h1>

            {/* Accordion Sections */}
            <div className="space-y-4">
              {sections.map((section, index) => (
                <div 
                  key={index}
                  className="border-b pb-4"
                  style={{ borderColor: 'rgba(255, 255, 255, 0.3)' }}
                >
                  {/* Section Header */}
                  <button
                    onClick={() => setOpenSection(openSection === index ? null : index)}
                    className="w-full flex items-center justify-between text-left group"
                  >
                    <h3 
                      className="text-xl md:text-2xl font-semibold"
                      style={{ color: '#FFFFFF' }}
                    >
                      {section.title}
                    </h3>
                    <svg
                      className="w-6 h-6 transition-transform duration-300"
                      style={{ 
                        color: '#8CC53E',
                        transform: openSection === index ? 'rotate(180deg)' : 'rotate(0deg)'
                      }}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth={2} 
                        d="M19 9l-7 7-7-7" 
                      />
                    </svg>
                  </button>

                  {/* Section Content */}
                  <div
                    className="overflow-hidden transition-all duration-300"
                    style={{
                      maxHeight: openSection === index ? '500px' : '0',
                      opacity: openSection === index ? 1 : 0
                    }}
                  >
                    <p 
                      className="mt-4 text-base md:text-lg leading-relaxed"
                      style={{ color: '#FFFFFF' }}
                    >
                      {section.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
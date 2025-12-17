'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const router = useRouter();



  const heroImages = [
    {
      url: '/assets/images/backgrounds/african-farmers-in-seed-field.jpg',
      alt: 'Agriculteurs africains travaillant dans les champs de semences',
    },
    {
      url: '/assets/images/backgrounds/quality-seeds-and-agricultural-products.jpg',
      alt: 'Semences de qualité pour l\'agriculture africaine',
    },
    {
      url: '/assets/images/backgrounds/sustainable-agricultural-transformation.jpg',
      alt: 'Pratiques agricoles durables en Afrique',
    },
    {
      url: '/assets/images/backgrounds/food-security-and-crop-diversity.jpg',
      alt: 'Sécurité alimentaire et diversité agricole',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section className="relative w-full h-screen mt-20 md:mt-0 overflow-hidden" style={{ background: 'linear-gradient(to bottom, #f3f4f6, #e5e7eb)' }}>
      {/* Image Carousel */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image.url || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-start justify-center px-4 md:px-12 lg:px-20 py-20">
        <div className="max-w-2xl">
          {/* Main Headline */}
           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight block lg:hidden" style={{ color: '#BA8E3B' }}>
            AfricaSeeds
          </h1> 
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 md:mb-8 leading-tight" style={{ color: '#FFFFFF' }}>
            Renforcer le secteur semencier africain
          </h2>

          {/* Description */}
          <p className="text-base md:text-lg mb-8 md:mb-10 leading-relaxed max-w-xl" style={{ color: 'rgba(255, 255, 255, 0.9)' }}>
            Nous nous engageons à créer un système semencier durable, intégré et efficace pour soutenir la sécurité alimentaire, la transformation agricole et l'accès des agriculteurs à des semences de qualité à travers l'Afrique.
          </p>

          {/* Key Stats */}
          {/* <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
            <div>
              <p className="text-3xl md:text-4xl font-bold" style={{ color: '#BA8E3B' }}>54</p>
              <p className="text-sm md:text-base mt-1" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Nations africaines</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold" style={{ color: '#BA8E3B' }}>25M$</p>
              <p className="text-sm md:text-base mt-1" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Plan 2023-2027</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-bold" style={{ color: '#BA8E3B' }}>1000+</p>
              <p className="text-sm md:text-base mt-1" style={{ color: 'rgba(255, 255, 255, 0.8)' }}>PME accompagnées</p>
            </div>
          </div> */}

          {/* CTA Button */}
          <button onClick={() => router.push('/coming-soon')} className="px-8 py-3 font-medium rounded-full transition-all flex items-center gap-2 text-base md:text-lg" style={{ backgroundColor: '#BA8E3B', color: '#FFFFFF' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'} onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
            En savoir plus
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-2 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentImageIndex
                ? 'w-6'
                : 'hover:bg-white/70'
            }`}
            style={{ 
              backgroundColor: index === currentImageIndex ? '#BA8E3B' : 'rgba(255, 255, 255, 0.5)'
            }}
            aria-label={`Aller à la diapositive ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Volume2, VolumeX } from 'lucide-react';

export default function ProductsSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const router = useRouter();

  const services = [
    { 
      title: 'Production de semences de qualité',
      icon: '🌱',
      image: '/assets/images/backgrounds/african-farmers-in-seed-field.jpg'
    },
    { 
      title: 'Soutien aux politiques',
      icon: '📋',
      image: '/assets/images/backgrounds/quality-seeds-and-agricultural-products.jpg'
    },
    { 
      title: 'Formation des agriculteurs',
      icon: '👨‍🌾',
      image: '/assets/images/backgrounds/sustainable-agricultural-transformation.jpg'
    },
    { 
      title: 'Accès au marché',
      icon: '🏪',
      image: '/assets/images/backgrounds/food-security-and-crop-diversity.jpg'
    },
    { 
      title: 'Mobilisation de fonds',
      icon: '💰',
      image: '/assets/images/backgrounds/african-farmers-in-seed-field.jpg'
    },
    { 
      title: 'Centre de connaissances',
      icon: '📚',
      image: '/assets/images/backgrounds/quality-seeds-and-agricultural-products.jpg'
    },
  ];

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="w-full py-16 md:py-24" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-12">
          <div className="flex flex-col gap-2">
            <button onClick={() => router.push('/a-propos')} className="w-fit px-4 py-2 border rounded-full text-sm font-medium transition-colors" style={{ borderColor: '#000000', color: '#000000' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
              REGARDEZ CETTE VIDÉO
            </button>
            <h2 className="text-4xl md:text-5xl font-bold" style={{ color: '#000000' }}>
              Solutions Semencières
            </h2>
          </div>
          <button onClick={() => router.push('/contact')} className="w-fit px-6 py-3 rounded-full font-medium transition-opacity" style={{ backgroundColor: '#BA8E3B', color: '#FFFFFF' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'} onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
            Trouvez des solutions dans votre pays
          </button>
        </div>

        {/* Featured Video with Overlay */}
        <div className="relative w-full h-72 md:h-96 lg:h-[500px] rounded-2xl overflow-hidden mb-8" style={{ backgroundColor: '#f3f4f6' }}>
          <video
            ref={videoRef}
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted={isMuted}
            playsInline
          >
            <source src="/assets/videos/africaseeds-hero.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la lecture de vidéos.
          </video>
          
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <p className="text-3xl md:text-5xl font-light text-center px-6 text-balance" style={{ color: '#FFFFFF' }}>
              Et nous sommes là pour écouter.
            </p>
          </div>

          {/* Mute/Unmute Button */}
          <button
            onClick={toggleMute}
            className="absolute bottom-4 right-4 p-3 rounded-full transition-colors z-10"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#FFFFFF'}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.9)'}
            aria-label={isMuted ? 'Activer le son' : 'Couper le son'}
          >
            {isMuted ? (
              <VolumeX size={24} style={{ color: '#000000' }} />
            ) : (
              <Volume2 size={24} style={{ color: '#000000' }} />
            )}
          </button>
        </div>

        {/* Description */}
        <p className="text-base md:text-lg mb-12 leading-relaxed max-w-4xl" style={{ color: '#000000' }}>
          AfricaSeeds renforce le secteur semencier à travers l'Afrique par la coordination continentale, le développement de politiques et le soutien stratégique aux agriculteurs et aux entreprises semencières. Nous mobilisons des ressources, partageons les connaissances et défendons la diversité agricole pour assurer la sécurité alimentaire et la transformation agricole durable à travers le continent.
        </p>

        {/* Services Carousel */}
        <div className="w-full">
          <div className="flex gap-4 overflow-x-auto pb-4" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
            <style jsx>{`
              div::-webkit-scrollbar {
                display: none;
              }
            `}</style>
            {services.map((service, index) => {
              // Alterner entre image (pair) et texte (impair)
              const isImageCard = index % 2 === 0;
              
              return (
                <div
                  key={index}
                  className="flex-shrink-0 relative overflow-hidden"
                  style={{
                    borderRadius: '9999px', // rounded-full pour coins très arrondis
                    minWidth: isImageCard ? '300px' : '200px',
                    width: isImageCard ? '300px' : '200px',
                    height: '200px',
                  }}
                >
                  {isImageCard ? (
                    // Carte image
                    <div className="relative w-full h-full">
                      <Image
                        src={service.image || "/placeholder.svg"}
                        alt={service.title}
                        fill
                        className="object-cover"
                        style={{ borderRadius: '9999px' }}
                      />
                    </div>
                  ) : (
                    // Carte texte avec fond olive-green
                    <div 
                      className="w-full h-full flex items-center justify-center px-6"
                      style={{ 
                        backgroundColor: '#8CC53E', // olive-green
                        borderRadius: '9999px',
                      }}
                    >
                      <span 
                        className="font-medium text-center text-white whitespace-nowrap"
                        style={{ 
                          fontFamily: 'sans-serif',
                        }}
                      >
                        {service.title}
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
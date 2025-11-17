'use client';

import Image from 'next/image';

export default function AboutSection() {
  return (
    <section 
      className="relative w-full py-20 overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #8CC53E 0%, #6da82f 50%, #BA8E3B 100%)',
      }}
    >
      {/* Animated background text scrolling from right to left */}
      <div className="absolute inset-0 overflow-hidden" style={{ opacity: 0.2 }}>
        <div className="animate-scroll-left whitespace-nowrap text-9xl font-bold" style={{ color: 'rgba(255, 255, 255, 0.4)' }}>
          <span className="inline-block mr-20">De la Semence à la Récolte</span>
          <span className="inline-block mr-20">Construire l'Avenir de l'Afrique</span>
          <span className="inline-block mr-20">De la Semence à la Récolte</span>
          <span className="inline-block mr-20">Construire l'Avenir de l'Afrique</span>
        </div>
      </div>

      {/* Content container */}
      <div className="relative z-10 px-6 md:px-12 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left side - Label and heading */}
          <div>
            <div 
              className="inline-block border-2 rounded-full px-6 py-2 mb-8"
              style={{ borderColor: 'rgba(255, 255, 255, 0.6)' }}
            >
              <p 
                className="text-sm tracking-widest font-medium"
                style={{ color: 'rgba(255, 255, 255, 0.9)' }}
              >
                À PROPOS D'AFRICASEEDS
              </p>
            </div>
            <h2 
              className="text-5xl md:text-6xl font-bold leading-tight mb-8"
              style={{ color: '#FFFFFF' }}
            >
              Construire l'avenir semencier de l'Afrique
            </h2>
          </div>

          {/* Right side - Description text */}
          <div className="space-y-6">
            <p 
              className="text-lg leading-relaxed"
              style={{ color: 'rgba(255, 255, 255, 0.95)' }}
            >
              AfricaSeeds catalyse une transformation continentale de l'agriculture en renforçant le secteur semencier à travers l'Afrique. Nous reconnaissons que la sécurité alimentaire durable et la productivité agricole dépendent de l'accès à des semences de qualité et d'une chaîne de valeur semencière dynamique et intégrée. Notre mission est de coordonner, soutenir et dynamiser les acteurs du secteur semencier.
            </p>
            <p 
              className="text-lg leading-relaxed"
              style={{ color: 'rgba(255, 255, 255, 0.95)' }}
            >
              Grâce au développement de politiques, à la centralisation des connaissances et au financement stratégique, nous construisons un écosystème où agriculteurs, entreprises semencières et institutions travaillent ensemble. Nous soutenons la diversité agricole pour la nutrition et la résilience tout en garantissant que les agriculteurs africains disposent des outils et des ressources nécessaires pour libérer le plein potentiel de leurs cultures et s'adapter aux demandes changeantes du marché.
            </p>
          </div>
        </div>

        {/* Floating circular images container */}
        <div className="relative h-96 md:h-96">
          {/* Large wheat/grain circle - floating vertically */}
          <div className="absolute left-0 md:left-12 top-0 w-44 h-44 md:w-60 md:h-60 animate-float-vertical-1">
            <div 
              className="relative w-full h-full rounded-full overflow-hidden"
              style={{ 
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
                border: '3px solid rgba(255, 255, 255, 0.3)',
              }}
            >
              <Image
                src="/assets/images/illustrations/page-accueil/golden-wheat-grain-close-up.jpg"
                alt="Grains de blé"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Small peas circle - floating horizontally */}
          <div className="absolute left-32 md:left-40 top-8 w-32 h-32 md:w-40 md:h-40 animate-float-horizontal-1">
            <div 
              className="relative w-full h-full rounded-full overflow-hidden"
              style={{ 
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.25)',
                border: '2px solid rgba(255, 255, 255, 0.3)',
              }}
            >
              <Image
                src="/assets/images/illustrations/page-accueil/green-peas-pod.jpg"
                alt="Petits pois"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Large corn circle - floating vertically */}
          <div className="absolute left-48 md:left-64 top-16 w-52 h-52 md:w-72 md:h-72 animate-float-vertical-2">
            <div 
              className="relative w-full h-full rounded-full overflow-hidden"
              style={{ 
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
                border: '3px solid rgba(255, 255, 255, 0.3)',
              }}
            >
              <Image
                src="/assets/images/illustrations/page-accueil/yellow-corn-maize-close-up.jpg"
                alt="Maïs"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Small hands harvest circle - floating horizontally */}
          <div className="absolute right-48 md:right-56 top-12 w-36 h-36 md:w-44 md:h-44 animate-float-horizontal-2">
            <div 
              className="relative w-full h-full rounded-full overflow-hidden"
              style={{ 
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.25)',
                border: '2px solid rgba(255, 255, 255, 0.3)',
              }}
            >
              <Image
                src="/assets/images/illustrations/page-accueil/farmer-hands-harvesting-crop.jpg"
                alt="Récolte"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Large green field circle - floating vertically */}
          <div className="absolute right-12 md:right-20 top-0 w-48 h-48 md:w-64 md:h-64 animate-float-vertical-3">
            <div 
              className="relative w-full h-full rounded-full overflow-hidden"
              style={{ 
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.3)',
                border: '3px solid rgba(255, 255, 255, 0.3)',
              }}
            >
              <Image
                src="/assets/images/illustrations/page-accueil/green-wheat-field-landscape.jpg"
                alt="Champ de blé vert"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Small equipment circle - floating horizontally */}
          <div className="absolute right-20 md:right-32 bottom-4 w-32 h-32 md:w-40 md:h-40 animate-float-horizontal-3">
            <div 
              className="relative w-full h-full rounded-full overflow-hidden"
              style={{ 
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.25)',
                border: '2px solid rgba(255, 255, 255, 0.3)',
              }}
            >
              <Image
                src="/assets/images/illustrations/page-accueil/agricultural-harvesting-equipment.jpg"
                alt="Équipement agricole"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
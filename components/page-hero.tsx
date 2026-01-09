'use client';

import Image from "next/image";
import { Sprout, Leaf, Flower2 } from "lucide-react";

interface PageHeroProps {
  title: string;
  description: string;
  imageSrc?: string;
}

export default function PageHero({
  title,
  description,
  imageSrc = "/assets/images/backgrounds/semence_bottom.png",
}: PageHeroProps) {
  return (
    <section 
      className="relative w-full pt-32 pb-20 px-4 md:px-8 lg:px-16 overflow-hidden"
      style={{ backgroundColor: '#8CC53E' }}
    >
      {/* Image de fond (derrière le texte) - z-index le plus bas */}
      <div className="absolute inset-0 flex items-end md:items-center justify-center pointer-events-none pb-8 md:pb-0" style={{ zIndex: 1 }}>
        <div className="relative w-[300px] md:w-[420px] lg:w-[520px] h-[300px] md:h-[420px] lg:h-[520px]">
          <Image
            src={imageSrc}
            alt="Semences agricoles"
            fill
            className="object-contain object-center"
            priority
          />
        </div>
      </div>

      {/* Légère couche pour améliorer la lisibilité - au-dessus de l'image */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/10" style={{ zIndex: 2 }}></div>

      {/* Décoratifs gauche - au-dessus du gradient */}
      <div className="absolute left-8 md:left-16 top-1/2 -translate-y-1/2 hidden md:block" style={{ zIndex: 10 }}>
        <Sprout className="w-6 h-6 text-black opacity-70" />
      </div>

      {/* Décoratifs droite - au-dessus du gradient */}
      <div className="absolute right-8 md:right-16 top-1/2 -translate-y-1/2 hidden md:flex gap-3 items-center" style={{ zIndex: 10 }}>
        <Leaf className="w-5 h-5 text-black opacity-70" />
        <Flower2 className="w-5 h-5 text-black opacity-70" />
        <Sprout className="w-5 h-5 text-black opacity-70" />
      </div>

      {/* Contenu texte - au-dessus de tout */}
      <div className="relative max-w-4xl mx-auto text-center" style={{ zIndex: 20 }}>
        <h1 
          className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          style={{ color: '#000000' }}
        >
          {title}
        </h1>

        <p 
          className="text-lg md:text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto"
          style={{ color: '#1f2937' }}
        >
          {description}
        </p>
      </div>
    </section>
  );
}

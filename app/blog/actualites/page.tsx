'use client';

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHero from "@/components/page-hero";
import Image from "next/image";
import { Newspaper, Calendar, ArrowRight } from "lucide-react";

export default function ActualitesPage() {
  const actualites = [
    {
      title: "Lancement du nouveau programme de formation en Afrique de l'Ouest",
      date: "15 Janvier 2025",
      category: "Projets",
      description: "AfricaSeeds lance un nouveau programme de formation pour renforcer les capacités des agriculteurs dans 5 pays d'Afrique de l'Ouest.",
      image: "/assets/images/backgrounds/african-farmers-in-seed-field.jpg"
    },
    {
      title: "Partenariat stratégique avec l'Union Africaine",
      date: "10 Janvier 2025",
      category: "Partenariats",
      description: "Signature d'un accord de partenariat majeur pour coordonner les efforts continentaux en matière de semences.",
      image: "/assets/images/backgrounds/quality-seeds-and-agricultural-products.jpg"
    },
    {
      title: "Nouvelle variété de maïs résistante à la sécheresse",
      date: "5 Janvier 2025",
      category: "Innovation",
      description: "Lancement d'une nouvelle variété de maïs développée spécifiquement pour les conditions climatiques africaines.",
      image: "/assets/images/backgrounds/sustainable-agricultural-transformation.jpg"
    },
    {
      title: "Atelier régional sur la certification des semences",
      date: "20 Décembre 2024",
      category: "Événements",
      description: "Organisation d'un atelier réunissant les experts de 8 pays pour harmoniser les processus de certification.",
      image: "/assets/images/backgrounds/food-security-and-crop-diversity.jpg"
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <PageHero 
        title="Actualités"
        description="Restez informé des dernières nouvelles, mises à jour et projets en cours d'AfricaSeeds."
      />

      {/* Actualités Grid */}
      <section className="w-full py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {actualites.map((actualite, index) => (
              <article key={index} className="group border rounded-2xl overflow-hidden transition-all hover:shadow-xl" style={{ borderColor: '#e5e7eb' }}>
                <div className="relative h-64">
                  <Image
                    src={actualite.image || "/placeholder.svg"}
                    alt={actualite.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: '#8CC53E', color: '#FFFFFF' }}>
                      {actualite.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm mb-4" style={{ color: '#666666' }}>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{actualite.date}</span>
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold mb-3" style={{ color: '#000000' }}>{actualite.title}</h2>
                  <p className="text-base leading-relaxed mb-4" style={{ color: '#666666' }}>{actualite.description}</p>
                  <a href="#" className="inline-flex items-center gap-2 font-medium transition-colors" style={{ color: '#8CC53E' }} onMouseEnter={(e) => e.currentTarget.style.color = '#6da82f'} onMouseLeave={(e) => e.currentTarget.style.color = '#8CC53E'}>
                    Lire la suite
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Pagination */}
      <section className="w-full py-8 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto flex justify-center gap-4">
          <button className="px-4 py-2 rounded-full border font-medium transition-all" style={{ borderColor: '#e5e7eb', color: '#666666' }} disabled>
            Précédent
          </button>
          <button className="px-4 py-2 rounded-full font-medium transition-all" style={{ backgroundColor: '#8CC53E', color: '#FFFFFF' }}>
            1
          </button>
          <button className="px-4 py-2 rounded-full border font-medium transition-all" style={{ borderColor: '#e5e7eb', color: '#666666' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
            2
          </button>
          <button className="px-4 py-2 rounded-full border font-medium transition-all" style={{ borderColor: '#e5e7eb', color: '#666666' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
            Suivant
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}

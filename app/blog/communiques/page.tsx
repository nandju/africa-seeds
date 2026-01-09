'use client';

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHero from "@/components/page-hero";
import Image from "next/image";
import { Newspaper, Calendar, Download, ArrowRight } from "lucide-react";

export default function CommuniquesPage() {
  const communiques = [
    {
      title: "Communiqué : Signature d'un partenariat stratégique avec l'Union Africaine",
      date: "10 Janvier 2025",
      type: "Partenariat",
      description: "AfricaSeeds annonce la signature d'un accord de partenariat majeur avec l'Union Africaine pour renforcer la coordination continentale du secteur semencier.",
      image: "/assets/images/backgrounds/african-farmers-in-seed-field.jpg"
    },
    {
      title: "Déclaration : Position d'AfricaSeeds sur l'accès aux semences",
      date: "5 Janvier 2025",
      type: "Déclaration",
      description: "Déclaration officielle d'AfricaSeeds sur l'importance de l'accès équitable aux semences certifiées pour tous les agriculteurs africains.",
      image: "/assets/images/backgrounds/quality-seeds-and-agricultural-products.jpg"
    },
    {
      title: "Annonce : Lancement du nouveau programme de formation",
      date: "15 Décembre 2024",
      type: "Annonce",
      description: "AfricaSeeds lance un nouveau programme de formation pour renforcer les capacités des acteurs du secteur semencier dans 5 pays d'Afrique de l'Ouest.",
      image: "/assets/images/backgrounds/sustainable-agricultural-transformation.jpg"
    },
    {
      title: "Communiqué de presse : Résultats annuels 2024",
      date: "1 Décembre 2024",
      type: "Presse",
      description: "AfricaSeeds publie ses résultats annuels 2024, montrant un impact significatif sur 45 000 agriculteurs à travers 12 pays africains.",
      image: "/assets/images/backgrounds/food-security-and-crop-diversity.jpg"
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <PageHero 
        title="Communiqués"
        description="Annonces officielles, déclarations publiques et communiqués de presse d'AfricaSeeds."
      />

      {/* Communiqués Grid */}
      <section className="w-full py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {communiques.map((communique, index) => (
              <article key={index} className="group border rounded-2xl overflow-hidden transition-all hover:shadow-xl" style={{ borderColor: '#e5e7eb' }}>
                <div className="relative h-64">
                  <Image
                    src={communique.image || "/placeholder.svg"}
                    alt={communique.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: '#BA8E3B', color: '#FFFFFF' }}>
                      {communique.type}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm mb-4" style={{ color: '#666666' }}>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{communique.date}</span>
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold mb-3" style={{ color: '#000000' }}>{communique.title}</h2>
                  <p className="text-base leading-relaxed mb-4" style={{ color: '#666666' }}>{communique.description}</p>
                  <div className="flex gap-4">
                    <a href="#" className="inline-flex items-center gap-2 font-medium transition-colors" style={{ color: '#8CC53E' }} onMouseEnter={(e) => e.currentTarget.style.color = '#6da82f'} onMouseLeave={(e) => e.currentTarget.style.color = '#8CC53E'}>
                      Lire le communiqué
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    <button className="inline-flex items-center gap-2 font-medium transition-colors" style={{ color: '#666666' }} onMouseEnter={(e) => e.currentTarget.style.color = '#000000'} onMouseLeave={(e) => e.currentTarget.style.color = '#666666'}>
                      <Download className="w-4 h-4" />
                      PDF
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Filtres */}
      <section className="w-full py-8 px-4 md:px-8 lg:px-16" style={{ backgroundColor: '#f9fafb' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4">
            <button className="px-4 py-2 rounded-full border font-medium transition-all" style={{ borderColor: '#8CC53E', color: '#8CC53E', backgroundColor: '#FFFFFF' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#E8F5E9'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FFFFFF'}>
              Tous
            </button>
            {["Annonces", "Déclarations", "Presse", "Partenariats"].map((type, index) => (
              <button key={index} className="px-4 py-2 rounded-full border font-medium transition-all" style={{ borderColor: '#e5e7eb', color: '#666666', backgroundColor: '#FFFFFF' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FFFFFF'}>
                {type}
              </button>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

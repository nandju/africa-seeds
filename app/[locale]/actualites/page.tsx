'use client';

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHero from "@/components/page-hero";

export default function ActualitesPage() {
  const actualites = [
    { titre: "Titre d'actualité", date: "2024-01-15", description: "Description de l'actualité", type: "Actualité" },
    { titre: "Titre d'actualité", date: "2024-01-10", description: "Description de l'actualité", type: "Annonce" },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <PageHero 
        title="Actualités"
        description="Dernières nouvelles et annonces d'AfricaSeeds"
      />
      
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto space-y-8">
          {actualites.map((actualite, index) => (
            <article 
              key={index}
              className="p-6 rounded-lg border hover:shadow-lg transition-shadow"
              style={{ borderColor: '#E5E7EB', backgroundColor: '#FFFFFF' }}
            >
              <div className="flex items-start justify-between mb-3">
                <span 
                  className="px-3 py-1 rounded-full text-xs font-medium"
                  style={{ backgroundColor: '#E8F5E9', color: '#8CC53E' }}
                >
                  {actualite.type}
                </span>
                <span className="text-sm" style={{ color: '#6B7280' }}>{actualite.date}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{ color: '#000000' }}>
                {actualite.titre}
              </h3>
              <p style={{ color: '#6B7280' }}>{actualite.description}</p>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}

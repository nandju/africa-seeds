'use client';

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHero from "@/components/page-hero";

export default function JeunessePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <PageHero 
        title="Jeunesse et Secteur Semencier"
        description="Valoriser les jeunes dans la filière semencière"
      />
      
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#000000' }}>Rôle des jeunes</h2>
            <p className="text-lg leading-relaxed" style={{ color: '#374151' }}>
              Les jeunes représentent l'avenir du secteur semencier africain. Ils apportent innovation, 
              énergie et nouvelles perspectives essentielles pour la transformation du secteur. AfricaSeeds 
              encourage activement la participation des jeunes dans tous les aspects de la chaîne de valeur 
              semencière.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#000000' }}>Formation</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#F9FAFB' }}>
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#8CC53E' }}>Formation technique</h3>
                <p style={{ color: '#6B7280' }}>Programmes de formation en production, certification et commercialisation de semences</p>
              </div>
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#F9FAFB' }}>
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#8CC53E' }}>Formation entrepreneuriale</h3>
                <p style={{ color: '#6B7280' }}>Développement des compétences en gestion d'entreprise et accès au financement</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#000000' }}>Innovation</h2>
            <p className="text-lg leading-relaxed" style={{ color: '#374151' }}>
              Les jeunes sont à l'avant-garde de l'innovation dans le secteur semencier, notamment dans 
              l'utilisation des technologies numériques, le développement de nouveaux modèles commerciaux 
              et l'adoption de pratiques agricoles durables.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

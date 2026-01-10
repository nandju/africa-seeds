'use client';

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHero from "@/components/page-hero";

export default function CartographieActeursPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <PageHero 
        title="Cartographie des Acteurs"
        description="Visualiser l'écosystème semencier africain"
      />
      
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#000000' }}>Objectif</h2>
            <p className="text-lg leading-relaxed" style={{ color: '#374151' }}>
              La Cartographie des Acteurs permet de visualiser l'écosystème semencier africain en 
              identifiant et localisant les différents acteurs impliqués dans le secteur : institutions, 
              entreprises, organisations de recherche, ONG et autres parties prenantes.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#000000' }}>Types d'acteurs</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#F9FAFB' }}>
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#8CC53E' }}>Institutions publiques</h3>
                <p style={{ color: '#6B7280' }}>Ministères, agences nationales, organisations régionales</p>
              </div>
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#F9FAFB' }}>
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#8CC53E' }}>Entreprises privées</h3>
                <p style={{ color: '#6B7280' }}>Producteurs, distributeurs, entreprises semencières</p>
              </div>
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#F9FAFB' }}>
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#8CC53E' }}>Recherche & développement</h3>
                <p style={{ color: '#6B7280' }}>Instituts de recherche, universités, centres d'innovation</p>
              </div>
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#F9FAFB' }}>
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#8CC53E' }}>Organisations de la société civile</h3>
                <p style={{ color: '#6B7280' }}>ONG, associations d'agriculteurs, coopératives</p>
              </div>
            </div>
          </div>

          <div className="w-full h-96 bg-gray-100 rounded-lg flex items-center justify-center">
            <p style={{ color: '#9CA3AF' }}>Carte interactive à venir</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

'use client';

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHero from "@/components/page-hero";

export default function PortailConnaissancesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <PageHero 
        title="Portail de Connaissances"
        description="Base documentaire centralisée sur le secteur semencier africain"
      />
      
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#000000' }}>Objectif</h2>
            <p className="text-lg leading-relaxed" style={{ color: '#374151' }}>
              Le Portail de Connaissances d'AfricaSeeds est une plateforme centralisée qui rassemble 
              l'ensemble des ressources documentaires, études, rapports, guides et outils de formation 
              relatifs au secteur semencier africain.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#000000' }}>Contenu disponible</h2>
            <ul className="space-y-3 text-lg" style={{ color: '#374151' }}>
              <li className="flex items-start">
                <span className="mr-3" style={{ color: '#8CC53E' }}>•</span>
                <span>Publications et rapports</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3" style={{ color: '#8CC53E' }}>•</span>
                <span>Guides pratiques et manuels</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3" style={{ color: '#8CC53E' }}>•</span>
                <span>Ressources de formation</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3" style={{ color: '#8CC53E' }}>•</span>
                <span>Données et statistiques</span>
              </li>
            </ul>
          </div>

          <div className="pt-8 border-t text-center" style={{ borderColor: '#E5E7EB' }}>
            <a 
              href="#" 
              className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-all"
              style={{ backgroundColor: '#BA8E3B', color: '#FFFFFF' }}
            >
              Accéder au portail
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

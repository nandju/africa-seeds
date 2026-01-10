'use client';

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHero from "@/components/page-hero";

export default function CulturesSousUtiliseesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <PageHero 
        title="Cultures sous-utilisées"
        description="Valoriser la biodiversité agricole africaine"
      />
      
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#000000' }}>Définition</h2>
            <p className="text-lg leading-relaxed" style={{ color: '#374151' }}>
              Les cultures sous-utilisées sont des espèces végétales qui ont un potentiel important pour 
              améliorer la sécurité alimentaire, la nutrition et les revenus, mais qui sont largement 
              négligées par la recherche et les systèmes de production commerciale. L'Afrique regorge de 
              ces cultures riches en biodiversité.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#000000' }}>Avantages</h2>
            <ul className="space-y-3 text-lg" style={{ color: '#374151' }}>
              <li className="flex items-start">
                <span className="mr-3" style={{ color: '#8CC53E' }}>•</span>
                <span>Adaptation aux conditions locales et résilience climatique</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3" style={{ color: '#8CC53E' }}>•</span>
                <span>Valeur nutritionnelle élevée</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3" style={{ color: '#8CC53E' }}>•</span>
                <span>Potentiel économique pour les petits agriculteurs</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3" style={{ color: '#8CC53E' }}>•</span>
                <span>Diversification des régimes alimentaires</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#000000' }}>Cas pratiques</h2>
            <p className="text-lg leading-relaxed" style={{ color: '#374151' }}>
              AfricaSeeds travaille avec les partenaires pour identifier, documenter et promouvoir les 
              cultures sous-utilisées à fort potentiel, en développant leurs chaînes de valeur et en 
              améliorant l'accès aux semences de qualité.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

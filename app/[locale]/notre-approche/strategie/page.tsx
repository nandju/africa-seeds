'use client';

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHero from "@/components/page-hero";

export default function StrategiePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <PageHero 
        title="Stratégie"
        description="Stratégie continentale officielle d'AfricaSeeds 2022-2031"
      />
      
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#000000' }}>Contexte</h2>
            <p className="text-lg leading-relaxed" style={{ color: '#374151' }}>
              Face aux défis croissants de la sécurité alimentaire, du changement climatique et de la 
              nécessité de transformation agricole, AfricaSeeds a développé une stratégie continentale 
              pour la période 2022-2031 visant à renforcer les systèmes semenciers africains.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#000000' }}>Axes stratégiques</h2>
            <div className="space-y-4">
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#F9FAFB', borderLeft: '4px solid #8CC53E' }}>
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#8CC53E' }}>Harmonisation des politiques</h3>
                <p style={{ color: '#6B7280' }}>Favoriser l'harmonisation des politiques et réglementations semencières au niveau continental</p>
              </div>
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#F9FAFB', borderLeft: '4px solid #8CC53E' }}>
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#8CC53E' }}>Accès aux semences</h3>
                <p style={{ color: '#6B7280' }}>Améliorer l'accès des agriculteurs aux semences de qualité</p>
              </div>
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#F9FAFB', borderLeft: '4px solid #8CC53E' }}>
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#8CC53E' }}>Innovation & recherche</h3>
                <p style={{ color: '#6B7280' }}>Promouvoir l'innovation et la recherche dans le secteur semencier</p>
              </div>
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#F9FAFB', borderLeft: '4px solid #8CC53E' }}>
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#8CC53E' }}>Inclusion</h3>
                <p style={{ color: '#6B7280' }}>Assurer l'inclusion du genre et des jeunes dans les systèmes semenciers</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#000000' }}>Objectifs mesurables</h2>
            <ul className="space-y-3 text-lg" style={{ color: '#374151' }}>
              <li className="flex items-start">
                <span className="mr-3" style={{ color: '#8CC53E' }}>•</span>
                <span>Augmentation de l'accès aux semences de qualité de X%</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3" style={{ color: '#8CC53E' }}>•</span>
                <span>Amélioration des rendements agricoles de X%</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3" style={{ color: '#8CC53E' }}>•</span>
                <span>Renforcement des capacités de X acteurs du secteur</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#000000' }}>Horizon temporel</h2>
            <p className="text-lg leading-relaxed" style={{ color: '#374151' }}>
              La stratégie couvre la période 2022-2031, avec des objectifs à court terme (2022-2025), 
              moyen terme (2025-2028) et long terme (2028-2031), alignés sur l'Agenda 2063 de l'Union 
              africaine et les Objectifs de développement durable.
            </p>
          </div>

          <div className="pt-8 border-t" style={{ borderColor: '#E5E7EB' }}>
            <a 
              href="#" 
              className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-all"
              style={{ backgroundColor: '#BA8E3B', color: '#FFFFFF' }}
            >
              Télécharger la stratégie (PDF)
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

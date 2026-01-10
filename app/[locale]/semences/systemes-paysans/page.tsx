'use client';

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHero from "@/components/page-hero";

export default function SystemesPaysansPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <PageHero 
        title="Systèmes Semenciers Paysans"
        description="Reconnaître et valoriser les systèmes locaux"
      />
      
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#000000' }}>Reconnaissance des systèmes locaux</h2>
            <p className="text-lg leading-relaxed" style={{ color: '#374151' }}>
              Les systèmes semenciers paysans représentent une part importante de la production et de la 
              distribution de semences en Afrique. Ces systèmes, gérés par les agriculteurs eux-mêmes, 
              fournissent des variétés adaptées localement et accessibles économiquement. AfricaSeeds 
              reconnaît leur importance et œuvre pour leur intégration dans les systèmes semenciers formels.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#000000' }}>Avantages des systèmes paysans</h2>
            <ul className="space-y-3 text-lg" style={{ color: '#374151' }}>
              <li className="flex items-start">
                <span className="mr-3" style={{ color: '#8CC53E' }}>•</span>
                <span>Variétés adaptées aux conditions locales</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3" style={{ color: '#8CC53E' }}>•</span>
                <span>Accès direct pour les petits agriculteurs</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3" style={{ color: '#8CC53E' }}>•</span>
                <span>Conservation de la biodiversité locale</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3" style={{ color: '#8CC53E' }}>•</span>
                <span>Résilience et autonomie des communautés</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#000000' }}>Stratégies d'intégration</h2>
            <p className="text-lg leading-relaxed" style={{ color: '#374151' }}>
              AfricaSeeds promeut une approche intégrée qui reconnaît et valorise les systèmes semenciers 
              paysans tout en facilitant leur amélioration et leur intégration avec les systèmes formels, 
              créant ainsi un écosystème semencier plus inclusif et résilient.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

'use client';

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHero from "@/components/page-hero";

export default function ManuelFormationPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <PageHero 
        title="Manuel de Formation Semencière"
        description="Former les acteurs du secteur semencier"
      />
      
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#000000' }}>Objectif</h2>
            <p className="text-lg leading-relaxed" style={{ color: '#374151' }}>
              Le Manuel de Formation Semencière d'AfricaSeeds constitue une ressource essentielle pour 
              former les différents acteurs du secteur semencier, des producteurs aux distributeurs, 
              en passant par les régulateurs et les chercheurs.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#000000' }}>Contenu</h2>
            <div className="space-y-4">
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#F9FAFB', borderLeft: '4px solid #8CC53E' }}>
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#8CC53E' }}>Production de semences</h3>
                <p style={{ color: '#6B7280' }}>Techniques de production, sélection variétale et gestion des cultures</p>
              </div>
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#F9FAFB', borderLeft: '4px solid #8CC53E' }}>
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#8CC53E' }}>Certification</h3>
                <p style={{ color: '#6B7280' }}>Normes et procédures de certification des semences</p>
              </div>
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#F9FAFB', borderLeft: '4px solid #8CC53E' }}>
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#8CC53E' }}>Commercialisation</h3>
                <p style={{ color: '#6B7280' }}>Stratégies de marketing et de distribution</p>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t" style={{ borderColor: '#E5E7EB' }}>
            <a 
              href="#" 
              className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-all"
              style={{ backgroundColor: '#BA8E3B', color: '#FFFFFF' }}
            >
              Télécharger le manuel (PDF)
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

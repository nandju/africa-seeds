'use client';

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHero from "@/components/page-hero";

export default function PublicationsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <PageHero 
        title="Publications"
        description="Accès aux études officielles et documents de référence"
      />
      
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto space-y-12">
          <div>
            <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto" style={{ color: '#374151' }}>
              AfricaSeeds publie régulièrement des études, rapports et documents de référence sur le 
              secteur semencier africain. Ces publications contribuent à la connaissance et au développement 
              du secteur.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Placeholder pour les publications */}
            <div className="p-6 rounded-lg border" style={{ borderColor: '#E5E7EB', backgroundColor: '#FFFFFF' }}>
              <h3 className="text-lg font-semibold mb-2" style={{ color: '#000000' }}>Rapport annuel</h3>
              <p className="text-sm mb-4" style={{ color: '#6B7280' }}>2024</p>
              <a href="#" className="text-sm" style={{ color: '#8CC53E' }}>Télécharger →</a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

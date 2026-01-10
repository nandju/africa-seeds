'use client';

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHero from "@/components/page-hero";

export default function RepertoireExpertsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <PageHero 
        title="Répertoire d'Experts"
        description="Identifier les spécialistes du secteur semencier"
      />
      
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto space-y-12">
          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#000000' }}>Objectif</h2>
            <p className="text-lg leading-relaxed" style={{ color: '#374151' }}>
              Le Répertoire d'Experts recense les spécialistes du secteur semencier africain, facilitant 
              l'identification et le contact avec les experts dans différents domaines : recherche, 
              production, réglementation, commercialisation, etc.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#000000' }}>Domaines d'expertise</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="p-6 rounded-lg border" style={{ borderColor: '#E5E7EB', backgroundColor: '#FFFFFF' }}>
                <h3 className="text-lg font-semibold mb-2" style={{ color: '#8CC53E' }}>Recherche variétale</h3>
              </div>
              <div className="p-6 rounded-lg border" style={{ borderColor: '#E5E7EB', backgroundColor: '#FFFFFF' }}>
                <h3 className="text-lg font-semibold mb-2" style={{ color: '#8CC53E' }}>Production semencière</h3>
              </div>
              <div className="p-6 rounded-lg border" style={{ borderColor: '#E5E7EB', backgroundColor: '#FFFFFF' }}>
                <h3 className="text-lg font-semibold mb-2" style={{ color: '#8CC53E' }}>Réglementation</h3>
              </div>
              <div className="p-6 rounded-lg border" style={{ borderColor: '#E5E7EB', backgroundColor: '#FFFFFF' }}>
                <h3 className="text-lg font-semibold mb-2" style={{ color: '#8CC53E' }}>Commercialisation</h3>
              </div>
              <div className="p-6 rounded-lg border" style={{ borderColor: '#E5E7EB', backgroundColor: '#FFFFFF' }}>
                <h3 className="text-lg font-semibold mb-2" style={{ color: '#8CC53E' }}>Politiques semencières</h3>
              </div>
              <div className="p-6 rounded-lg border" style={{ borderColor: '#E5E7EB', backgroundColor: '#FFFFFF' }}>
                <h3 className="text-lg font-semibold mb-2" style={{ color: '#8CC53E' }}>Biodiversité</h3>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t text-center" style={{ borderColor: '#E5E7EB' }}>
            <a 
              href="#" 
              className="inline-flex items-center px-6 py-3 rounded-full font-medium transition-all"
              style={{ backgroundColor: '#BA8E3B', color: '#FFFFFF' }}
            >
              Accéder au répertoire
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

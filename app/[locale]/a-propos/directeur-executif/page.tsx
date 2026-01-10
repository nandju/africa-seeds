'use client';

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHero from "@/components/page-hero";

export default function DirecteurExecutifPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <PageHero 
        title="Message du Directeur Exécutif"
        description="Leadership et vision pour l'avenir des systèmes semenciers africains"
      />
      
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Portrait et message */}
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-full md:w-64 flex-shrink-0">
              <div className="aspect-square rounded-lg overflow-hidden bg-gray-200">
                <div className="w-full h-full flex items-center justify-center" style={{ backgroundColor: '#E5E7EB' }}>
                  <span style={{ color: '#9CA3AF' }}>Photo officielle</span>
                </div>
              </div>
            </div>
            <div className="flex-1 space-y-6">
              <div>
                <h2 className="text-3xl font-bold mb-4" style={{ color: '#000000' }}>Message officiel</h2>
                <p className="text-lg leading-relaxed" style={{ color: '#374151' }}>
                  En tant que Directeur exécutif d'AfricaSeeds, je suis honoré de diriger cette institution 
                  qui œuvre pour le renforcement du secteur semencier africain. Notre mission est de créer 
                  un écosystème semencier qui profite à tous les acteurs, des petits agriculteurs aux grandes 
                  entreprises, en favorisant l'harmonisation, l'innovation et l'inclusion.
                </p>
              </div>
            </div>
          </div>

          {/* Priorités stratégiques */}
          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#000000' }}>Priorités stratégiques</h2>
            <div className="space-y-4">
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#F9FAFB', borderLeft: '4px solid #8CC53E' }}>
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#8CC53E' }}>Harmonisation continentale</h3>
                <p style={{ color: '#6B7280' }}>Renforcer la coordination et l'harmonisation des politiques semencières à travers l'Afrique</p>
              </div>
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#F9FAFB', borderLeft: '4px solid #8CC53E' }}>
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#8CC53E' }}>Accès équitable</h3>
                <p style={{ color: '#6B7280' }}>Garantir l'accès des agriculteurs, notamment les femmes et les jeunes, aux semences de qualité</p>
              </div>
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#F9FAFB', borderLeft: '4px solid #8CC53E' }}>
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#8CC53E' }}>Innovation durable</h3>
                <p style={{ color: '#6B7280' }}>Promouvoir l'innovation et la recherche pour développer des semences adaptées aux défis climatiques</p>
              </div>
            </div>
          </div>

          {/* Engagement */}
          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#000000' }}>Engagement envers les États membres</h2>
            <p className="text-lg leading-relaxed" style={{ color: '#374151' }}>
              Nous nous engageons à travailler en étroite collaboration avec tous les États membres pour 
              mettre en œuvre des programmes qui répondent à leurs besoins spécifiques tout en contribuant 
              aux objectifs continentaux de transformation agricole et de sécurité alimentaire.
            </p>
          </div>

          {/* Signature */}
          <div className="pt-8 border-t" style={{ borderColor: '#E5E7EB' }}>
            <p className="text-lg italic mb-4" style={{ color: '#374151' }}>
              "Ensemble, nous pouvons transformer le secteur semencier africain et contribuer à un avenir 
              plus prospère et résilient pour tous les Africains."
            </p>
            <p className="font-semibold" style={{ color: '#000000' }}>
              — Directeur exécutif, AfricaSeeds
            </p>
            <p className="text-sm mt-2" style={{ color: '#6B7280' }}>
              Date : 2024
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

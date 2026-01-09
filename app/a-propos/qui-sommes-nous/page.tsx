'use client';

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHero from "@/components/page-hero";
import Image from "next/image";

export default function QuiSommesNousPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <PageHero 
        title="Qui sommes-nous"
        description="Découvrez notre histoire, notre mission et notre vision pour transformer l'agriculture africaine."
      />

      {/* Introduction */}
      <section className="w-full py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-xl md:text-2xl leading-relaxed font-medium mb-8" style={{ color: '#000000' }}>
              AfricaSeeds est une plateforme panafricaine dédiée au développement, à la valorisation et à l'accès aux semences de qualité. Nous sommes une initiative structurante du secteur semencier africain, œuvrant pour transformer l'agriculture et assurer la sécurité alimentaire à travers le continent.
            </p>
          </div>
        </div>
      </section>

      {/* Contexte & Enjeux */}
      <section className="w-full py-16 px-4 md:px-8 lg:px-16" style={{ backgroundColor: '#f9fafb' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-8" style={{ color: '#000000' }}>Contexte africain & enjeux semenciers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-lg leading-relaxed mb-6" style={{ color: '#666666' }}>
                L'Afrique fait face à des défis majeurs dans le secteur semencier : accès limité aux semences certifiées, faible productivité agricole, et vulnérabilité face aux changements climatiques. Ces enjeux impactent directement la sécurité alimentaire et le développement économique du continent.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: '#666666' }}>
                AfricaSeeds répond à ces défis en créant un écosystème intégré qui connecte les producteurs, les entreprises semencières, les institutions publiques et les partenaires internationaux.
              </p>
            </div>
            <div className="relative h-80 rounded-2xl overflow-hidden">
              <Image
                src="/assets/images/backgrounds/african-farmers-in-seed-field.jpg"
                alt="Contexte africain"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Historique */}
      <section className="w-full py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-8" style={{ color: '#000000' }}>Notre historique</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-xl border" style={{ borderColor: '#e5e7eb' }}>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#8CC53E' }}>Création</h3>
              <p className="text-base leading-relaxed" style={{ color: '#666666' }}>
                AfricaSeeds a été créé dans un contexte de besoin urgent de coordination continentale pour le secteur semencier africain.
              </p>
            </div>
            <div className="p-6 rounded-xl border" style={{ borderColor: '#e5e7eb' }}>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#8CC53E' }}>Contexte</h3>
              <p className="text-base leading-relaxed" style={{ color: '#666666' }}>
                Face aux défis de sécurité alimentaire et de productivité agricole, nous avons identifié le besoin d'une plateforme unifiée.
              </p>
            </div>
            <div className="p-6 rounded-xl border" style={{ borderColor: '#e5e7eb' }}>
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#8CC53E' }}>Évolution</h3>
              <p className="text-base leading-relaxed" style={{ color: '#666666' }}>
                Depuis notre création, nous avons évolué pour devenir un acteur clé du développement semencier en Afrique.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Zone d'intervention */}
      <section className="w-full py-16 px-4 md:px-8 lg:px-16" style={{ backgroundColor: '#f9fafb' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-8" style={{ color: '#000000' }}>Zone d'intervention</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {['Afrique de l\'Ouest', 'Afrique Centrale', 'Afrique de l\'Est', 'Afrique Australe'].map((region, index) => (
              <div key={index} className="p-6 rounded-xl text-center" style={{ backgroundColor: '#FFFFFF', border: '1px solid #e5e7eb' }}>
                <h3 className="text-xl font-semibold" style={{ color: '#000000' }}>{region}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Message clé */}
      <section className="w-full py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-12 rounded-2xl" style={{ backgroundColor: '#8CC53E' }}>
            <p className="text-2xl md:text-3xl font-bold leading-relaxed" style={{ color: '#FFFFFF' }}>
              AfricaSeeds est une plateforme panafricaine dédiée au développement, à la valorisation et à l'accès aux semences de qualité.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

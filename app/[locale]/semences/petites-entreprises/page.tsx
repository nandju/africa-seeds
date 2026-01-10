'use client';

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHero from "@/components/page-hero";

export default function PetitesEntreprisesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <PageHero 
        title="Petites Entreprises Semencières"
        description="Soutien au développement des PME dans le secteur semencier"
      />
      
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#000000' }}>Rôle des PME</h2>
            <p className="text-lg leading-relaxed" style={{ color: '#374151' }}>
              Les petites et moyennes entreprises semencières jouent un rôle essentiel dans la production 
              et la distribution de semences, notamment pour les petits agriculteurs. Elles apportent 
              flexibilité, innovation et proximité aux marchés locaux, contribuant ainsi à l'amélioration 
              de l'accès aux semences de qualité.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#000000' }}>Appui AfricaSeeds</h2>
            <div className="space-y-4">
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#F9FAFB', borderLeft: '4px solid #8CC53E' }}>
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#8CC53E' }}>Renforcement des capacités</h3>
                <p style={{ color: '#6B7280' }}>Formation et accompagnement technique pour améliorer la qualité de production</p>
              </div>
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#F9FAFB', borderLeft: '4px solid #8CC53E' }}>
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#8CC53E' }}>Accès aux marchés</h3>
                <p style={{ color: '#6B7280' }}>Facilitation de l'accès aux réseaux de distribution et aux marchés</p>
              </div>
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#F9FAFB', borderLeft: '4px solid #8CC53E' }}>
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#8CC53E' }}>Financement</h3>
                <p style={{ color: '#6B7280' }}>Soutien à l'accès au financement et aux investissements</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#000000' }}>Impact</h2>
            <p className="text-lg leading-relaxed" style={{ color: '#374151' }}>
              Le soutien aux PME semencières permet d'améliorer significativement l'accès des agriculteurs 
              aux semences de qualité, tout en créant des emplois et en stimulant l'économie locale.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

'use client';

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHero from "@/components/page-hero";

export default function DeveloppementInclusifPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <PageHero 
        title="Développement inclusif du secteur semencier"
        description="Comment AfricaSeeds agit concrètement pour l'inclusion"
      />
      
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#000000' }}>Définition de l'approche inclusive</h2>
            <p className="text-lg leading-relaxed" style={{ color: '#374151' }}>
              Le développement inclusif du secteur semencier implique de garantir que tous les acteurs, 
              notamment les petits agriculteurs, les femmes, les jeunes et les populations marginalisées, 
              bénéficient équitablement des opportunités créées par le renforcement des systèmes semenciers.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#000000' }}>Acteurs impliqués</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#F9FAFB' }}>
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#8CC53E' }}>Petits agriculteurs</h3>
                <p style={{ color: '#6B7280' }}>Accès amélioré aux semences de qualité et aux formations</p>
              </div>
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#F9FAFB' }}>
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#8CC53E' }}>Femmes</h3>
                <p style={{ color: '#6B7280' }}>Participation active dans la chaîne de valeur semencière</p>
              </div>
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#F9FAFB' }}>
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#8CC53E' }}>Jeunes</h3>
                <p style={{ color: '#6B7280' }}>Opportunités d'entrepreneuriat et d'innovation</p>
              </div>
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#F9FAFB' }}>
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#8CC53E' }}>Secteur informel</h3>
                <p style={{ color: '#6B7280' }}>Intégration et formalisation progressive</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#000000' }}>Chaîne de valeur semencière</h2>
            <p className="text-lg leading-relaxed" style={{ color: '#374151' }}>
              Notre approche inclusive couvre toute la chaîne de valeur, de la recherche et développement 
              à la production, la certification, la distribution et l'utilisation finale des semences, 
              en s'assurant que chaque maillon est accessible à tous les acteurs.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#000000' }}>Résultats attendus</h2>
            <ul className="space-y-3 text-lg" style={{ color: '#374151' }}>
              <li className="flex items-start">
                <span className="mr-3" style={{ color: '#8CC53E' }}>•</span>
                <span>Augmentation de la participation des groupes marginalisés dans le secteur semencier</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3" style={{ color: '#8CC53E' }}>•</span>
                <span>Amélioration de l'accès aux semences de qualité pour tous</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3" style={{ color: '#8CC53E' }}>•</span>
                <span>Renforcement des capacités entrepreneuriales</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3" style={{ color: '#8CC53E' }}>•</span>
                <span>Réduction des inégalités dans le secteur</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

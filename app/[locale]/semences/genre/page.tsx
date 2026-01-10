'use client';

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHero from "@/components/page-hero";

export default function GenrePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <PageHero 
        title="Semences et Genre"
        description="Promouvoir l'inclusion des femmes dans le secteur semencier africain"
      />
      
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#000000' }}>Défis liés au genre</h2>
            <p className="text-lg leading-relaxed" style={{ color: '#374151' }}>
              Les femmes africaines jouent un rôle central dans l'agriculture mais font face à des défis 
              spécifiques pour accéder aux semences de qualité, aux ressources financières et aux marchés. 
              AfricaSeeds s'engage à promouvoir l'égalité des genres dans le secteur semencier.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#000000' }}>Accès aux semences</h2>
            <ul className="space-y-3 text-lg" style={{ color: '#374151' }}>
              <li className="flex items-start">
                <span className="mr-3" style={{ color: '#8CC53E' }}>•</span>
                <span>Faciliter l'accès des femmes agricultrices aux semences améliorées</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3" style={{ color: '#8CC53E' }}>•</span>
                <span>Promouvoir la participation des femmes dans les chaînes de valeur semencières</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3" style={{ color: '#8CC53E' }}>•</span>
                <span>Renforcer les capacités entrepreneuriales des femmes</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#000000' }}>Programmes spécifiques</h2>
            <div className="space-y-4">
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#F9FAFB', borderLeft: '4px solid #8CC53E' }}>
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#8CC53E' }}>Formation et renforcement des capacités</h3>
                <p style={{ color: '#6B7280' }}>Programmes de formation spécifiques pour les femmes entrepreneures semencières</p>
              </div>
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#F9FAFB', borderLeft: '4px solid #8CC53E' }}>
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#8CC53E' }}>Accès au financement</h3>
                <p style={{ color: '#6B7280' }}>Facilitation de l'accès aux ressources financières pour les femmes</p>
              </div>
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#F9FAFB', borderLeft: '4px solid #8CC53E' }}>
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#8CC53E' }}>Accès aux marchés</h3>
                <p style={{ color: '#6B7280' }}>Promotion de l'accès des femmes aux réseaux de distribution et aux marchés</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

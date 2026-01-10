'use client';

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHero from "@/components/page-hero";

export default function CAADPPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <PageHero 
        title="CAADP"
        description="Alignement avec les politiques agricoles africaines"
      />
      
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#000000' }}>Présentation CAADP</h2>
            <p className="text-lg leading-relaxed" style={{ color: '#374151' }}>
              Le Programme détaillé pour le développement de l'agriculture en Afrique (PDDAA/CAADP) est 
              le cadre continental pour la transformation agricole et la sécurité alimentaire, adopté par 
              l'Union africaine. Il vise à améliorer la productivité, les investissements et la gestion 
              des ressources agricoles.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#000000' }}>Alignement AfricaSeeds</h2>
            <p className="text-lg leading-relaxed mb-4" style={{ color: '#374151' }}>
              AfricaSeeds s'aligne étroitement avec les objectifs du CAADP en :
            </p>
            <ul className="space-y-3 text-lg" style={{ color: '#374151' }}>
              <li className="flex items-start">
                <span className="mr-3" style={{ color: '#8CC53E' }}>•</span>
                <span>Renforçant les systèmes semenciers comme pilier de la productivité agricole</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3" style={{ color: '#8CC53E' }}>•</span>
                <span>Facilitant l'harmonisation des politiques semencières au niveau continental</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3" style={{ color: '#8CC53E' }}>•</span>
                <span>Promouvant l'accès aux semences de qualité pour améliorer les rendements</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3" style={{ color: '#8CC53E' }}>•</span>
                <span>Contribuant aux objectifs de sécurité alimentaire et nutritionnelle</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#000000' }}>Contribution au développement agricole</h2>
            <div className="space-y-4">
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#F9FAFB', borderLeft: '4px solid #8CC53E' }}>
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#8CC53E' }}>Productivité</h3>
                <p style={{ color: '#6B7280' }}>Amélioration de la productivité agricole grâce à l'accès aux semences améliorées</p>
              </div>
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#F9FAFB', borderLeft: '4px solid #8CC53E' }}>
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#8CC53E' }}>Investissement</h3>
                <p style={{ color: '#6B7280' }}>Facilitation des investissements dans le secteur semencier</p>
              </div>
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#F9FAFB', borderLeft: '4px solid #8CC53E' }}>
                <h3 className="text-xl font-semibold mb-2" style={{ color: '#8CC53E' }}>Gouvernance</h3>
                <p style={{ color: '#6B7280' }}>Renforcement de la gouvernance des systèmes semenciers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

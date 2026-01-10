'use client';

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHero from "@/components/page-hero";

export default function TransformationAgricolePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <PageHero 
        title="Transformation Agricole"
        description="Lien entre semences, productivité et développement"
      />
      
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#000000' }}>Rôle central des semences</h2>
            <p className="text-lg leading-relaxed" style={{ color: '#374151' }}>
              Les semences de qualité sont le point de départ de toute transformation agricole réussie. 
              Elles déterminent le potentiel de rendement, la résilience aux maladies et aux stress 
              climatiques, et la qualité des produits agricoles. Un secteur semencier robuste est 
              essentiel pour améliorer la productivité et contribuer au développement économique.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#000000' }}>Productivité</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#F9FAFB' }}>
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#8CC53E' }}>Rendements améliorés</h3>
                <p style={{ color: '#6B7280' }}>Les semences de qualité permettent d'augmenter significativement les rendements agricoles</p>
              </div>
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#F9FAFB' }}>
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#8CC53E' }}>Résilience</h3>
                <p style={{ color: '#6B7280' }}>Variétés adaptées aux conditions locales et résistantes aux stress</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#000000' }}>Développement</h2>
            <p className="text-lg leading-relaxed" style={{ color: '#374151' }}>
              Un secteur semencier fort renforce toute la chaîne de valeur agricole, créant des 
              opportunités économiques pour les agriculteurs, les entreprises et les communautés, 
              contribuant ainsi à la réduction de la pauvreté et au développement rural.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

'use client';

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHero from "@/components/page-hero";

export default function VisionPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <PageHero 
        title="Vision"
        description="Vision continentale d'AfricaSeeds pour l'Afrique"
      />
      
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Introduction */}
          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#000000' }}>Pourquoi AfricaSeeds existe</h2>
            <p className="text-lg leading-relaxed" style={{ color: '#374151' }}>
              AfricaSeeds a été créé pour répondre aux défis majeurs auxquels fait face le secteur semencier 
              africain. Face à la nécessité d'améliorer la sécurité alimentaire, la productivité agricole 
              et la résilience face aux changements climatiques, AfricaSeeds s'est donné pour mission de 
              renforcer les systèmes semenciers à travers le continent.
            </p>
          </div>

          {/* Vision continentale */}
          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#000000' }}>Vision continentale du secteur semencier</h2>
            <p className="text-lg leading-relaxed mb-4" style={{ color: '#374151' }}>
              Notre vision est celle d'un secteur semencier africain unifié, robuste et prospère qui :
            </p>
            <ul className="space-y-3 text-lg" style={{ color: '#374151' }}>
              <li className="flex items-start">
                <span className="mr-3" style={{ color: '#8CC53E' }}>•</span>
                <span>Assure un accès équitable aux semences de qualité pour tous les agriculteurs</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3" style={{ color: '#8CC53E' }}>•</span>
                <span>Favorise l'harmonisation des politiques et réglementations à l'échelle continentale</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3" style={{ color: '#8CC53E' }}>•</span>
                <span>Encourage l'innovation et la recherche pour des variétés adaptées aux conditions locales</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3" style={{ color: '#8CC53E' }}>•</span>
                <span>Renforce la résilience face aux défis climatiques et environnementaux</span>
              </li>
            </ul>
          </div>

          {/* Agriculture durable */}
          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#000000' }}>Agriculture durable & résilience climatique</h2>
            <p className="text-lg leading-relaxed" style={{ color: '#374151' }}>
              AfricaSeeds promeut une agriculture durable qui préserve l'environnement tout en améliorant 
              la productivité. Nous encourageons le développement de variétés résistantes aux stress 
              climatiques, la conservation de la biodiversité et l'adoption de pratiques agricoles 
              respectueuses de l'environnement.
            </p>
          </div>

          {/* Rôle stratégique */}
          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#000000' }}>Rôle stratégique des semences</h2>
            <p className="text-lg leading-relaxed" style={{ color: '#374151' }}>
              Les semences sont le point de départ de toute transformation agricole. Elles déterminent 
              le potentiel de rendement, la qualité des produits et la résilience des systèmes agricoles. 
              En renforçant les systèmes semenciers, AfricaSeeds contribue directement à l'amélioration 
              de la sécurité alimentaire et au développement économique du continent.
            </p>
          </div>

          {/* Citation */}
          <div className="pt-8 border-t" style={{ borderColor: '#E5E7EB' }}>
            <blockquote className="text-xl italic text-center" style={{ color: '#374151' }}>
              "Une Afrique où tous les agriculteurs ont accès à des semences de qualité, où les systèmes 
              semenciers sont harmonisés et innovants, et où l'agriculture durable assure la sécurité 
              alimentaire pour les générations futures."
            </blockquote>
            <p className="text-center mt-4 font-semibold" style={{ color: '#000000' }}>
              — Vision AfricaSeeds
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

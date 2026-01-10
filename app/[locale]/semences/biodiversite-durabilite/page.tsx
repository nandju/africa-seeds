'use client';

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHero from "@/components/page-hero";

export default function BiodiversiteDurabilitePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <PageHero 
        title="Biodiversité & Durabilité"
        description="Protection des ressources génétiques et promotion de pratiques durables"
      />
      
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#000000' }}>Protection des ressources génétiques</h2>
            <p className="text-lg leading-relaxed" style={{ color: '#374151' }}>
              La biodiversité agricole est essentielle pour la résilience et la durabilité des systèmes 
              agricoles. AfricaSeeds promeut la conservation et l'utilisation durable de la diversité 
              génétique des semences, en particulier des variétés locales et adaptées aux conditions 
              africaines.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#000000' }}>Approches de conservation</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#F9FAFB' }}>
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#8CC53E' }}>Conservation in situ</h3>
                <p style={{ color: '#6B7280' }}>Conservation dans les champs des agriculteurs et dans les environnements naturels</p>
              </div>
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#F9FAFB' }}>
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#8CC53E' }}>Conservation ex situ</h3>
                <p style={{ color: '#6B7280' }}>Conservation dans les banques de gènes et centres de ressources génétiques</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#000000' }}>Durabilité</h2>
            <ul className="space-y-3 text-lg" style={{ color: '#374151' }}>
              <li className="flex items-start">
                <span className="mr-3" style={{ color: '#8CC53E' }}>•</span>
                <span>Promotion de pratiques de production durables</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3" style={{ color: '#8CC53E' }}>•</span>
                <span>Développement de variétés résistantes aux stress environnementaux</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3" style={{ color: '#8CC53E' }}>•</span>
                <span>Encouragement de l'agroécologie</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

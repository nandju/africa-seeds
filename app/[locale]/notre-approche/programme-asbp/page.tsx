'use client';

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHero from "@/components/page-hero";

export default function ProgrammeASBPPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <PageHero 
        title="Programme ASBP"
        description="Mandat confié par l'Union Africaine"
      />
      
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto space-y-12">
          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#000000' }}>Présentation ASBP</h2>
            <p className="text-lg leading-relaxed" style={{ color: '#374151' }}>
              Le Programme d'Appui aux Systèmes Semenciers (ASBP) est le programme phare d'AfricaSeeds, 
              mandaté par l'Union africaine pour renforcer les capacités des systèmes semenciers à travers 
              le continent.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#000000' }}>Mandat</h2>
            <p className="text-lg leading-relaxed" style={{ color: '#374151' }}>
              AfricaSeeds a reçu le mandat de l'Union africaine pour coordonner et mettre en œuvre le 
              Programme ASBP, qui vise à harmoniser les politiques semencières, renforcer les capacités 
              institutionnelles et améliorer l'accès aux semences de qualité.
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#000000' }}>Zones d'intervention</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#F9FAFB' }}>
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#8CC53E' }}>Niveau continental</h3>
                <p style={{ color: '#6B7280' }}>Harmonisation des politiques et coordination régionale</p>
              </div>
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#F9FAFB' }}>
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#8CC53E' }}>Niveau régional</h3>
                <p style={{ color: '#6B7280' }}>Renforcement des capacités des organisations régionales</p>
              </div>
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#F9FAFB' }}>
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#8CC53E' }}>Niveau national</h3>
                <p style={{ color: '#6B7280' }}>Appui technique aux États membres</p>
              </div>
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#F9FAFB' }}>
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#8CC53E' }}>Niveau local</h3>
                <p style={{ color: '#6B7280' }}>Soutien aux acteurs de terrain</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#000000' }}>Impacts</h2>
            <ul className="space-y-3 text-lg" style={{ color: '#374151' }}>
              <li className="flex items-start">
                <span className="mr-3" style={{ color: '#8CC53E' }}>•</span>
                <span>Renforcement des systèmes semenciers nationaux</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3" style={{ color: '#8CC53E' }}>•</span>
                <span>Amélioration de l'accès aux semences de qualité</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3" style={{ color: '#8CC53E' }}>•</span>
                <span>Augmentation de la productivité agricole</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3" style={{ color: '#8CC53E' }}>•</span>
                <span>Contribution à la sécurité alimentaire</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

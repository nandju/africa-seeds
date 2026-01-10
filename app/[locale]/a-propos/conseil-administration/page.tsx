'use client';

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHero from "@/components/page-hero";

export default function ConseilAdministrationPage() {
  const membres = [
    { nom: "Nom Administrateur 1", fonction: "Président", pays: "Pays", institution: "Institution" },
    { nom: "Nom Administrateur 2", fonction: "Vice-président", pays: "Pays", institution: "Institution" },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <PageHero 
        title="Conseil d'administration"
        description="Gouvernance et transparence institutionnelle"
      />
      
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Rôle du Conseil */}
          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#000000' }}>Rôle du Conseil</h2>
            <p className="text-lg leading-relaxed" style={{ color: '#374151' }}>
              Le Conseil d'administration d'AfricaSeeds assure la gouvernance stratégique de l'organisation. 
              Il définit les orientations politiques, approuve les programmes et supervise leur mise en œuvre, 
              garantissant ainsi la transparence et l'efficacité des actions d'AfricaSeeds.
            </p>
          </div>

          {/* Composition */}
          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#000000' }}>Composition</h2>
            <p className="text-lg leading-relaxed mb-6" style={{ color: '#374151' }}>
              Le Conseil est composé de représentants des États membres, des institutions partenaires et 
              d'experts du secteur semencier, reflétant ainsi la diversité et la représentativité continentale.
            </p>
          </div>

          {/* Liste des membres */}
          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#000000' }}>Membres du Conseil</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {membres.map((membre, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-lg border text-center"
                  style={{ borderColor: '#E5E7EB', backgroundColor: '#FFFFFF' }}
                >
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-200 flex items-center justify-center">
                    <span style={{ color: '#9CA3AF' }}>Photo</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2" style={{ color: '#000000' }}>
                    {membre.nom}
                  </h3>
                  <p className="text-sm font-medium mb-1" style={{ color: '#8CC53E' }}>
                    {membre.fonction}
                  </p>
                  <p className="text-sm" style={{ color: '#6B7280' }}>
                    {membre.pays} / {membre.institution}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Mandats */}
          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#000000' }}>Mandats</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#F9FAFB' }}>
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#8CC53E' }}>Durée</h3>
                <p style={{ color: '#6B7280' }}>Les membres du Conseil sont nommés pour une période déterminée selon les statuts</p>
              </div>
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#F9FAFB' }}>
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#8CC53E' }}>Renouvellement</h3>
                <p style={{ color: '#6B7280' }}>Les mandats peuvent être renouvelés selon les procédures établies</p>
              </div>
            </div>
          </div>

          {/* Fonctionnement */}
          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#000000' }}>Fonctionnement</h2>
            <p className="text-lg leading-relaxed" style={{ color: '#374151' }}>
              Le Conseil se réunit régulièrement pour examiner les rapports d'activités, approuver les 
              stratégies et budgets, et prendre les décisions importantes concernant l'orientation de 
              l'organisation. Les décisions sont prises selon les principes de transparence et de 
              participation démocratique.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

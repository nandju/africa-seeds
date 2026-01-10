'use client';

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHero from "@/components/page-hero";

export default function EtatsMembresPage() {
  const etatsMembres = [
    { nom: "Burkina Faso", dateAdhesion: "2020" },
    { nom: "Cameroun", dateAdhesion: "2020" },
    // Ajouter d'autres États membres selon les besoins
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <PageHero 
        title="États membres"
        description="Légitimité panafricaine d'AfricaSeeds"
      />
      
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto space-y-12">
          {/* Introduction */}
          <div>
            <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto" style={{ color: '#374151' }}>
              AfricaSeeds rassemble les États membres de l'Union africaine engagés dans le renforcement 
              des systèmes semenciers. Cette adhésion témoigne de l'engagement continental pour une 
              transformation agricole durable.
            </p>
          </div>

          {/* Carte de l'Afrique */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-center" style={{ color: '#000000' }}>Carte des États membres</h2>
            <div className="w-full h-96 bg-gray-100 rounded-lg flex items-center justify-center">
              <p style={{ color: '#9CA3AF' }}>Carte interactive à venir</p>
            </div>
          </div>

          {/* Liste des pays */}
          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#000000' }}>Liste des pays membres</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {etatsMembres.map((etat, index) => (
                <div 
                  key={index}
                  className="p-6 rounded-lg border text-center"
                  style={{ borderColor: '#E5E7EB', backgroundColor: '#FFFFFF' }}
                >
                  <h3 className="text-xl font-semibold mb-2" style={{ color: '#000000' }}>
                    {etat.nom}
                  </h3>
                  <p className="text-sm" style={{ color: '#6B7280' }}>
                    Membre depuis {etat.dateAdhesion}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Rôle des États */}
          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#000000' }}>Rôle des États</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#F9FAFB' }}>
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#8CC53E' }}>Participation active</h3>
                <p style={{ color: '#6B7280' }}>Les États membres participent à la définition des orientations stratégiques</p>
              </div>
              <div className="p-6 rounded-lg" style={{ backgroundColor: '#F9FAFB' }}>
                <h3 className="text-xl font-semibold mb-3" style={{ color: '#8CC53E' }}>Mise en œuvre</h3>
                <p style={{ color: '#6B7280' }}>Implémentation des programmes et politiques au niveau national</p>
              </div>
            </div>
          </div>

          {/* Modalités d'adhésion */}
          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#000000' }}>Modalités d'adhésion</h2>
            <p className="text-lg leading-relaxed" style={{ color: '#374151' }}>
              Les États membres de l'Union africaine peuvent adhérer à AfricaSeeds selon les modalités 
              définies dans les statuts de l'organisation. L'adhésion implique un engagement en faveur 
              du développement du secteur semencier et de l'harmonisation des politiques.
            </p>
          </div>

          {/* Chiffres clés */}
          <div className="grid md:grid-cols-3 gap-6 pt-8 border-t" style={{ borderColor: '#E5E7EB' }}>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2" style={{ color: '#8CC53E' }}>
                {etatsMembres.length}+
              </div>
              <p style={{ color: '#6B7280' }}>États membres</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2" style={{ color: '#8CC53E' }}>
                54
              </div>
              <p style={{ color: '#6B7280' }}>Pays africains</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2" style={{ color: '#8CC53E' }}>
                100%
              </div>
              <p style={{ color: '#6B7280' }}>Engagement continental</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

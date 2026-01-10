'use client';

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHero from "@/components/page-hero";

export default function PartenariatsPage() {
  const categories = {
    "Institutions": [
      { nom: "Union Africaine", description: "Organisation continentale" },
      { nom: "ECOWAS", description: "Communauté économique d'Afrique de l'Ouest" },
      { nom: "COMESA", description: "Marché commun d'Afrique de l'Est et du Sud" },
    ],
    "Recherche & ONG": [
      { nom: "IITA", description: "Institut international d'agriculture tropicale" },
      { nom: "CGIAR", description: "Groupe consultatif pour la recherche agricole" },
    ],
    "Secteur privé": [
      { nom: "Entreprises semencières", description: "Producteurs et distributeurs" },
    ]
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <PageHero 
        title="Partenariats"
        description="Réseau institutionnel et collaborations stratégiques"
      />
      
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto space-y-16">
          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#000000' }}>Types de partenaires</h2>
            <p className="text-lg leading-relaxed" style={{ color: '#374151' }}>
              AfricaSeeds collabore avec un large éventail de partenaires pour maximiser l'impact de ses 
              actions et assurer une approche coordonnée du développement du secteur semencier africain.
            </p>
          </div>

          {Object.entries(categories).map(([categorie, partenaires]) => (
            <div key={categorie}>
              <h2 className="text-3xl font-bold mb-8" style={{ color: '#000000' }}>{categorie}</h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {partenaires.map((partenaire, index) => (
                  <div 
                    key={index}
                    className="p-6 rounded-lg border"
                    style={{ borderColor: '#E5E7EB', backgroundColor: '#FFFFFF' }}
                  >
                    <h3 className="text-lg font-semibold mb-2" style={{ color: '#000000' }}>
                      {partenaire.nom}
                    </h3>
                    <p className="text-sm" style={{ color: '#6B7280' }}>
                      {partenaire.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div>
            <h2 className="text-3xl font-bold mb-6" style={{ color: '#000000' }}>Institutions clés</h2>
            <p className="text-lg leading-relaxed" style={{ color: '#374151' }}>
              Nos partenariats avec les institutions régionales et internationales permettent de coordonner 
              les efforts, éviter les duplications et maximiser l'efficacité des interventions dans le 
              secteur semencier.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

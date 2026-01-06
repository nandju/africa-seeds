'use client';

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import { Target, Globe, TrendingUp } from "lucide-react";

export default function NotreVisionPage() {
  const odds = [
    {
      number: "2",
      title: "ODD 2 : Faim zéro",
      description: "Éliminer la faim, assurer la sécurité alimentaire, améliorer la nutrition et promouvoir l'agriculture durable."
    },
    {
      number: "8",
      title: "ODD 8 : Travail décent",
      description: "Promouvoir une croissance économique durable et créer des emplois décents dans le secteur agricole."
    },
    {
      number: "13",
      title: "ODD 13 : Action climatique",
      description: "Renforcer la résilience et la capacité d'adaptation face aux changements climatiques."
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full pt-32 pb-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <span className="inline-block px-4 py-2 border rounded-full text-sm font-medium mb-6" style={{ borderColor: '#8CC53E', color: '#8CC53E' }}>
            À PROPOS
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: '#000000' }}>
            Notre vision
          </h1>
        </div>
      </section>

      {/* Vision à long terme */}
      <section className="w-full py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Target className="w-16 h-16 mx-auto mb-6" style={{ color: '#8CC53E' }} />
            <h2 className="text-4xl font-bold mb-6" style={{ color: '#000000' }}>Vision à 10-20 ans</h2>
            <p className="text-xl md:text-2xl leading-relaxed font-medium" style={{ color: '#666666' }}>
              D'ici 2030-2040, AfricaSeeds aspire à être le leader incontesté de la transformation du secteur semencier africain, avec un impact mesurable sur la sécurité alimentaire, la productivité agricole et la résilience climatique à travers tout le continent.
            </p>
          </div>
        </div>
      </section>

      {/* Rôle stratégique */}
      <section className="w-full py-16 px-4 md:px-8 lg:px-16" style={{ backgroundColor: '#f9fafb' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <Image
                src="/assets/images/backgrounds/sustainable-agricultural-transformation.jpg"
                alt="Rôle stratégique"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <Globe className="w-12 h-12 mb-6" style={{ color: '#8CC53E' }} />
              <h2 className="text-4xl font-bold mb-6" style={{ color: '#000000' }}>Rôle stratégique en Afrique</h2>
              <p className="text-lg leading-relaxed mb-6" style={{ color: '#666666' }}>
                AfricaSeeds se positionne comme la plateforme de référence pour la coordination continentale du secteur semencier, facilitant les échanges, les partenariats et l'harmonisation des politiques.
              </p>
              <ul className="space-y-4">
                {[
                  "Coordination panafricaine des initiatives semencières",
                  "Hub de connaissances et d'expertise",
                  "Interface entre acteurs publics et privés",
                  "Catalyseur d'investissements dans le secteur"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#8CC53E' }} />
                    <span className="text-base" style={{ color: '#666666' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contribution aux ODD */}
      <section className="w-full py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: '#000000' }}>Contribution aux Objectifs de Développement Durable</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {odds.map((odd, index) => (
              <div key={index} className="p-8 rounded-xl border-2 text-center" style={{ borderColor: '#8CC53E' }}>
                <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center text-3xl font-bold" style={{ backgroundColor: '#8CC53E', color: '#FFFFFF' }}>
                  {odd.number}
                </div>
                <h3 className="text-xl font-bold mb-4" style={{ color: '#000000' }}>{odd.title}</h3>
                <p className="text-base leading-relaxed" style={{ color: '#666666' }}>{odd.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline prospective */}
      <section className="w-full py-16 px-4 md:px-8 lg:px-16" style={{ backgroundColor: '#f9fafb' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: '#000000' }}>Timeline prospective</h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full" style={{ backgroundColor: '#8CC53E' }}></div>
            <div className="space-y-12">
              {[
                { year: "2025", title: "Expansion régionale", description: "Renforcement de notre présence dans toutes les régions d'Afrique" },
                { year: "2030", title: "Impact mesurable", description: "Atteinte d'objectifs significatifs en matière de sécurité alimentaire" },
                { year: "2035", title: "Leadership continental", description: "Reconnaissance comme leader du secteur semencier africain" },
                { year: "2040", title: "Transformation durable", description: "Secteur semencier africain transformé et résilient" }
              ].map((milestone, index) => (
                <div key={index} className={`flex items-center gap-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className="flex-1 text-right" style={{ display: index % 2 === 0 ? 'block' : 'none' }}>
                    <h3 className="text-2xl font-bold mb-2" style={{ color: '#000000' }}>{milestone.year}</h3>
                    <h4 className="text-xl font-semibold mb-2" style={{ color: '#8CC53E' }}>{milestone.title}</h4>
                    <p className="text-base" style={{ color: '#666666' }}>{milestone.description}</p>
                  </div>
                  <div className="w-8 h-8 rounded-full border-4" style={{ backgroundColor: '#FFFFFF', borderColor: '#8CC53E' }}></div>
                  <div className="flex-1 text-left" style={{ display: index % 2 === 1 ? 'block' : 'none' }}>
                    <h3 className="text-2xl font-bold mb-2" style={{ color: '#000000' }}>{milestone.year}</h3>
                    <h4 className="text-xl font-semibold mb-2" style={{ color: '#8CC53E' }}>{milestone.title}</h4>
                    <p className="text-base" style={{ color: '#666666' }}>{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

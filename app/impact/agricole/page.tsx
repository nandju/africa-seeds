'use client';

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHero from "@/components/page-hero";
import Image from "next/image";
import { MapPin, TrendingUp, Award } from "lucide-react";

export default function ImpactAgricolePage() {
  const zones = [
    { name: "Afrique de l'Ouest", pays: ["Sénégal", "Mali", "Burkina Faso", "Niger"], impact: "15 000 agriculteurs" },
    { name: "Afrique Centrale", pays: ["Cameroun", "Tchad", "RCA"], impact: "8 000 agriculteurs" },
    { name: "Afrique de l'Est", pays: ["Kenya", "Tanzanie", "Ouganda"], impact: "12 000 agriculteurs" },
    { name: "Afrique Australe", pays: ["Zambie", "Malawi", "Mozambique"], impact: "10 000 agriculteurs" }
  ];

  const cultures = [
    { name: "Maïs", rendement: "+35%", image: "/assets/images/backgrounds/quality-seeds-and-agricultural-products.jpg" },
    { name: "Riz", rendement: "+28%", image: "/assets/images/backgrounds/african-farmers-in-seed-field.jpg" },
    { name: "Sorgho", rendement: "+42%", image: "/assets/images/backgrounds/sustainable-agricultural-transformation.jpg" },
    { name: "Millet", rendement: "+30%", image: "/assets/images/backgrounds/food-security-and-crop-diversity.jpg" }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <PageHero 
        title="Impact agricole"
        description="Transformations mesurables sur le terrain : des résultats concrets pour les agriculteurs africains."
      />

      {/* Zones impactées */}
      <section className="w-full py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: '#000000' }}>Zones impactées</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {zones.map((zone, index) => (
              <div key={index} className="p-8 rounded-xl border" style={{ borderColor: '#e5e7eb' }}>
                <div className="flex items-start gap-4 mb-6">
                  <MapPin className="w-8 h-8 flex-shrink-0" style={{ color: '#8CC53E' }} />
                  <div>
                    <h3 className="text-2xl font-bold mb-2" style={{ color: '#000000' }}>{zone.name}</h3>
                    <p className="text-base mb-4" style={{ color: '#666666' }}>{zone.impact} impactés</p>
                    <div className="flex flex-wrap gap-2">
                      {zone.pays.map((pays, idx) => (
                        <span key={idx} className="px-3 py-1 rounded-full text-sm" style={{ backgroundColor: '#E8F5E9', color: '#8CC53E' }}>
                          {pays}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Types de cultures */}
      <section className="w-full py-16 px-4 md:px-8 lg:px-16" style={{ backgroundColor: '#f9fafb' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: '#000000' }}>Types de cultures concernées</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cultures.map((culture, index) => (
              <div key={index} className="group">
                <div className="relative h-64 rounded-xl overflow-hidden mb-4">
                  <Image
                    src={culture.image || "/placeholder.svg"}
                    alt={culture.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-1">{culture.name}</h3>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-white" />
                      <span className="text-white font-semibold">{culture.rendement}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Amélioration des rendements */}
      <section className="w-full py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: '#000000' }}>Amélioration des rendements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Rendement moyen", value: "+32%", description: "Augmentation moyenne des rendements" },
              { title: "Qualité des semences", value: "95%", description: "Taux de certification atteint" },
              { title: "Adoption", value: "45 000", description: "Agriculteurs bénéficiaires" }
            ].map((stat, index) => (
              <div key={index} className="text-center p-8 rounded-xl border-2" style={{ borderColor: '#8CC53E' }}>
                <Award className="w-12 h-12 mx-auto mb-4" style={{ color: '#8CC53E' }} />
                <div className="text-5xl font-bold mb-2" style={{ color: '#8CC53E' }}>{stat.value}</div>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#000000' }}>{stat.title}</h3>
                <p className="text-base" style={{ color: '#666666' }}>{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cartes / Chiffres clés */}
      <section className="w-full py-16 px-4 md:px-8 lg:px-16" style={{ backgroundColor: '#f9fafb' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: '#000000' }}>Chiffres clés</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "45 000+", label: "Agriculteurs impactés" },
              { number: "12", label: "Pays d'intervention" },
              { number: "8", label: "Types de cultures" },
              { number: "32%", label: "Augmentation moyenne" }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-white border" style={{ borderColor: '#e5e7eb' }}>
                <div className="text-4xl font-bold mb-2" style={{ color: '#8CC53E' }}>{stat.number}</div>
                <p className="text-sm" style={{ color: '#666666' }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

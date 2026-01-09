'use client';

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHero from "@/components/page-hero";
import Image from "next/image";
import { Leaf, Calendar, MapPin, ArrowRight } from "lucide-react";

export default function HistoiresDeTerrainPage() {
  const histoires = [
    {
      title: "Amadou : De la subsistance à l'entrepreneuriat agricole",
      location: "Sénégal",
      date: "10 Janvier 2025",
      description: "Découvrez comment Amadou a transformé sa petite exploitation en une entreprise prospère grâce aux semences certifiées et à l'accompagnement d'AfricaSeeds.",
      image: "/assets/images/backgrounds/african-farmers-in-seed-field.jpg",
      avant: "Production : 1,5 tonnes/ha",
      apres: "Production : 4,2 tonnes/ha"
    },
    {
      title: "La coopérative de Thiès : Un modèle de réussite collective",
      location: "Sénégal",
      date: "5 Janvier 2025",
      description: "Comment une coopérative de 50 agriculteurs a multiplié sa production par trois et amélioré les conditions de vie de toute la communauté.",
      image: "/assets/images/backgrounds/quality-seeds-and-agricultural-products.jpg",
      avant: "50 membres, 20 hectares",
      apres: "50 membres, 60 hectares, revenus x3"
    },
    {
      title: "Fatou : L'agricultrice qui inspire sa communauté",
      location: "Mali",
      date: "28 Décembre 2024",
      description: "Portrait de Fatou, une agricultrice qui a non seulement amélioré sa production mais qui forme maintenant d'autres femmes de sa région.",
      image: "/assets/images/backgrounds/sustainable-agricultural-transformation.jpg",
      avant: "Formation de 5 femmes",
      apres: "Formation de 50+ femmes"
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <PageHero 
        title="Histoires de terrain"
        description="Récits humains et success stories de ceux qui transforment l'agriculture africaine au quotidien."
      />

      {/* Histoires Grid */}
      <section className="w-full py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-12">
            {histoires.map((histoire, index) => (
              <article key={index} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center group">
                <div className="relative h-96 rounded-2xl overflow-hidden">
                  <Image
                    src={histoire.image || "/placeholder.svg"}
                    alt={histoire.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <div>
                  <div className="flex items-center gap-4 text-sm mb-4" style={{ color: '#666666' }}>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{histoire.location}</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{histoire.date}</span>
                    </div>
                  </div>
                  <h2 className="text-3xl font-bold mb-4" style={{ color: '#000000' }}>{histoire.title}</h2>
                  <p className="text-lg leading-relaxed mb-6" style={{ color: '#666666' }}>{histoire.description}</p>
                  
                  {/* Avant / Après */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="p-4 rounded-xl border" style={{ borderColor: '#e5e7eb', backgroundColor: '#f9fafb' }}>
                      <p className="text-xs font-medium mb-2" style={{ color: '#666666' }}>AVANT</p>
                      <p className="text-base font-semibold" style={{ color: '#000000' }}>{histoire.avant}</p>
                    </div>
                    <div className="p-4 rounded-xl border-2" style={{ borderColor: '#8CC53E', backgroundColor: '#E8F5E9' }}>
                      <p className="text-xs font-medium mb-2" style={{ color: '#8CC53E' }}>APRÈS</p>
                      <p className="text-base font-semibold" style={{ color: '#000000' }}>{histoire.apres}</p>
                    </div>
                  </div>

                  <a href="#" className="inline-flex items-center gap-2 font-medium transition-colors" style={{ color: '#8CC53E' }} onMouseEnter={(e) => e.currentTarget.style.color = '#6da82f'} onMouseLeave={(e) => e.currentTarget.style.color = '#8CC53E'}>
                    Lire l'histoire complète
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section Success Stories */}
      <section className="w-full py-16 px-4 md:px-8 lg:px-16" style={{ backgroundColor: '#f9fafb' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Leaf className="w-12 h-12 mx-auto mb-6" style={{ color: '#8CC53E' }} />
            <h2 className="text-4xl font-bold mb-6" style={{ color: '#000000' }}>Success Stories</h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#666666' }}>
              Chaque histoire est unique et témoigne de la transformation positive que nous apportons ensemble.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { number: "500+", label: "Histoires de réussite" },
              { number: "45 000+", label: "Agriculteurs impactés" },
              { number: "12", label: "Pays concernés" }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-white border" style={{ borderColor: '#e5e7eb' }}>
                <div className="text-4xl font-bold mb-2" style={{ color: '#8CC53E' }}>{stat.number}</div>
                <p className="text-base" style={{ color: '#666666' }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

'use client';

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHero from "@/components/page-hero";
import Image from "next/image";
import { Megaphone, Calendar, MapPin, Clock, Users, ArrowRight } from "lucide-react";

export default function EvenementsPage() {
  const evenements = [
    {
      title: "Webinaire : L'avenir du secteur semencier en Afrique",
      type: "Webinaire",
      date: "25 Février 2025",
      heure: "14:00 - 16:00 UTC",
      location: "En ligne",
      participants: "200+",
      description: "Discussion sur les tendances et perspectives du secteur semencier africain avec des experts internationaux.",
      image: "/assets/images/backgrounds/african-farmers-in-seed-field.jpg"
    },
    {
      title: "Conférence régionale : Innovation semencière",
      type: "Conférence",
      date: "15-17 Mars 2025",
      heure: "9:00 - 17:00",
      location: "Dakar, Sénégal",
      participants: "300+",
      description: "Rassemblement des acteurs du secteur semencier pour échanger sur les innovations et meilleures pratiques.",
      image: "/assets/images/backgrounds/quality-seeds-and-agricultural-products.jpg"
    },
    {
      title: "Atelier terrain : Production de semences certifiées",
      type: "Atelier",
      date: "10 Avril 2025",
      heure: "8:00 - 16:00",
      location: "Bamako, Mali",
      participants: "50",
      description: "Formation pratique sur les techniques de production de semences certifiées pour les agriculteurs et techniciens.",
      image: "/assets/images/backgrounds/sustainable-agricultural-transformation.jpg"
    },
    {
      title: "Webinaire : Digitalisation du secteur semencier",
      type: "Webinaire",
      date: "5 Mai 2025",
      heure: "15:00 - 17:00 UTC",
      location: "En ligne",
      participants: "150+",
      description: "Exploration des outils numériques et leur impact sur l'amélioration de l'accès aux semences.",
      image: "/assets/images/backgrounds/food-security-and-crop-diversity.jpg"
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <PageHero 
        title="Événements"
        description="Découvrez nos webinaires, conférences et ateliers terrain pour échanger et apprendre ensemble."
      />

      {/* Événements Grid */}
      <section className="w-full py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {evenements.map((evenement, index) => (
              <article key={index} className="group border rounded-2xl overflow-hidden transition-all hover:shadow-xl" style={{ borderColor: '#e5e7eb' }}>
                <div className="relative h-64">
                  <Image
                    src={evenement.image || "/placeholder.svg"}
                    alt={evenement.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: '#8CC53E', color: '#FFFFFF' }}>
                      {evenement.type}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-4" style={{ color: '#000000' }}>{evenement.title}</h2>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm" style={{ color: '#666666' }}>
                      <Calendar className="w-4 h-4" />
                      <span>{evenement.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm" style={{ color: '#666666' }}>
                      <Clock className="w-4 h-4" />
                      <span>{evenement.heure}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm" style={{ color: '#666666' }}>
                      <MapPin className="w-4 h-4" />
                      <span>{evenement.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm" style={{ color: '#666666' }}>
                      <Users className="w-4 h-4" />
                      <span>{evenement.participants} participants</span>
                    </div>
                  </div>
                  <p className="text-base leading-relaxed mb-6" style={{ color: '#666666' }}>{evenement.description}</p>
                  <button className="w-full px-6 py-3 rounded-full font-medium transition-all inline-flex items-center justify-center gap-2" style={{ backgroundColor: '#BA8E3B', color: '#FFFFFF' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'} onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
                    S'inscrire
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Filtres */}
      <section className="w-full py-8 px-4 md:px-8 lg:px-16" style={{ backgroundColor: '#f9fafb' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4">
            <button className="px-4 py-2 rounded-full border font-medium transition-all" style={{ borderColor: '#8CC53E', color: '#8CC53E', backgroundColor: '#FFFFFF' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#E8F5E9'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FFFFFF'}>
              Tous
            </button>
            {["Webinaires", "Conférences", "Ateliers"].map((type, index) => (
              <button key={index} className="px-4 py-2 rounded-full border font-medium transition-all" style={{ borderColor: '#e5e7eb', color: '#666666', backgroundColor: '#FFFFFF' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FFFFFF'}>
                {type}
              </button>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

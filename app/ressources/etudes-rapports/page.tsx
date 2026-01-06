'use client';

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import { Book, Download, Calendar, Filter, Search } from "lucide-react";

export default function EtudesRapportsPage() {
  const rapports = [
    {
      title: "Rapport annuel 2024",
      type: "Rapport annuel",
      date: "2024",
      description: "Bilan complet de nos activités et résultats pour l'année 2024.",
      image: "/assets/images/backgrounds/african-farmers-in-seed-field.jpg",
      pays: "Tous les pays"
    },
    {
      title: "Étude sectorielle : Marché des semences en Afrique de l'Ouest",
      type: "Étude sectorielle",
      date: "2024",
      description: "Analyse approfondie du marché des semences dans la région ouest-africaine.",
      image: "/assets/images/backgrounds/quality-seeds-and-agricultural-products.jpg",
      pays: "Afrique de l'Ouest"
    },
    {
      title: "Rapport annuel 2023",
      type: "Rapport annuel",
      date: "2023",
      description: "Bilan complet de nos activités et résultats pour l'année 2023.",
      image: "/assets/images/backgrounds/sustainable-agricultural-transformation.jpg",
      pays: "Tous les pays"
    },
    {
      title: "Étude : Impact du changement climatique sur le secteur semencier",
      type: "Étude sectorielle",
      date: "2023",
      description: "Évaluation de l'impact des changements climatiques et stratégies d'adaptation.",
      image: "/assets/images/backgrounds/food-security-and-crop-diversity.jpg",
      pays: "Tous les pays"
    }
  ];

  const themes = ["Tous les thèmes", "Politiques", "Marché", "Innovation", "Climat", "Sécurité alimentaire"];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full pt-32 pb-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <span className="inline-block px-4 py-2 border rounded-full text-sm font-medium mb-6" style={{ borderColor: '#8CC53E', color: '#8CC53E' }}>
            RESSOURCES
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: '#000000' }}>
            Études & Rapports
          </h1>
          <p className="text-xl md:text-2xl leading-relaxed max-w-3xl" style={{ color: '#666666' }}>
            Accédez à nos rapports annuels et études sectorielles approfondies sur le secteur semencier africain.
          </p>
        </div>
      </section>

      {/* Filtres */}
      <section className="w-full py-8 px-4 md:px-8 lg:px-16" style={{ backgroundColor: '#f9fafb' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5" style={{ color: '#666666' }} />
              <input
                type="text"
                placeholder="Rechercher..."
                className="w-full pl-12 pr-4 py-3 rounded-full border" style={{ borderColor: '#e5e7eb' }}
              />
            </div>
            <div className="flex items-center gap-4">
              <Filter className="w-5 h-5" style={{ color: '#666666' }} />
              <select className="px-4 py-3 rounded-full border" style={{ borderColor: '#e5e7eb' }}>
                <option>Tous les pays</option>
                <option>Afrique de l'Ouest</option>
                <option>Afrique Centrale</option>
                <option>Afrique de l'Est</option>
                <option>Afrique Australe</option>
              </select>
              <select className="px-4 py-3 rounded-full border" style={{ borderColor: '#e5e7eb' }}>
                {themes.map((theme, index) => (
                  <option key={index}>{theme}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Rapports Grid */}
      <section className="w-full py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {rapports.map((rapport, index) => (
              <div key={index} className="group border rounded-2xl overflow-hidden transition-all hover:shadow-xl" style={{ borderColor: '#e5e7eb' }}>
                <div className="relative h-64">
                  <Image
                    src={rapport.image || "/placeholder.svg"}
                    alt={rapport.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: '#BA8E3B', color: '#FFFFFF' }}>
                      {rapport.type}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3" style={{ color: '#000000' }}>{rapport.title}</h3>
                  <p className="text-base leading-relaxed mb-4" style={{ color: '#666666' }}>{rapport.description}</p>
                  <div className="flex items-center gap-4 text-sm mb-4" style={{ color: '#666666' }}>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{rapport.date}</span>
                    </div>
                    <span>•</span>
                    <span>{rapport.pays}</span>
                  </div>
                  <button className="w-full px-6 py-3 rounded-full font-medium transition-all inline-flex items-center justify-center gap-2" style={{ backgroundColor: '#BA8E3B', color: '#FFFFFF' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'} onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
                    <Download className="w-5 h-5" />
                    Télécharger PDF
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

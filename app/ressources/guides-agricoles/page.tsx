'use client';

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHero from "@/components/page-hero";
import Image from "next/image";
import { BookOpen, Download, Leaf, FileText } from "lucide-react";

export default function GuidesAgricolesPage() {
  const guides = [
    {
      title: "Guide des bonnes pratiques : Production de semences de maïs",
      type: "Guide pratique",
      culture: "Maïs",
      description: "Guide complet pour la production de semences de maïs de qualité.",
      image: "/assets/images/backgrounds/quality-seeds-and-agricultural-products.jpg"
    },
    {
      title: "Guide des bonnes pratiques : Production de semences de riz",
      type: "Guide pratique",
      culture: "Riz",
      description: "Techniques et méthodes pour produire des semences de riz certifiées.",
      image: "/assets/images/backgrounds/african-farmers-in-seed-field.jpg"
    },
    {
      title: "Guide : Conservation et stockage des semences",
      type: "Guide pratique",
      culture: "Général",
      description: "Meilleures pratiques pour la conservation et le stockage des semences.",
      image: "/assets/images/backgrounds/sustainable-agricultural-transformation.jpg"
    },
    {
      title: "Guide : Certification des semences en Afrique",
      type: "Guide pratique",
      culture: "Général",
      description: "Processus et exigences pour la certification des semences.",
      image: "/assets/images/backgrounds/food-security-and-crop-diversity.jpg"
    }
  ];

  const cultures = ["Toutes les cultures", "Maïs", "Riz", "Sorgho", "Millet", "Général"];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <PageHero 
        title="Guides agricoles"
        description="Accédez à nos guides pratiques pour améliorer vos pratiques agricoles et la production de semences."
      />

      {/* Filtres */}
      <section className="w-full py-8 px-4 md:px-8 lg:px-16" style={{ backgroundColor: '#f9fafb' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4">
            {cultures.map((culture, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full border font-medium transition-all ${
                  index === 0 ? 'border-[#8CC53E] text-[#8CC53E] bg-white' : 'border-[#e5e7eb] text-[#666666] bg-white'
                }`}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = index === 0 ? '#E8F5E9' : '#f3f4f6'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FFFFFF'}
              >
                {culture}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="w-full py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {guides.map((guide, index) => (
              <div key={index} className="group border rounded-2xl overflow-hidden transition-all hover:shadow-xl" style={{ borderColor: '#e5e7eb' }}>
                <div className="relative h-64">
                  <Image
                    src={guide.image || "/placeholder.svg"}
                    alt={guide.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: '#8CC53E', color: '#FFFFFF' }}>
                      {guide.culture}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <BookOpen className="w-5 h-5" style={{ color: '#8CC53E' }} />
                    <span className="text-sm font-medium" style={{ color: '#8CC53E' }}>{guide.type}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-3" style={{ color: '#000000' }}>{guide.title}</h3>
                  <p className="text-base leading-relaxed mb-6" style={{ color: '#666666' }}>{guide.description}</p>
                  <div className="flex gap-4">
                    <button className="flex-1 px-6 py-3 rounded-full font-medium transition-all inline-flex items-center justify-center gap-2" style={{ backgroundColor: '#BA8E3B', color: '#FFFFFF' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'} onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
                      <Download className="w-5 h-5" />
                      Télécharger
                    </button>
                    <button className="px-6 py-3 rounded-full font-medium transition-all border inline-flex items-center justify-center gap-2" style={{ borderColor: '#8CC53E', color: '#8CC53E' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#E8F5E9'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                      <FileText className="w-5 h-5" />
                      Lire en ligne
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Bonnes pratiques */}
      <section className="w-full py-16 px-4 md:px-8 lg:px-16" style={{ backgroundColor: '#f9fafb' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Leaf className="w-12 h-12 mx-auto mb-6" style={{ color: '#8CC53E' }} />
            <h2 className="text-4xl font-bold mb-6" style={{ color: '#000000' }}>Bonnes pratiques</h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#666666' }}>
              Nos guides sont basés sur les meilleures pratiques internationales et adaptés aux conditions africaines.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              "Techniques de production",
              "Gestion de la qualité",
              "Conservation et stockage",
              "Certification",
              "Commercialisation",
              "Gestion des risques"
            ].map((practice, index) => (
              <div key={index} className="p-6 rounded-xl bg-white border text-center" style={{ borderColor: '#e5e7eb' }}>
                <p className="text-base font-medium" style={{ color: '#000000' }}>{practice}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

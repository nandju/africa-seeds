'use client';

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHero from "@/components/page-hero";
import Image from "next/image";
import { FileText, Download, Calendar, User } from "lucide-react";

export default function PublicationsPage() {
  const publications = [
    {
      title: "Politiques semencières en Afrique : État des lieux et perspectives",
      type: "Article institutionnel",
      author: "Dr. Amara Diallo",
      date: "2024",
      description: "Analyse approfondie des politiques semencières à travers le continent africain.",
      image: "/assets/images/backgrounds/african-farmers-in-seed-field.jpg"
    },
    {
      title: "Note de position : Accès aux semences certifiées",
      type: "Note de position",
      author: "AfricaSeeds",
      date: "2024",
      description: "Position officielle d'AfricaSeeds sur l'accès aux semences certifiées en Afrique.",
      image: "/assets/images/backgrounds/quality-seeds-and-agricultural-products.jpg"
    },
    {
      title: "Innovation dans le secteur semencier : Défis et opportunités",
      type: "Article institutionnel",
      author: "Dr. Fatou Sall",
      date: "2023",
      description: "Exploration des innovations technologiques et leur impact sur le secteur semencier.",
      image: "/assets/images/backgrounds/sustainable-agricultural-transformation.jpg"
    },
    {
      title: "Note de position : Sécurité alimentaire et semences",
      type: "Note de position",
      author: "AfricaSeeds",
      date: "2023",
      description: "Lien entre sécurité alimentaire et accès aux semences de qualité.",
      image: "/assets/images/backgrounds/food-security-and-crop-diversity.jpg"
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <PageHero 
        title="Publications"
        description="Accédez à nos articles institutionnels et notes de position sur le secteur semencier africain."
      />

      {/* Publications Grid */}
      <section className="w-full py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {publications.map((pub, index) => (
              <div key={index} className="group border rounded-2xl overflow-hidden transition-all hover:shadow-xl" style={{ borderColor: '#e5e7eb' }}>
                <div className="relative h-64">
                  <Image
                    src={pub.image || "/placeholder.svg"}
                    alt={pub.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: '#8CC53E', color: '#FFFFFF' }}>
                      {pub.type}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3" style={{ color: '#000000' }}>{pub.title}</h3>
                  <p className="text-base leading-relaxed mb-4" style={{ color: '#666666' }}>{pub.description}</p>
                  <div className="flex items-center gap-4 text-sm mb-4" style={{ color: '#666666' }}>
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{pub.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{pub.date}</span>
                    </div>
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

      {/* Filtres */}
      <section className="w-full py-8 px-4 md:px-8 lg:px-16" style={{ backgroundColor: '#f9fafb' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-4">
            <button className="px-4 py-2 rounded-full border font-medium transition-all" style={{ borderColor: '#8CC53E', color: '#8CC53E', backgroundColor: '#FFFFFF' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#E8F5E9'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FFFFFF'}>
              Tous
            </button>
            <button className="px-4 py-2 rounded-full border font-medium transition-all" style={{ borderColor: '#e5e7eb', color: '#666666', backgroundColor: '#FFFFFF' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FFFFFF'}>
              Articles institutionnels
            </button>
            <button className="px-4 py-2 rounded-full border font-medium transition-all" style={{ borderColor: '#e5e7eb', color: '#666666', backgroundColor: '#FFFFFF' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FFFFFF'}>
              Notes de position
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

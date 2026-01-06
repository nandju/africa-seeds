'use client';

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import { Linkedin, Mail } from "lucide-react";

export default function NotreEquipePage() {
  const equipe = [
    {
      name: "Dr. Amara Diallo",
      role: "Directeur Exécutif",
      expertise: "Politiques semencières & Coordination continentale",
      image: "/assets/images/backgrounds/african-farmers-in-seed-field.jpg"
    },
    {
      name: "Dr. Fatou Sall",
      role: "Directrice Technique",
      expertise: "Innovation semencière & Recherche",
      image: "/assets/images/backgrounds/quality-seeds-and-agricultural-products.jpg"
    },
    {
      name: "M. Koffi Mensah",
      role: "Coordinateur Régional",
      expertise: "Afrique de l'Ouest",
      image: "/assets/images/backgrounds/sustainable-agricultural-transformation.jpg"
    },
    {
      name: "Dr. Sarah Ochieng",
      role: "Coordinatrice Régionale",
      expertise: "Afrique de l'Est",
      image: "/assets/images/backgrounds/food-security-and-crop-diversity.jpg"
    },
    {
      name: "Mme. Aissatou Ba",
      role: "Responsable Partenariats",
      expertise: "Relations institutionnelles",
      image: "/assets/images/backgrounds/african-farmers-in-seed-field.jpg"
    },
    {
      name: "Dr. Jean-Baptiste Nzeyimana",
      role: "Expert Technique",
      expertise: "Renforcement des capacités",
      image: "/assets/images/backgrounds/quality-seeds-and-agricultural-products.jpg"
    }
  ];

  const conseillers = [
    {
      name: "Prof. Kwame Asante",
      role: "Conseiller Stratégique",
      expertise: "Politiques agricoles"
    },
    {
      name: "Dr. Marie Kone",
      role: "Conseillère Technique",
      expertise: "Innovation & Digitalisation"
    },
    {
      name: "M. Ibrahim Traore",
      role: "Conseiller Partenariats",
      expertise: "Mobilisation de ressources"
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
            Notre équipe
          </h1>
          <p className="text-xl md:text-2xl leading-relaxed max-w-3xl" style={{ color: '#666666' }}>
            Découvrez les experts passionnés qui font d'AfricaSeeds une plateforme d'excellence pour le secteur semencier africain.
          </p>
        </div>
      </section>

      {/* Direction & Coordination */}
      <section className="w-full py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: '#000000' }}>Direction & Coordination</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipe.map((member, index) => (
              <div key={index} className="group">
                <div className="relative h-80 rounded-2xl overflow-hidden mb-4">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-white/90 text-sm">{member.role}</p>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-base mb-4" style={{ color: '#666666' }}>{member.expertise}</p>
                  <div className="flex gap-3">
                    <a href="#" className="p-2 rounded-lg transition-colors" style={{ backgroundColor: '#f3f4f6' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e5e7eb'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'}>
                      <Linkedin className="w-5 h-5" style={{ color: '#8CC53E' }} />
                    </a>
                    <a href="#" className="p-2 rounded-lg transition-colors" style={{ backgroundColor: '#f3f4f6' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e5e7eb'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'}>
                      <Mail className="w-5 h-5" style={{ color: '#8CC53E' }} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experts techniques */}
      <section className="w-full py-16 px-4 md:px-8 lg:px-16" style={{ backgroundColor: '#f9fafb' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: '#000000' }}>Experts techniques</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Agronomie & Production",
              "Qualité & Certification",
              "Politiques & Réglementation",
              "Digitalisation & Innovation",
              "Formation & Renforcement",
              "Partenariats & Financement",
              "Recherche & Développement",
              "Communication & Plaidoyer"
            ].map((expertise, index) => (
              <div key={index} className="p-6 rounded-xl bg-white border text-center" style={{ borderColor: '#e5e7eb' }}>
                <p className="text-base font-medium" style={{ color: '#000000' }}>{expertise}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Conseillers / Partenaires institutionnels */}
      <section className="w-full py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: '#000000' }}>Conseillers & Partenaires institutionnels</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {conseillers.map((conseiller, index) => (
              <div key={index} className="p-6 rounded-xl border" style={{ borderColor: '#e5e7eb' }}>
                <h3 className="text-xl font-bold mb-2" style={{ color: '#000000' }}>{conseiller.name}</h3>
                <p className="text-base font-medium mb-2" style={{ color: '#8CC53E' }}>{conseiller.role}</p>
                <p className="text-base" style={{ color: '#666666' }}>{conseiller.expertise}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

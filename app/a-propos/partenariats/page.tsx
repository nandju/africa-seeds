'use client';

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import { Building2, Users, GraduationCap, Briefcase, ArrowRight } from "lucide-react";

export default function PartenariatsPage() {
  const typesPartenaires = [
    {
      title: "Institutions publiques",
      description: "Gouvernements, ministères de l'agriculture, agences de développement",
      icon: Building2,
      examples: ["Ministères de l'Agriculture", "Agences de développement nationales", "Organisations régionales"]
    },
    {
      title: "ONG & Programmes internationaux",
      description: "Organisations non gouvernementales et programmes de développement",
      icon: Users,
      examples: ["FAO", "Banque mondiale", "Programmes d'aide au développement"]
    },
    {
      title: "Coopératives & Producteurs",
      description: "Organisations d'agriculteurs et producteurs de semences",
      icon: Users,
      examples: ["Coopératives agricoles", "Associations de producteurs", "Groupements paysans"]
    },
    {
      title: "Centres de recherche",
      description: "Instituts de recherche agricole et universités",
      icon: GraduationCap,
      examples: ["Instituts de recherche", "Universités", "Centres d'innovation"]
    }
  ];

  const partenaires = [
    { name: "Organisation Partenaire 1", logo: "/assets/images/backgrounds/african-farmers-in-seed-field.jpg", type: "Institution publique" },
    { name: "Organisation Partenaire 2", logo: "/assets/images/backgrounds/quality-seeds-and-agricultural-products.jpg", type: "ONG" },
    { name: "Organisation Partenaire 3", logo: "/assets/images/backgrounds/sustainable-agricultural-transformation.jpg", type: "Centre de recherche" },
    { name: "Organisation Partenaire 4", logo: "/assets/images/backgrounds/food-security-and-crop-diversity.jpg", type: "Coopérative" },
    { name: "Organisation Partenaire 5", logo: "/assets/images/backgrounds/african-farmers-in-seed-field.jpg", type: "Institution publique" },
    { name: "Organisation Partenaire 6", logo: "/assets/images/backgrounds/quality-seeds-and-agricultural-products.jpg", type: "ONG" }
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
            Partenariats
          </h1>
          <p className="text-xl md:text-2xl leading-relaxed max-w-3xl" style={{ color: '#666666' }}>
            Nous construisons un écosystème solide de partenariats stratégiques pour transformer le secteur semencier africain.
          </p>
        </div>
      </section>

      {/* Types de partenaires */}
      <section className="w-full py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: '#000000' }}>Types de partenaires</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {typesPartenaires.map((type, index) => {
              const IconComponent = type.icon;
              return (
                <div key={index} className="p-8 rounded-xl border" style={{ borderColor: '#e5e7eb' }}>
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-4 rounded-lg" style={{ backgroundColor: '#E8F5E9' }}>
                      <IconComponent className="w-8 h-8" style={{ color: '#8CC53E' }} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2" style={{ color: '#000000' }}>{type.title}</h3>
                      <p className="text-base mb-4" style={{ color: '#666666' }}>{type.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {type.examples.map((example, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#8CC53E' }}></div>
                        <span className="text-sm" style={{ color: '#666666' }}>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Logos partenaires */}
      <section className="w-full py-16 px-4 md:px-8 lg:px-16" style={{ backgroundColor: '#f9fafb' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: '#000000' }}>Nos partenaires</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {partenaires.map((partenaire, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="relative w-32 h-32 rounded-xl overflow-hidden mb-4 border" style={{ borderColor: '#e5e7eb' }}>
                  <Image
                    src={partenaire.logo || "/placeholder.svg"}
                    alt={partenaire.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-sm font-medium text-center mb-1" style={{ color: '#000000' }}>{partenaire.name}</p>
                <p className="text-xs text-center" style={{ color: '#666666' }}>{partenaire.type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Citations */}
      <section className="w-full py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: '#000000' }}>Ce que disent nos partenaires</h2>
          <div className="space-y-8">
            {[
              {
                quote: "AfricaSeeds est un partenaire essentiel dans notre mission de renforcer la sécurité alimentaire en Afrique.",
                author: "Directeur, Organisation Partenaire",
                role: "Institution publique"
              },
              {
                quote: "Leur approche collaborative et leur expertise technique font d'AfricaSeeds un acteur clé du secteur semencier.",
                author: "Représentant, ONG Internationale",
                role: "ONG"
              }
            ].map((testimonial, index) => (
              <div key={index} className="p-8 rounded-xl border-l-4" style={{ borderLeftColor: '#8CC53E', backgroundColor: '#f9fafb' }}>
                <p className="text-lg italic mb-4" style={{ color: '#666666' }}>"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold" style={{ color: '#000000' }}>— {testimonial.author}</p>
                  <p className="text-sm" style={{ color: '#666666' }}>{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Devenir partenaire */}
      <section className="w-full py-16 px-4 md:px-8 lg:px-16" style={{ backgroundColor: '#f9fafb' }}>
        <div className="max-w-4xl mx-auto text-center">
          <Briefcase className="w-16 h-16 mx-auto mb-6" style={{ color: '#8CC53E' }} />
          <h2 className="text-4xl font-bold mb-6" style={{ color: '#000000' }}>Devenir partenaire</h2>
          <p className="text-xl mb-8 leading-relaxed" style={{ color: '#666666' }}>
            Rejoignez notre réseau de partenaires et contribuez à transformer le secteur semencier africain.
          </p>
          <button className="px-8 py-4 rounded-full font-medium transition-all inline-flex items-center gap-2" style={{ backgroundColor: '#BA8E3B', color: '#FFFFFF' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'} onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
            Contactez-nous
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}

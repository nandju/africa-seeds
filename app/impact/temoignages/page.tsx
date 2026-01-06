'use client';

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import { Quote, Play, Users, Building2, Briefcase } from "lucide-react";

export default function TemoignagesPage() {
  const temoignagesAgriculteurs = [
    {
      quote: "Grâce aux semences certifiées d'AfricaSeeds, ma production de maïs a augmenté de 40%. Ma famille peut maintenant se nourrir correctement et j'ai même pu vendre le surplus.",
      author: "Amadou Diallo",
      role: "Agriculteur",
      location: "Sénégal",
      image: "/assets/images/backgrounds/african-farmers-in-seed-field.jpg"
    },
    {
      quote: "Les formations que j'ai reçues m'ont permis d'améliorer mes techniques agricoles. Je recommande AfricaSeeds à tous les agriculteurs de ma région.",
      author: "Fatou Sall",
      role: "Agricultrice",
      location: "Mali",
      image: "/assets/images/backgrounds/quality-seeds-and-agricultural-products.jpg"
    }
  ];

  const temoignagesCooperatives = [
    {
      quote: "Notre coopérative a bénéficié d'un accompagnement complet. L'accès aux semences de qualité et aux formations a transformé notre production collective.",
      author: "Coopérative Agricole de Thiès",
      role: "Coopérative",
      location: "Sénégal",
      image: "/assets/images/backgrounds/sustainable-agricultural-transformation.jpg"
    }
  ];

  const temoignagesPartenaires = [
    {
      quote: "AfricaSeeds est un partenaire fiable et efficace. Leur approche collaborative et leur expertise technique font d'eux un acteur essentiel du secteur semencier africain.",
      author: "Dr. Jean Koffi",
      role: "Directeur, Programme de Développement Agricole",
      location: "Côte d'Ivoire",
      image: "/assets/images/backgrounds/food-security-and-crop-diversity.jpg"
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full pt-32 pb-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <span className="inline-block px-4 py-2 border rounded-full text-sm font-medium mb-6" style={{ borderColor: '#8CC53E', color: '#8CC53E' }}>
            NOTRE IMPACT
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: '#000000' }}>
            Témoignages
          </h1>
          <p className="text-xl md:text-2xl leading-relaxed max-w-3xl" style={{ color: '#666666' }}>
            Découvrez les histoires de réussite de ceux qui ont bénéficié de nos programmes et services.
          </p>
        </div>
      </section>

      {/* Témoignages Agriculteurs */}
      <section className="w-full py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <Users className="w-8 h-8" style={{ color: '#8CC53E' }} />
            <h2 className="text-4xl font-bold" style={{ color: '#000000' }}>Agriculteurs</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {temoignagesAgriculteurs.map((temoignage, index) => (
              <div key={index} className="relative rounded-2xl overflow-hidden border" style={{ borderColor: '#e5e7eb' }}>
                <div className="relative h-64">
                  <Image
                    src={temoignage.image || "/placeholder.svg"}
                    alt={temoignage.author}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <Quote className="w-8 h-8 text-white/50" />
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-lg italic mb-6 leading-relaxed" style={{ color: '#666666' }}>
                    "{temoignage.quote}"
                  </p>
                  <div>
                    <p className="font-semibold text-lg mb-1" style={{ color: '#000000' }}>— {temoignage.author}</p>
                    <p className="text-sm mb-1" style={{ color: '#8CC53E' }}>{temoignage.role}</p>
                    <p className="text-sm" style={{ color: '#666666' }}>{temoignage.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages Coopératives */}
      <section className="w-full py-16 px-4 md:px-8 lg:px-16" style={{ backgroundColor: '#f9fafb' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <Building2 className="w-8 h-8" style={{ color: '#8CC53E' }} />
            <h2 className="text-4xl font-bold" style={{ color: '#000000' }}>Coopératives</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {temoignagesCooperatives.map((temoignage, index) => (
              <div key={index} className="relative rounded-2xl overflow-hidden border" style={{ borderColor: '#e5e7eb' }}>
                <div className="relative h-64">
                  <Image
                    src={temoignage.image || "/placeholder.svg"}
                    alt={temoignage.author}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <Quote className="w-8 h-8 text-white/50" />
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-lg italic mb-6 leading-relaxed" style={{ color: '#666666' }}>
                    "{temoignage.quote}"
                  </p>
                  <div>
                    <p className="font-semibold text-lg mb-1" style={{ color: '#000000' }}>— {temoignage.author}</p>
                    <p className="text-sm mb-1" style={{ color: '#8CC53E' }}>{temoignage.role}</p>
                    <p className="text-sm" style={{ color: '#666666' }}>{temoignage.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages Partenaires */}
      <section className="w-full py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <Briefcase className="w-8 h-8" style={{ color: '#8CC53E' }} />
            <h2 className="text-4xl font-bold" style={{ color: '#000000' }}>Partenaires</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {temoignagesPartenaires.map((temoignage, index) => (
              <div key={index} className="relative rounded-2xl overflow-hidden border" style={{ borderColor: '#e5e7eb' }}>
                <div className="relative h-64">
                  <Image
                    src={temoignage.image || "/placeholder.svg"}
                    alt={temoignage.author}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <Quote className="w-8 h-8 text-white/50" />
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-lg italic mb-6 leading-relaxed" style={{ color: '#666666' }}>
                    "{temoignage.quote}"
                  </p>
                  <div>
                    <p className="font-semibold text-lg mb-1" style={{ color: '#000000' }}>— {temoignage.author}</p>
                    <p className="text-sm mb-1" style={{ color: '#8CC53E' }}>{temoignage.role}</p>
                    <p className="text-sm" style={{ color: '#666666' }}>{temoignage.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vidéos */}
      <section className="w-full py-16 px-4 md:px-8 lg:px-16" style={{ backgroundColor: '#f9fafb' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: '#000000' }}>Témoignages vidéo</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((index) => (
              <div key={index} className="relative h-64 rounded-xl overflow-hidden group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center transition-transform group-hover:scale-110" style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
                    <Play className="w-8 h-8 ml-1" style={{ color: '#8CC53E' }} />
                  </div>
                </div>
                <Image
                  src={`/assets/images/backgrounds/${index === 1 ? 'african-farmers-in-seed-field.jpg' : index === 2 ? 'quality-seeds-and-agricultural-products.jpg' : 'sustainable-agricultural-transformation.jpg'}`}
                  alt={`Témoignage vidéo ${index}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

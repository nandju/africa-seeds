'use client';

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Link from "next/link";
import { Leaf, Award, Lightbulb, BarChart3, MessageSquare, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function ImpactPage() {
  const sections = [
    {
      title: "Impact agricole",
      description: "Transformations mesurables sur le terrain",
      icon: Leaf,
      href: "/impact/agricole",
      image: "/assets/images/backgrounds/african-farmers-in-seed-field.jpg"
    },
    {
      title: "Sécurité alimentaire",
      description: "Pour une meilleure nutrition",
      icon: Award,
      href: "/impact/securite-alimentaire",
      image: "/assets/images/backgrounds/quality-seeds-and-agricultural-products.jpg"
    },
    {
      title: "Innovation semencière",
      description: "Semences du futur",
      icon: Lightbulb,
      href: "/impact/innovation-semenciere",
      image: "/assets/images/backgrounds/sustainable-agricultural-transformation.jpg"
    },
    {
      title: "Résultats & statistiques",
      description: "Chiffres et données",
      icon: BarChart3,
      href: "/impact/resultats-statistiques",
      image: "/assets/images/backgrounds/food-security-and-crop-diversity.jpg"
    },
    {
      title: "Témoignages",
      description: "Histoires de réussite",
      icon: MessageSquare,
      href: "/impact/temoignages",
      image: "/assets/images/backgrounds/african-farmers-in-seed-field.jpg"
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative w-full pt-32 pb-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 border rounded-full text-sm font-medium mb-6" style={{ borderColor: '#8CC53E', color: '#8CC53E' }}>
              NOTRE IMPACT
            </span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{ color: '#000000' }}>
              Notre impact sur le terrain
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed max-w-3xl" style={{ color: '#666666' }}>
              Mesurons ensemble les transformations réelles que nous apportons à l'agriculture africaine et à la sécurité alimentaire.
            </p>
          </div>
        </div>
      </section>

      {/* Sections Grid */}
      <section className="w-full py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((section, index) => {
              const IconComponent = section.icon;
              return (
                <Link
                  key={index}
                  href={section.href}
                  className="group relative h-80 rounded-2xl overflow-hidden transition-all hover:shadow-xl"
                >
                  <div className="absolute inset-0">
                    <Image
                      src={section.image || "/placeholder.svg"}
                      alt={section.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
                  </div>
                  
                  <div className="relative h-full flex flex-col justify-end p-6">
                    <div className="mb-4 p-3 rounded-lg bg-white/20 backdrop-blur-sm w-fit">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">{section.title}</h3>
                    <p className="text-white/90 mb-4">{section.description}</p>
                    <div className="flex items-center text-white font-medium">
                      En savoir plus
                      <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-2" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

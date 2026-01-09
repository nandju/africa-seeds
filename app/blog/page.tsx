'use client';

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHero from "@/components/page-hero";
import Link from "next/link";
import { Newspaper, FileText, Leaf, Megaphone, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function BlogPage() {
  const sections = [
    {
      title: "Actualités",
      description: "Dernières nouvelles",
      icon: Newspaper,
      href: "/blog/actualites",
      image: "/assets/images/backgrounds/african-farmers-in-seed-field.jpg"
    },
    {
      title: "Articles",
      description: "Analyses et perspectives",
      icon: FileText,
      href: "/blog/articles",
      image: "/assets/images/backgrounds/quality-seeds-and-agricultural-products.jpg"
    },
    {
      title: "Histoires de terrain",
      description: "Expériences du terrain",
      icon: Leaf,
      href: "/blog/histoires-de-terrain",
      image: "/assets/images/backgrounds/sustainable-agricultural-transformation.jpg"
    },
    {
      title: "Événements",
      description: "Nos rencontres et webinaires",
      icon: Megaphone,
      href: "/blog/evenements",
      image: "/assets/images/backgrounds/food-security-and-crop-diversity.jpg"
    },
    {
      title: "Communiqués",
      description: "Annonces officielles",
      icon: Newspaper,
      href: "/blog/communiques",
      image: "/assets/images/backgrounds/african-farmers-in-seed-field.jpg"
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <PageHero 
        title="Actualités & Articles"
        description="Restez informé des dernières actualités, analyses et histoires du secteur semencier africain."
      />

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

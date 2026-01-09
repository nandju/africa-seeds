'use client';

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHero from "@/components/page-hero";
import Image from "next/image";
import { FileText, Calendar, User, ArrowRight } from "lucide-react";

export default function ArticlesPage() {
  const articles = [
    {
      title: "L'avenir du secteur semencier en Afrique : Perspectives 2030",
      author: "Dr. Amara Diallo",
      date: "12 Janvier 2025",
      category: "Analyse",
      description: "Une analyse approfondie des tendances et perspectives du secteur semencier africain pour la prochaine décennie.",
      image: "/assets/images/backgrounds/african-farmers-in-seed-field.jpg",
      readTime: "8 min"
    },
    {
      title: "Innovation et digitalisation : Révolutionner l'agriculture africaine",
      author: "Dr. Fatou Sall",
      date: "8 Janvier 2025",
      category: "Innovation",
      description: "Comment les technologies numériques transforment le secteur semencier et améliorent l'accès aux semences de qualité.",
      image: "/assets/images/backgrounds/quality-seeds-and-agricultural-products.jpg",
      readTime: "6 min"
    },
    {
      title: "Sécurité alimentaire et semences : Le lien essentiel",
      author: "Prof. Kwame Asante",
      date: "3 Janvier 2025",
      category: "Tribune",
      description: "Une tribune sur l'importance cruciale des semences de qualité pour assurer la sécurité alimentaire en Afrique.",
      image: "/assets/images/backgrounds/sustainable-agricultural-transformation.jpg",
      readTime: "10 min"
    },
    {
      title: "Politiques semencières : Harmonisation continentale",
      author: "M. Koffi Mensah",
      date: "28 Décembre 2024",
      category: "Analyse",
      description: "Analyse des défis et opportunités de l'harmonisation des politiques semencières à l'échelle continentale.",
      image: "/assets/images/backgrounds/food-security-and-crop-diversity.jpg",
      readTime: "7 min"
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <PageHero 
        title="Articles"
        description="Analyses approfondies, tribunes et opinions d'experts sur le secteur semencier africain."
      />

      {/* Articles Grid */}
      <section className="w-full py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {articles.map((article, index) => (
              <article key={index} className="group border rounded-2xl overflow-hidden transition-all hover:shadow-xl" style={{ borderColor: '#e5e7eb' }}>
                <div className="relative h-64">
                  <Image
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: '#BA8E3B', color: '#FFFFFF' }}>
                      {article.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm mb-4" style={{ color: '#666666' }}>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{article.date}</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{article.author}</span>
                    </div>
                    <span>•</span>
                    <span>{article.readTime}</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-3" style={{ color: '#000000' }}>{article.title}</h2>
                  <p className="text-base leading-relaxed mb-4" style={{ color: '#666666' }}>{article.description}</p>
                  <a href="#" className="inline-flex items-center gap-2 font-medium transition-colors" style={{ color: '#8CC53E' }} onMouseEnter={(e) => e.currentTarget.style.color = '#6da82f'} onMouseLeave={(e) => e.currentTarget.style.color = '#8CC53E'}>
                    Lire l'article
                    <ArrowRight className="w-4 h-4" />
                  </a>
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
            {["Analyse", "Innovation", "Tribune", "Opinion"].map((category, index) => (
              <button key={index} className="px-4 py-2 rounded-full border font-medium transition-all" style={{ borderColor: '#e5e7eb', color: '#666666', backgroundColor: '#FFFFFF' }} onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f3f4f6'} onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FFFFFF'}>
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

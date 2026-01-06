'use client';

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Image from "next/image";
import { Wrench, GraduationCap, Video, Lock, ArrowRight } from "lucide-react";

export default function OutilsFormationsPage() {
  const modules = [
    {
      title: "Module 1 : Introduction au secteur semencier",
      type: "Formation",
      duree: "2 heures",
      description: "Découvrez les bases du secteur semencier africain et son importance.",
      image: "/assets/images/backgrounds/african-farmers-in-seed-field.jpg",
      disponible: true
    },
    {
      title: "Module 2 : Production de semences certifiées",
      type: "Formation",
      duree: "4 heures",
      description: "Apprenez les techniques de production de semences de qualité.",
      image: "/assets/images/backgrounds/quality-seeds-and-agricultural-products.jpg",
      disponible: true
    },
    {
      title: "Module 3 : Gestion de la qualité",
      type: "Formation",
      duree: "3 heures",
      description: "Maîtrisez les processus de contrôle qualité des semences.",
      image: "/assets/images/backgrounds/sustainable-agricultural-transformation.jpg",
      disponible: false
    }
  ];

  const outils = [
    {
      title: "Calculateur de rendement",
      type: "Outil numérique",
      description: "Calculez vos rendements potentiels selon les variétés de semences.",
      icon: Wrench,
      disponible: true
    },
    {
      title: "Guide de certification",
      type: "Outil numérique",
      description: "Outil interactif pour comprendre le processus de certification.",
      icon: Wrench,
      disponible: true
    },
    {
      title: "Plateforme de traçabilité",
      type: "Outil numérique",
      description: "Suivez l'origine et la qualité de vos semences.",
      icon: Wrench,
      disponible: false
    }
  ];

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
            Outils & Formations
          </h1>
          <p className="text-xl md:text-2xl leading-relaxed max-w-3xl" style={{ color: '#666666' }}>
            Accédez à nos modules de formation, outils numériques et webinaires pour renforcer vos compétences.
          </p>
        </div>
      </section>

      {/* Modules de formation */}
      <section className="w-full py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <GraduationCap className="w-8 h-8" style={{ color: '#8CC53E' }} />
            <h2 className="text-4xl font-bold" style={{ color: '#000000' }}>Modules de formation</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {modules.map((module, index) => (
              <div key={index} className="group border rounded-2xl overflow-hidden transition-all hover:shadow-xl" style={{ borderColor: '#e5e7eb' }}>
                <div className="relative h-48">
                  <Image
                    src={module.image || "/placeholder.svg"}
                    alt={module.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  {!module.disponible && (
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                      <Lock className="w-12 h-12 text-white" />
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 rounded-full text-xs font-medium" style={{ backgroundColor: '#E8F5E9', color: '#8CC53E' }}>
                      {module.type}
                    </span>
                    <span className="text-sm" style={{ color: '#666666' }}>{module.duree}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#000000' }}>{module.title}</h3>
                  <p className="text-base leading-relaxed mb-4" style={{ color: '#666666' }}>{module.description}</p>
                  {module.disponible ? (
                    <button className="w-full px-6 py-3 rounded-full font-medium transition-all inline-flex items-center justify-center gap-2" style={{ backgroundColor: '#BA8E3B', color: '#FFFFFF' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'} onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
                      Accéder au module
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  ) : (
                    <button className="w-full px-6 py-3 rounded-full font-medium transition-all inline-flex items-center justify-center gap-2 border" style={{ borderColor: '#e5e7eb', color: '#666666' }} disabled>
                      Bientôt disponible
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outils numériques */}
      <section className="w-full py-16 px-4 md:px-8 lg:px-16" style={{ backgroundColor: '#f9fafb' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <Wrench className="w-8 h-8" style={{ color: '#8CC53E' }} />
            <h2 className="text-4xl font-bold" style={{ color: '#000000' }}>Outils numériques</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {outils.map((outil, index) => {
              const IconComponent = outil.icon;
              return (
                <div key={index} className="p-6 rounded-xl bg-white border" style={{ borderColor: '#e5e7eb' }}>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-lg" style={{ backgroundColor: '#E8F5E9' }}>
                      <IconComponent className="w-6 h-6" style={{ color: '#8CC53E' }} />
                    </div>
                    <div className="flex-1">
                      <span className="px-3 py-1 rounded-full text-xs font-medium mb-2 inline-block" style={{ backgroundColor: '#E8F5E9', color: '#8CC53E' }}>
                        {outil.type}
                      </span>
                      <h3 className="text-xl font-bold mb-2" style={{ color: '#000000' }}>{outil.title}</h3>
                      <p className="text-base leading-relaxed mb-4" style={{ color: '#666666' }}>{outil.description}</p>
                      {outil.disponible ? (
                        <button className="w-full px-4 py-2 rounded-full font-medium transition-all text-sm" style={{ backgroundColor: '#8CC53E', color: '#FFFFFF' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'} onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
                          Utiliser l'outil
                        </button>
                      ) : (
                        <button className="w-full px-4 py-2 rounded-full font-medium transition-all text-sm border" style={{ borderColor: '#e5e7eb', color: '#666666' }} disabled>
                          Bientôt disponible
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Webinaires */}
      <section className="w-full py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <Video className="w-8 h-8" style={{ color: '#8CC53E' }} />
            <h2 className="text-4xl font-bold" style={{ color: '#000000' }}>Webinaires</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Webinaire : L'avenir du secteur semencier en Afrique",
                date: "15 Mars 2024",
                description: "Discussion sur les tendances et perspectives du secteur semencier.",
                image: "/assets/images/backgrounds/food-security-and-crop-diversity.jpg"
              },
              {
                title: "Webinaire : Innovation et digitalisation",
                date: "20 Avril 2024",
                description: "Comment les technologies transforment le secteur semencier.",
                image: "/assets/images/backgrounds/african-farmers-in-seed-field.jpg"
              }
            ].map((webinaire, index) => (
              <div key={index} className="group border rounded-2xl overflow-hidden transition-all hover:shadow-xl" style={{ borderColor: '#e5e7eb' }}>
                <div className="relative h-48">
                  <Image
                    src={webinaire.image || "/placeholder.svg"}
                    alt={webinaire.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full" style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
                      <Video className="w-4 h-4 text-white" />
                      <span className="text-xs text-white font-medium">Webinaire</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm mb-2" style={{ color: '#666666' }}>{webinaire.date}</p>
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#000000' }}>{webinaire.title}</h3>
                  <p className="text-base leading-relaxed mb-4" style={{ color: '#666666' }}>{webinaire.description}</p>
                  <button className="px-6 py-2 rounded-full font-medium transition-all text-sm inline-flex items-center gap-2" style={{ backgroundColor: '#BA8E3B', color: '#FFFFFF' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'} onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
                    Voir l'enregistrement
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accès futur */}
      <section className="w-full py-16 px-4 md:px-8 lg:px-16" style={{ backgroundColor: '#f9fafb' }}>
        <div className="max-w-4xl mx-auto text-center">
          <Lock className="w-16 h-16 mx-auto mb-6" style={{ color: '#8CC53E' }} />
          <h2 className="text-4xl font-bold mb-6" style={{ color: '#000000' }}>Accès futur</h2>
          <p className="text-xl mb-8 leading-relaxed" style={{ color: '#666666' }}>
            Certains contenus nécessiteront une connexion. Créez un compte pour accéder à toutes nos ressources.
          </p>
          <button className="px-8 py-4 rounded-full font-medium transition-all inline-flex items-center gap-2" style={{ backgroundColor: '#BA8E3B', color: '#FFFFFF' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'} onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
            Créer un compte
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}

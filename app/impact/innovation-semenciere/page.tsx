'use client';

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHero from "@/components/page-hero";
import Image from "next/image";
import { Lightbulb, Smartphone, QrCode, FlaskConical, Database } from "lucide-react";

export default function InnovationSemencierePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <PageHero 
        title="Innovation semencière"
        description="Positionner AfricaSeeds comme acteur moderne du secteur semencier à travers l'innovation et la digitalisation."
      />

      {/* Semences améliorées */}
      <section className="w-full py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Lightbulb className="w-12 h-12 mb-6" style={{ color: '#8CC53E' }} />
              <h2 className="text-4xl font-bold mb-6" style={{ color: '#000000' }}>Semences améliorées</h2>
              <p className="text-lg leading-relaxed mb-6" style={{ color: '#666666' }}>
                Nous développons et promouvons des variétés de semences améliorées, adaptées aux conditions locales et aux défis climatiques de l'Afrique.
              </p>
              <div className="space-y-4">
                {[
                  "Variétés à haut rendement",
                  "Résistance aux maladies et ravageurs",
                  "Adaptation aux conditions climatiques locales",
                  "Qualité nutritionnelle améliorée",
                  "Durée de conservation optimisée"
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ backgroundColor: '#E8F5E9' }}>
                      <div className="w-2 h-2 rounded-full" style={{ backgroundColor: '#8CC53E' }}></div>
                    </div>
                    <span className="text-base" style={{ color: '#666666' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <Image
                src="/assets/images/backgrounds/quality-seeds-and-agricultural-products.jpg"
                alt="Semences améliorées"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Digitalisation */}
      <section className="w-full py-16 px-4 md:px-8 lg:px-16" style={{ backgroundColor: '#f9fafb' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Smartphone className="w-12 h-12 mx-auto mb-6" style={{ color: '#8CC53E' }} />
            <h2 className="text-4xl font-bold mb-6" style={{ color: '#000000' }}>Digitalisation</h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#666666' }}>
              Nous intégrons les technologies numériques pour moderniser le secteur semencier et améliorer l'accès aux informations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Smartphone,
                title: "Applications mobiles",
                description: "Outils numériques pour les agriculteurs et les distributeurs de semences"
              },
              {
                icon: Database,
                title: "Bases de données",
                description: "Systèmes de gestion et de suivi des semences certifiées"
              },
              {
                icon: QrCode,
                title: "Traçabilité numérique",
                description: "Solutions de traçabilité pour garantir l'origine et la qualité"
              }
            ].map((item, index) => {
              const IconComponent = item.icon;
              return (
                <div key={index} className="p-6 rounded-xl bg-white border" style={{ borderColor: '#e5e7eb' }}>
                  <div className="p-4 rounded-lg w-fit mb-4" style={{ backgroundColor: '#E8F5E9' }}>
                    <IconComponent className="w-8 h-8" style={{ color: '#8CC53E' }} />
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: '#000000' }}>{item.title}</h3>
                  <p className="text-base leading-relaxed" style={{ color: '#666666' }}>{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Traçabilité & Qualité */}
      <section className="w-full py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-2xl overflow-hidden order-2 md:order-1">
              <Image
                src="/assets/images/backgrounds/sustainable-agricultural-transformation.jpg"
                alt="Traçabilité"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <QrCode className="w-12 h-12 mb-6" style={{ color: '#8CC53E' }} />
              <h2 className="text-4xl font-bold mb-6" style={{ color: '#000000' }}>Traçabilité & Qualité</h2>
              <p className="text-lg leading-relaxed mb-6" style={{ color: '#666666' }}>
                Nous mettons en place des systèmes de traçabilité avancés pour garantir la qualité et l'origine des semences, renforçant ainsi la confiance des agriculteurs.
              </p>
              <ul className="space-y-4">
                {[
                  "Certification numérique des semences",
                  "Suivi de la chaîne de valeur",
                  "Contrôle qualité renforcé",
                  "Transparence totale pour les utilisateurs"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#8CC53E' }}></div>
                    <span className="text-base" style={{ color: '#666666' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Recherche & Expérimentation */}
      <section className="w-full py-16 px-4 md:px-8 lg:px-16" style={{ backgroundColor: '#f9fafb' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <FlaskConical className="w-12 h-12 mx-auto mb-6" style={{ color: '#8CC53E' }} />
            <h2 className="text-4xl font-bold mb-6" style={{ color: '#000000' }}>Recherche & Expérimentation</h2>
            <p className="text-xl max-w-3xl mx-auto mb-12" style={{ color: '#666666' }}>
              Nous collaborons avec des centres de recherche pour développer et tester de nouvelles variétés adaptées aux besoins africains.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Partenariats de recherche",
                description: "Collaboration avec 15+ centres de recherche africains et internationaux",
                stat: "15+"
              },
              {
                title: "Variétés en développement",
                description: "Plus de 20 nouvelles variétés en cours de développement et de test",
                stat: "20+"
              },
              {
                title: "Sites d'expérimentation",
                description: "Réseau de sites d'essai dans 8 pays pour valider les performances",
                stat: "8"
              },
              {
                title: "Publications scientifiques",
                description: "Contributions aux connaissances scientifiques du secteur semencier",
                stat: "30+"
              }
            ].map((item, index) => (
              <div key={index} className="p-8 rounded-xl bg-white border" style={{ borderColor: '#e5e7eb' }}>
                <div className="text-4xl font-bold mb-3" style={{ color: '#8CC53E' }}>{item.stat}</div>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#000000' }}>{item.title}</h3>
                <p className="text-base leading-relaxed" style={{ color: '#666666' }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

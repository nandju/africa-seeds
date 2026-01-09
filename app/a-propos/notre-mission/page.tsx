'use client';

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHero from "@/components/page-hero";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

export default function NotreMissionPage() {
  const piliers = [
    {
      title: "Accès aux semences certifiées",
      description: "Faciliter l'accès des agriculteurs aux semences de qualité certifiées à travers l'Afrique."
    },
    {
      title: "Renforcement des capacités",
      description: "Former et accompagner les acteurs du secteur semencier pour améliorer leurs compétences et leur productivité."
    },
    {
      title: "Innovation & digitalisation",
      description: "Intégrer les technologies numériques pour moderniser le secteur et améliorer la traçabilité."
    },
    {
      title: "Inclusion des acteurs locaux",
      description: "Valoriser et inclure les producteurs locaux, les coopératives et les petites entreprises semencières."
    },
    {
      title: "Coordination continentale",
      description: "Coordonner les efforts entre les différents acteurs pour une approche harmonisée du secteur semencier."
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <PageHero 
        title="Notre mission"
        description="Notre engagement pour renforcer le secteur semencier africain et améliorer la sécurité alimentaire à travers le continent."
      />

      {/* Mission principale */}
      <section className="w-full py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-3xl md:text-4xl font-bold leading-relaxed mb-8" style={{ color: '#000000' }}>
            Renforcer le secteur semencier africain pour assurer la sécurité alimentaire et la transformation agricole durable à travers le continent.
          </p>
        </div>
      </section>

      {/* Piliers */}
      <section className="w-full py-16 px-4 md:px-8 lg:px-16" style={{ backgroundColor: '#f9fafb' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: '#000000' }}>Nos piliers d'action</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {piliers.map((pilier, index) => (
              <div key={index} className="p-6 rounded-xl bg-white border" style={{ borderColor: '#e5e7eb' }}>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <CheckCircle className="w-6 h-6" style={{ color: '#8CC53E' }} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-3" style={{ color: '#000000' }}>{pilier.title}</h3>
                    <p className="text-base leading-relaxed" style={{ color: '#666666' }}>{pilier.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagements terrain */}
      <section className="w-full py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6" style={{ color: '#000000' }}>Engagements terrain</h2>
              <p className="text-lg leading-relaxed mb-6" style={{ color: '#666666' }}>
                Notre mission se concrétise sur le terrain à travers des actions directes avec les agriculteurs, les coopératives et les entreprises semencières.
              </p>
              <ul className="space-y-4">
                {[
                  "Accompagnement technique des producteurs",
                  "Formation aux bonnes pratiques agricoles",
                  "Facilitation de l'accès aux marchés",
                  "Soutien aux politiques semencières nationales",
                  "Mobilisation de ressources financières"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" style={{ color: '#8CC53E' }} />
                    <span className="text-base" style={{ color: '#666666' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <Image
                src="/assets/images/backgrounds/quality-seeds-and-agricultural-products.jpg"
                alt="Engagements terrain"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

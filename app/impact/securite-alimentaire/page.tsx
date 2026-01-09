'use client';

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHero from "@/components/page-hero";
import Image from "next/image";
import { Shield, Droplets, Users, Heart } from "lucide-react";

export default function SecuriteAlimentairePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <PageHero 
        title="Sécurité alimentaire"
        description="Relier notre action à la nutrition et à la résilience pour assurer une sécurité alimentaire durable en Afrique."
      />

      {/* Disponibilité alimentaire */}
      <section className="w-full py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <Shield className="w-12 h-12 mb-6" style={{ color: '#8CC53E' }} />
              <h2 className="text-4xl font-bold mb-6" style={{ color: '#000000' }}>Disponibilité alimentaire</h2>
              <p className="text-lg leading-relaxed mb-6" style={{ color: '#666666' }}>
                Grâce à l'amélioration des rendements et à l'accès aux semences de qualité, nous contribuons à augmenter la disponibilité alimentaire dans les communautés rurales africaines.
              </p>
              <ul className="space-y-4">
                {[
                  "Augmentation de la production agricole",
                  "Diversification des cultures",
                  "Amélioration de la qualité nutritionnelle",
                  "Réduction des pertes post-récolte"
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#8CC53E' }}></div>
                    <span className="text-base" style={{ color: '#666666' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <Image
                src="/assets/images/backgrounds/quality-seeds-and-agricultural-products.jpg"
                alt="Disponibilité alimentaire"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Résilience climatique */}
      <section className="w-full py-16 px-4 md:px-8 lg:px-16" style={{ backgroundColor: '#f9fafb' }}>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-2xl overflow-hidden order-2 md:order-1">
              <Image
                src="/assets/images/backgrounds/sustainable-agricultural-transformation.jpg"
                alt="Résilience climatique"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <Droplets className="w-12 h-12 mb-6" style={{ color: '#8CC53E' }} />
              <h2 className="text-4xl font-bold mb-6" style={{ color: '#000000' }}>Résilience climatique</h2>
              <p className="text-lg leading-relaxed mb-6" style={{ color: '#666666' }}>
                Nous promouvons des variétés de semences résistantes aux changements climatiques, permettant aux agriculteurs de faire face aux sécheresses, inondations et autres aléas climatiques.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Variétés résistantes", value: "15+" },
                  { label: "Taux de survie", value: "85%" },
                  { label: "Adaptation", value: "12 pays" },
                  { label: "Formations", value: "500+" }
                ].map((stat, index) => (
                  <div key={index} className="p-4 rounded-lg bg-white border" style={{ borderColor: '#e5e7eb' }}>
                    <div className="text-2xl font-bold mb-1" style={{ color: '#8CC53E' }}>{stat.value}</div>
                    <p className="text-sm" style={{ color: '#666666' }}>{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inclusion des petits producteurs */}
      <section className="w-full py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Users className="w-12 h-12 mx-auto mb-6" style={{ color: '#8CC53E' }} />
            <h2 className="text-4xl font-bold mb-6" style={{ color: '#000000' }}>Inclusion des petits producteurs</h2>
            <p className="text-xl max-w-3xl mx-auto" style={{ color: '#666666' }}>
              Notre approche privilégie l'inclusion des petits producteurs, qui représentent la majorité des agriculteurs africains.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Accès facilité",
                description: "Programmes spécifiques pour les petits producteurs avec des conditions adaptées"
              },
              {
                title: "Formation gratuite",
                description: "Sessions de formation et d'accompagnement technique sans frais"
              },
              {
                title: "Coopératives",
                description: "Soutien à la création et au renforcement des coopératives agricoles"
              }
            ].map((item, index) => (
              <div key={index} className="p-6 rounded-xl border" style={{ borderColor: '#e5e7eb' }}>
                <h3 className="text-xl font-bold mb-3" style={{ color: '#000000' }}>{item.title}</h3>
                <p className="text-base leading-relaxed" style={{ color: '#666666' }}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cas pratiques */}
      <section className="w-full py-16 px-4 md:px-8 lg:px-16" style={{ backgroundColor: '#f9fafb' }}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: '#000000' }}>Cas pratiques</h2>
          <div className="space-y-8">
            {[
              {
                title: "Projet Sénégal - Augmentation de la production de millet",
                description: "Grâce à l'introduction de semences certifiées, 500 agriculteurs ont vu leur production augmenter de 40%, améliorant significativement la sécurité alimentaire de leurs familles.",
                image: "/assets/images/backgrounds/african-farmers-in-seed-field.jpg"
              },
              {
                title: "Initiative Kenya - Résilience face à la sécheresse",
                description: "Des variétés de maïs résistantes à la sécheresse ont permis à 300 agriculteurs de maintenir leur production malgré des conditions climatiques difficiles.",
                image: "/assets/images/backgrounds/food-security-and-crop-diversity.jpg"
              }
            ].map((cas, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="relative h-64 rounded-xl overflow-hidden">
                  <Image
                    src={cas.image || "/placeholder.svg"}
                    alt={cas.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4" style={{ color: '#000000' }}>{cas.title}</h3>
                  <p className="text-lg leading-relaxed" style={{ color: '#666666' }}>{cas.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Message final */}
      <section className="w-full py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto text-center">
          <Heart className="w-16 h-16 mx-auto mb-6" style={{ color: '#8CC53E' }} />
          <p className="text-2xl md:text-3xl font-bold leading-relaxed" style={{ color: '#000000' }}>
            La sécurité alimentaire est au cœur de notre mission. Chaque action que nous menons contribue à nourrir l'Afrique de demain.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}

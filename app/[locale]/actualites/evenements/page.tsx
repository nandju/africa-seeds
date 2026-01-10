'use client';

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHero from "@/components/page-hero";

export default function EvenementsPage() {
  const evenements = [
    { titre: "Titre d'événement", date: "2024-02-15", lieu: "Lieu", description: "Description" },
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <PageHero 
        title="Événements"
        description="Rencontres, conférences et webinaires d'AfricaSeeds"
      />
      
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto space-y-8">
          {evenements.map((evenement, index) => (
            <div 
              key={index}
              className="p-6 rounded-lg border"
              style={{ borderColor: '#E5E7EB', backgroundColor: '#FFFFFF' }}
            >
              <h3 className="text-xl font-semibold mb-2" style={{ color: '#000000' }}>
                {evenement.titre}
              </h3>
              <p className="text-sm mb-2" style={{ color: '#6B7280' }}>
                {evenement.date} - {evenement.lieu}
              </p>
              <p style={{ color: '#6B7280' }}>{evenement.description}</p>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}

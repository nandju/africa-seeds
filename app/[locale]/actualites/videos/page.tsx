'use client';

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHero from "@/components/page-hero";

export default function VideosPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <PageHero 
        title="Vidéos"
        description="Contenu vidéo sur le secteur semencier africain"
      />
      
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Placeholder pour les vidéos */}
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
              <span style={{ color: '#9CA3AF' }}>Vidéo</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

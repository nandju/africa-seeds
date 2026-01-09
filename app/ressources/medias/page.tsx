'use client';

import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import PageHero from "@/components/page-hero";
import Image from "next/image";
import { Image as ImageIcon, Video, Download, FileText } from "lucide-react";

export default function MediasPage() {
  const galeriePhotos = [
    { src: "/assets/images/backgrounds/african-farmers-in-seed-field.jpg", alt: "Agriculteurs africains", category: "Terrain" },
    { src: "/assets/images/backgrounds/quality-seeds-and-agricultural-products.jpg", alt: "Semences de qualité", category: "Produits" },
    { src: "/assets/images/backgrounds/sustainable-agricultural-transformation.jpg", alt: "Transformation agricole", category: "Terrain" },
    { src: "/assets/images/backgrounds/food-security-and-crop-diversity.jpg", alt: "Sécurité alimentaire", category: "Impact" },
    { src: "/assets/images/backgrounds/african-farmers-in-seed-field.jpg", alt: "Champs africains", category: "Terrain" },
    { src: "/assets/images/backgrounds/quality-seeds-and-agricultural-products.jpg", alt: "Production", category: "Produits" }
  ];

  const videos = [
    {
      title: "AfricaSeeds : Notre mission",
      description: "Découvrez notre mission et notre impact sur le secteur semencier africain.",
      thumbnail: "/assets/images/backgrounds/african-farmers-in-seed-field.jpg"
    },
    {
      title: "Témoignages d'agriculteurs",
      description: "Les agriculteurs partagent leurs expériences avec AfricaSeeds.",
      thumbnail: "/assets/images/backgrounds/quality-seeds-and-agricultural-products.jpg"
    },
    {
      title: "Innovation semencière",
      description: "Comment l'innovation transforme le secteur semencier en Afrique.",
      thumbnail: "/assets/images/backgrounds/sustainable-agricultural-transformation.jpg"
    }
  ];

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      <PageHero 
        title="Médias"
        description="Explorez notre galerie photos, vidéos terrain et téléchargez notre kit média."
      />

      {/* Galerie photos */}
      <section className="w-full py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <ImageIcon className="w-8 h-8" style={{ color: '#8CC53E' }} />
            <h2 className="text-4xl font-bold" style={{ color: '#000000' }}>Galerie photos</h2>
          </div>
          <div className="flex flex-wrap gap-4 mb-8">
            {["Toutes", "Terrain", "Produits", "Impact", "Événements"].map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full border font-medium transition-all ${
                  index === 0 ? 'border-[#8CC53E] text-[#8CC53E] bg-white' : 'border-[#e5e7eb] text-[#666666] bg-white'
                }`}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = index === 0 ? '#E8F5E9' : '#f3f4f6'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#FFFFFF'}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galeriePhotos.map((photo, index) => (
              <div key={index} className="group relative h-64 rounded-xl overflow-hidden cursor-pointer">
                <Image
                  src={photo.src || "/placeholder.svg"}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white text-sm font-medium">{photo.alt}</p>
                    <p className="text-white/80 text-xs">{photo.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vidéos terrain */}
      <section className="w-full py-16 px-4 md:px-8 lg:px-16" style={{ backgroundColor: '#f9fafb' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <Video className="w-8 h-8" style={{ color: '#8CC53E' }} />
            <h2 className="text-4xl font-bold" style={{ color: '#000000' }}>Vidéos terrain</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <div key={index} className="group relative h-64 rounded-xl overflow-hidden cursor-pointer">
                <Image
                  src={video.thumbnail || "/placeholder.svg"}
                  alt={video.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full flex items-center justify-center transition-transform group-hover:scale-110" style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
                    <Video className="w-8 h-8 ml-1" style={{ color: '#8CC53E' }} />
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold mb-1">{video.title}</h3>
                  <p className="text-white/90 text-sm">{video.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logos officiels */}
      <section className="w-full py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center" style={{ color: '#000000' }}>Logos officiels</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "Logo principal", format: "PNG" },
              { name: "Logo horizontal", format: "PNG" },
              { name: "Logo vertical", format: "PNG" },
              { name: "Logo monochrome", format: "SVG" }
            ].map((logo, index) => (
              <div key={index} className="text-center">
                <div className="h-32 mb-4 rounded-lg border flex items-center justify-center" style={{ borderColor: '#e5e7eb', backgroundColor: '#f9fafb' }}>
                  <ImageIcon className="w-12 h-12" style={{ color: '#8CC53E' }} />
                </div>
                <p className="text-sm font-medium mb-1" style={{ color: '#000000' }}>{logo.name}</p>
                <p className="text-xs" style={{ color: '#666666' }}>{logo.format}</p>
                <button className="mt-2 px-4 py-2 rounded-full text-xs font-medium transition-all" style={{ backgroundColor: '#8CC53E', color: '#FFFFFF' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'} onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
                  Télécharger
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kit média */}
      <section className="w-full py-16 px-4 md:px-8 lg:px-16" style={{ backgroundColor: '#f9fafb' }}>
        <div className="max-w-4xl mx-auto text-center">
          <FileText className="w-16 h-16 mx-auto mb-6" style={{ color: '#8CC53E' }} />
          <h2 className="text-4xl font-bold mb-6" style={{ color: '#000000' }}>Kit média</h2>
          <p className="text-xl mb-8 leading-relaxed" style={{ color: '#666666' }}>
            Téléchargez notre kit média complet contenant logos, photos, vidéos et documents officiels pour vos communications.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {[
              { name: "Logos", count: "4 fichiers" },
              { name: "Photos", count: "50+ images" },
              { name: "Vidéos", count: "10 vidéos" }
            ].map((item, index) => (
              <div key={index} className="p-6 rounded-xl bg-white border" style={{ borderColor: '#e5e7eb' }}>
                <p className="text-lg font-semibold mb-1" style={{ color: '#000000' }}>{item.name}</p>
                <p className="text-sm" style={{ color: '#666666' }}>{item.count}</p>
              </div>
            ))}
          </div>
          <button className="px-8 py-4 rounded-full font-medium transition-all inline-flex items-center gap-2" style={{ backgroundColor: '#BA8E3B', color: '#FFFFFF' }} onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'} onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
            <Download className="w-5 h-5" />
            Télécharger le kit complet
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}

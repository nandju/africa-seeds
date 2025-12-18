"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Home } from "lucide-react"
import "./glitch.css"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white text-white flex items-center justify-center p-4 overflow-hidden relative">
      <div className="text-center space-y-8 max-w-2xl mx-auto z-10">
        {/* Texte 404 Glitchy */}
        <div className="relative">
          <h1 
            className="text-9xl md:text-[12rem] font-black glitch-text select-none text-transparent"
            style={{
              WebkitTextStroke: '2px #8CC53E',
            }}
          >
            404
          </h1>
          <h1 
            className="absolute inset-0 text-9xl md:text-[12rem] font-black glitch-text-shadow select-none"
            style={{ color: '#8CC53E' }}
          >
            404
          </h1>
          <h1 
            className="absolute inset-0 text-9xl md:text-[12rem] font-black glitch-text-shadow-2 select-none"
            style={{ color: '#BA8E3B', opacity: 0.5 }}
          >
            404
          </h1>
        </div>

        {/* Message Glitchy */}
        <div className="space-y-4">
          <p 
            className="text-xl md:text-2xl glitch-message font-extralight"
            style={{ color: '#000000' }}
          >
            Cette page n’est pas disponible.
          </p>
          <p 
            className="text-sm md:text-base glitch-subtitle font-extralight"
            style={{ color: '#8CC53E' }}
          >
            {"// Erreur 404 : page introuvable"}
          </p>
        </div>

        {/* Sous-texte informatif */}
        <div className="space-y-2">
          <p 
            className="text-xs md:text-sm font-light opacity-75"
            style={{ color: '#BA8E3B' }}
          >
            La page que vous recherchez n’existe pas ou a été déplacée.
          </p>
        </div>

        {/* Bouton Glitchy */}
        <div className="pt-4">
          <Button 
            asChild 
            size="lg"
            className="font-semibold transition-all duration-300 hover:shadow-lg"
            style={{
              backgroundColor: '#8CC53E',
              color: '#000000',
              border: `2px solid #BA8E3B`,
              hover: {
                backgroundColor: '#BA8E3B',
              }
            }}
          >
            <Link href="/" className="flex items-center gap-2 group">
              <Home className="w-5 h-5 transition-transform group-hover:scale-110" />
              Retour à l’accueil
            </Link>
          </Button>
        </div>

        {/* Lignes Glitch */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="glitch-line glitch-line-1" style={{ borderTopColor: '#8CC53E' }}></div>
          <div className="glitch-line glitch-line-2" style={{ borderTopColor: '#BA8E3B' }}></div>
        </div>
      </div>

      {/* Fond animé avec accent couleur */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none" style={{ backgroundColor: '#8CC53E' }}></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none" style={{ backgroundColor: '#BA8E3B' }}></div>
    </div>
  )
}
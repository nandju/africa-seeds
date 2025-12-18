"use client"

import Image from "next/image"
import { Leaf, Users, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="relative min-h-screen pt-20 md:pt-24 flex items-center justify-center px-6 overflow-hidden">
      {/* Fond avec gradient et formes géométriques */}
      <div className="absolute inset-0 z-0">
        {/* Gradient principal */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFFFFF] via-[#F8FFFE] to-[#F0F9FF]"></div>
        
        {/* Cercles décoratives - primaire */}
        <div className="absolute top-20 right-0 w-96 h-96 rounded-full opacity-15 blur-3xl" style={{ backgroundColor: '#8CC53E' }}></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-10 blur-3xl" style={{ backgroundColor: '#BA8E3B' }}></div>
        
        {/* Accent tertiaire */}
        <div className="absolute top-1/2 right-1/4 w-64 h-64 rounded-full opacity-8 blur-3xl" style={{ backgroundColor: '#FFFFFF' }}></div>

        {/* Lignes subtiles */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#8CC53E]/20 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#BA8E3B]/20 to-transparent"></div>
      </div>

      {/* Contenu */}
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col items-center gap-8">
          
          {/* Logo + Indicateurs de confiance */}
          <motion.div 
            className="flex flex-col items-center gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            
            {/* Logo avec bordure premium */}
            <motion.div 
              className="relative w-28 h-28 flex items-center justify-center rounded-3xl shadow-xl"
              style={{ 
                background: 'linear-gradient(135deg, #8CC53E 0%, #BA8E3B 100%)',
                boxShadow: '0 20px 40px rgba(140, 197, 62, 0.2)'
              }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {/* Inner circle blanc */}
              <div className="absolute inset-2 rounded-2xl bg-white flex items-center justify-center">
                <Image
                  src="/assets/images/logo-africaseeds.png"
                  alt="AfricaSeeds Logo"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
            </motion.div>

            {/* Indicateurs avec icônes colorées */}
            <motion.div 
              className="flex flex-wrap items-center justify-center gap-8 text-sm"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-full" style={{ backgroundColor: '#8CC53E20' }}>
                  <Leaf size={16} color="#8CC53E" />
                </div>
                <span style={{ color: '#000000' }} className="font-medium">Agriculture durable</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-full" style={{ backgroundColor: '#BA8E3B20' }}>
                  <Users size={16} color="#BA8E3B" />
                </div>
                <span style={{ color: '#000000' }} className="font-medium">Acteurs du secteur</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-full" style={{ backgroundColor: '#8CC53E20' }}>
                  <Globe size={16} color="#8CC53E" />
                </div>
                <span style={{ color: '#000000' }} className="font-medium">Impact panafricain</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Titre principal avec animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <h1 className="text-center font-serif text-5xl md:text-6xl lg:text-7xl leading-tight mb-4 text-balance" style={{ color: '#000000' }}>
              Renforcer le secteur <br />
              <span className="bg-gradient-to-r from-[#8CC53E] to-[#BA8E3B] bg-clip-text text-transparent">
                semencier africain
              </span>
            </h1>
          </motion.div>

          {/* Sous-titre */}
          <motion.p 
            className="text-center text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
            style={{ color: '#333333' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            AfricaSeeds soutient l'accès à des semences de qualité, 
            favorise la sécurité alimentaire et accompagne la transformation 
            agricole durable en Afrique.
          </motion.p>

          {/* CTA Button avec animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Button
              size="lg"
              className="rounded-full px-12 py-7 text-base font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              style={{
                backgroundColor: "#8CC53E",
                color: "#000000",
                border: `2px solid #BA8E3B`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#BA8E3B"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#8CC53E"
              }}
            >
              Découvrir la plateforme
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
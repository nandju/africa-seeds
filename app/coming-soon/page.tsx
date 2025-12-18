'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Layout from './layout'
import { sections } from '@/components/constants/sections'
import Section from '@/components/Section'

// Coming Soon Page

export default function ComingSoonPage() {
  const [activeSection, setActiveSection] = useState(0)
  const [showScrollIndicator, setShowScrollIndicator] = useState(true)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({ container: containerRef })
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 })

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollPosition = containerRef.current.scrollTop
        const windowHeight = window.innerHeight
        const newActiveSection = Math.floor(scrollPosition / windowHeight)
        setActiveSection(newActiveSection)
        
        // Masquer l'indicateur après le premier scroll
        if (scrollPosition > 50) {
          setShowScrollIndicator(false)
        }
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('scroll', handleScroll)
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  const handleNavClick = (index: number) => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: index * window.innerHeight,
        behavior: 'smooth'
      })
    }
  }

  return (
    <Layout>
      {/* Barre de progression */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 z-40 origin-left"
        style={{
          background: 'linear-gradient(90deg, #8CC53E 0%, #BA8E3B 100%)',
          scaleX
        }}
      />

      {/* Navigation circulaire */}
      <nav className="fixed top-0 right-0 h-screen flex flex-col justify-center z-30 p-6">
        {sections.map((section, index) => (
          <motion.button
            key={section.id}
            className="w-4 h-4 rounded-full my-4 transition-all cursor-pointer relative group"
            style={{
              background: index === activeSection ? '#8CC53E' : 'rgba(140, 197, 62, 0.3)',
              boxShadow: index === activeSection ? '0 0 20px rgba(140, 197, 62, 0.6)' : 'none'
            }}
            onClick={() => handleNavClick(index)}
            whileHover={{ scale: 1.3 }}
            animate={{
              scale: index === activeSection ? 1.4 : 1,
              boxShadow: index === activeSection
                ? '0 0 30px rgba(140, 197, 62, 0.6), inset 0 0 10px rgba(140, 197, 62, 0.3)'
                : '0 0 0px rgba(140, 197, 62, 0)'
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Tooltip */}
            <div className="absolute right-8 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              <span style={{ color: '#BA8E3B' }} className="text-xs font-semibold">
                {section.title.substring(0, 15)}...
              </span>
            </div>
          </motion.button>
        ))}
      </nav>

      {/* Indicateur de scroll */}
      {showScrollIndicator && (
        <motion.div
          className="fixed bottom-12 left-1/2 transform -translate-x-1/2 z-40"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          exit={{ opacity: 0 }}
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs font-semibold" style={{ color: '#8CC53E' }}>
              Voir la suite
            </span>
            <ChevronDown 
              size={20} 
              style={{ color: '#8CC53E' }}
              className="opacity-70 hover:opacity-100 transition-opacity"
            />
          </div>
        </motion.div>
      )}

      {/* Conteneur de défilement */}
      <div
        ref={containerRef}
        className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth hide-scrollbar"
      >
        {sections.map((section, index) => (
          <Section
            key={section.id}
            {...section}
            isActive={index === activeSection}
          />
        ))}
      </div>
    </Layout>
  )
}
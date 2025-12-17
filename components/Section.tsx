"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import type { SectionProps } from "../types"

export default function Section({ id, title, subtitle, content, isActive, showButton, buttonText }: SectionProps) {
  return (
    <section id={id} className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16 lg:p-24">
      {subtitle && (
        <motion.div
          className="mb-12 inline-block w-fit"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <div
            className="px-4 py-2 rounded-full border text-sm font-semibold"
            style={{
              borderColor: '#8CC53E',
              color: '#8CC53E',
              background: 'rgba(140, 197, 62, 0.05)'
            }}
          >
            {subtitle}
          </div>
        </motion.div>
      )}

      <motion.h2
        className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight max-w-4xl"
        style={{ color: '#0a0a0a' }}
        initial={{ opacity: 0, y: 50 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>

      {content && (
        <motion.p
          className="text-lg md:text-xl lg:text-2xl max-w-2xl mt-8"
          style={{ color: 'rgba(10, 10, 10, 0.75)' }}
          initial={{ opacity: 0, y: 50 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {content}
        </motion.p>
      )}

      {showButton && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-10 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 w-fit"
          style={{
            background: '#8CC53E',
            color: '#0a0a0a'
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {buttonText}
        </motion.button>
      )}
    </section>
  )
}
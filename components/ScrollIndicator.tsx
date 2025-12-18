import { ChevronDown } from 'lucide-react'
import { motion } from 'framer-motion'

export function ScrollIndicator() {
  return (
    <motion.div
      className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40"
      animate={{ y: [0, 10, 0] }}
      transition={{ duration: 2, repeat: Infinity }}
    >
      <div className="flex flex-col items-center gap-2">
        <span className="text-xs text-gray-400 font-medium">Scroll</span>
        <ChevronDown 
          size={20} 
          className="text-white opacity-60 hover:opacity-100 transition-opacity"
        />
      </div>
    </motion.div>
  )
}
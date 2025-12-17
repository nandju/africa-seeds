import { Squares } from '@/components/ui/squares-background'
import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="h-screen overflow-hidden relative bg-white">
      {/* Background */}
      <div className="absolute inset-0 z-10">
        <Squares
          direction="diagonal"
          speed={0.5}
          squareSize={40}
          borderColor="#e5e5e5"
          hoverFillColor="#f5f5f5"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 h-full">
        {children}
      </div>
    </div>
  )
}

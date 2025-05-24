import { useEffect } from 'react'
import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface AnimatedSectionProps {
  children: ReactNode
  className?: string
}

export default function AnimatedSection({ children, className = '' }: AnimatedSectionProps) {
  // Force re-mount on route change to fix animation not playing after navigation
  useEffect(() => {
    // This will force a re-render on route change
  }, [])

  return (
    <motion.div
      key={typeof window !== 'undefined' ? window.location.pathname : undefined}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className={className}>
      {children}
    </motion.div>
  )
}

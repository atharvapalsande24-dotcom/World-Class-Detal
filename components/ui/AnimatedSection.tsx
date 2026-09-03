'use client'

import { motion, type Variants } from 'framer-motion'
import { useReducedMotion } from '@/lib/hooks/useReducedMotion'
import { fadeUp } from '@/lib/animations'

interface AnimatedSectionProps {
  children: React.ReactNode
  variants?: Variants
  className?: string
  delay?: number
  as?: React.ElementType
}

export function AnimatedSection({
  children,
  variants = fadeUp,
  className,
  delay = 0,
}: AnimatedSectionProps) {
  const reducedMotion = useReducedMotion()

  if (reducedMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      variants={variants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

'use client'

import React from 'react'
import { motion, type HTMLMotionProps } from 'motion/react'
import { cn } from '@/lib/utils'

interface FloatingShapeProps extends HTMLMotionProps<'div'> {
  color?: 'wisdom' | 'luminous' | 'vibrant' | 'lime'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  blur?: 'sm' | 'md' | 'lg' | 'xl'
}

export function FloatingShape({
  color = 'wisdom',
  size = 'md',
  blur = 'md',
  className,
  ...props
}: FloatingShapeProps) {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-32 h-32',
    lg: 'w-48 h-48',
    xl: 'w-64 h-64',
  }

  const colorClasses = {
    wisdom: 'bg-wisdom',
    luminous: 'bg-luminous',
    vibrant: 'bg-vibrant',
    lime: 'bg-lime',
  }

  const blurClasses = {
    sm: 'blur-xl',
    md: 'blur-2xl',
    lg: 'blur-3xl',
    xl: 'blur-[100px]',
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.2 }}
      className={cn(
        'rounded-full opacity-20 pointer-events-none',
        sizeClasses[size],
        colorClasses[color],
        blurClasses[blur],
        className
      )}
      {...props}
    />
  )
}

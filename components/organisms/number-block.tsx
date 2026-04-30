'use client'

import * as React from 'react'
import { motion } from 'motion/react'
import { NeoText } from '@/components/atoms/neo-text'
import { cn } from '@/lib/utils'

interface NumberBlockProps {
  number: number
  label?: string
  isSelected?: boolean
  onClick?: () => void
  variant?: 'wisdom' | 'luminous' | 'vibrant' | 'lime'
}

export function NumberBlock({
  number,
  label,
  isSelected,
  onClick,
  variant = 'luminous',
}: NumberBlockProps) {
  const colorMap = {
    wisdom: 'bg-wisdom text-white',
    luminous: 'bg-luminous text-black',
    vibrant: 'bg-vibrant text-black',
    lime: 'bg-lime text-black',
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05, rotate: isSelected ? 0 : 5 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={cn(
        'w-24 h-24 sm:w-32 sm:h-32 flex flex-col items-center justify-center rounded-neo border-4 border-border neo-shadow transition-all',
        isSelected ? 'scale-110 -translate-y-2 ring-4 ring-offset-4 ring-wisdom z-10' : 'hover:translate-x-1 hover:translate-y-1 hover:shadow-neo-hover',
        colorMap[variant]
      )}
    >
      <NeoText variant="heading" size="4xl" className="text-5xl sm:text-6xl">
        {number}
      </NeoText>
      {label && (
        <NeoText variant="caption" size="xs" className="mt-1 font-black opacity-80">
          {label}
        </NeoText>
      )}
    </motion.button>
  )
}

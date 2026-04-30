'use client'

import * as React from 'react'
import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'
import { motion } from 'motion/react'

interface StarRatingProps {
  rating: number
  max?: number
  onRatingChange?: (rating: number) => void
  disabled?: boolean
  className?: string
}

export function StarRating({
  rating,
  max = 5,
  onRatingChange,
  disabled,
  className,
}: StarRatingProps) {
  const [hoverRating, setHoverRating] = React.useState<number | null>(null)

  return (
    <div className={cn('flex gap-1', className)}>
      {Array.from({ length: max }).map((_, i) => {
        const starValue = i + 1
        const isActive = (hoverRating !== null ? hoverRating : rating) >= starValue

        return (
          <motion.button
            key={i}
            whileHover={!disabled ? { scale: 1.2, rotate: 10 } : {}}
            whileTap={!disabled ? { scale: 0.8 } : {}}
            onMouseEnter={() => !disabled && setHoverRating(starValue)}
            onMouseLeave={() => !disabled && setHoverRating(null)}
            onClick={() => !disabled && onRatingChange?.(starValue)}
            className={cn(
              'transition-colors p-1 rounded-neo',
              isActive ? 'text-luminous' : 'text-muted-foreground',
              disabled ? 'cursor-default' : 'cursor-pointer'
            )}
            type="button"
          >
            <Star
              size={24}
              fill={isActive ? 'currentColor' : 'none'}
              strokeWidth={3}
            />
          </motion.button>
        )
      })}
    </div>
  )
}

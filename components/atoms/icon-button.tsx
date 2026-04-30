'use client'

import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { motion, HTMLMotionProps } from 'motion/react'
import { cn } from '@/lib/utils'
import { Loader2 } from 'lucide-react'

const iconButtonVariants = cva(
  'inline-flex items-center justify-center rounded-neo border-2 border-border neo-shadow transition-all active:translate-x-[2px] active:translate-y-[2px] active:shadow-neo-hover disabled:opacity-50 disabled:pointer-events-none hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-neo-hover',
  {
    variants: {
      variant: {
        default: 'bg-background text-foreground',
        primary: 'bg-wisdom text-white',
        secondary: 'bg-luminous text-black',
        accent: 'bg-vibrant text-black',
        lime: 'bg-lime text-black',
        ghost: 'bg-transparent border-transparent shadow-none hover:bg-muted',
      },
      size: {
        sm: 'h-10 w-10 p-2',
        md: 'h-12 w-12 p-3',
        lg: 'h-14 w-14 p-4',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
)

export interface IconButtonProps
  extends HTMLMotionProps<'button'>,
    VariantProps<typeof iconButtonVariants> {
  isLoading?: boolean
  icon: React.ReactNode
}

export function IconButton({
  className,
  variant,
  size,
  isLoading,
  icon,
  ...props
}: IconButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(iconButtonVariants({ variant, size }), className)}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading ? <Loader2 className="animate-spin h-5 w-5" /> : icon}
    </motion.button>
  )
}

import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const neoTextVariants = cva('', {
  variants: {
    variant: {
      heading: 'font-black tracking-tighter leading-tight',
      body: 'font-medium leading-relaxed',
      caption: 'text-sm font-bold uppercase tracking-wider',
    },
    color: {
      default: 'text-foreground',
      muted: 'text-muted-foreground',
      accent: 'text-vibrant',
      wisdom: 'text-wisdom',
      lime: 'text-lime',
      luminous: 'text-luminous',
    },
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      base: 'text-base',
      lg: 'text-lg',
      xl: 'text-xl',
      '2xl': 'text-2xl',
      '3xl': 'text-3xl',
      '4xl': 'text-4xl',
      '5xl': 'text-5xl',
      '6xl': 'text-6xl',
    },
  },
  defaultVariants: {
    variant: 'body',
    color: 'default',
    size: 'base',
  },
})

export interface NeoTextProps
  extends Omit<React.HTMLAttributes<HTMLParagraphElement>, 'color'>,
    VariantProps<typeof neoTextVariants> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'label'
}

export function NeoText({
  className,
  variant,
  color,
  size,
  as: Component = 'p',
  ...props
}: NeoTextProps) {
  return (
    <Component
      className={cn(neoTextVariants({ variant, color, size }), className)}
      {...(props as any)}
    />
  )
}

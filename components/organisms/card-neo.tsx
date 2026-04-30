import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const cardNeoVariants = cva(
  'rounded-neo border-2 border-border neo-shadow bg-background transition-all',
  {
    variants: {
      variant: {
        default: 'bg-background',
        accent: 'bg-vibrant',
        ghost: 'bg-transparent shadow-none border-transparent',
        lime: 'bg-lime',
        luminous: 'bg-luminous',
        wisdom: 'bg-wisdom text-white',
      },
      size: {
        sm: 'p-4',
        md: 'p-6',
        lg: 'p-8',
      },
      hover: {
        true: 'hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-neo-hover cursor-pointer',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
      hover: false,
    },
  }
)

export interface CardNeoProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardNeoVariants> {}

export function CardNeo({ className, variant, size, hover, ...props }: CardNeoProps) {
  return (
    <div
      className={cn(cardNeoVariants({ variant, size, hover }), className)}
      {...props}
    />
  )
}

import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeNeoVariants = cva(
  'inline-flex items-center rounded-neo-lg px-2.5 py-0.5 text-xs font-black transition-colors border-2 border-border neo-shadow',
  {
    variants: {
      variant: {
        default: 'bg-background text-foreground',
        wisdom: 'bg-wisdom text-white',
        luminous: 'bg-luminous text-black',
        vibrant: 'bg-vibrant text-black',
        lime: 'bg-lime text-black',
        outline: 'bg-transparent text-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)

export interface BadgeNeoProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeNeoVariants> {}

export function BadgeNeo({ className, variant, ...props }: BadgeNeoProps) {
  return (
    <div className={cn(badgeNeoVariants({ variant }), className)} {...props} />
  )
}

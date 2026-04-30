'use client'

import * as React from 'react'
import * as ProgressPrimitive from '@radix-ui/react-progress'
import { cn } from '@/lib/utils'

interface ProgressNeoProps extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  variant?: 'wisdom' | 'luminous' | 'vibrant' | 'lime'
}

const ProgressNeo = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  ProgressNeoProps
>(({ className, value, variant = 'wisdom', ...props }, ref) => {
  const colorClasses = {
    wisdom: 'bg-wisdom',
    luminous: 'bg-luminous',
    vibrant: 'bg-vibrant',
    lime: 'bg-lime',
  }

  return (
    <ProgressPrimitive.Root
      ref={ref}
      className={cn(
        'relative h-6 w-full overflow-hidden rounded-neo border-2 border-border bg-muted neo-shadow',
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        className={cn(
          'h-full w-full flex-1 transition-all border-r-2 border-border',
          colorClasses[variant]
        )}
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    </ProgressPrimitive.Root>
  )
})
ProgressNeo.displayName = ProgressPrimitive.Root.displayName

export { ProgressNeo }

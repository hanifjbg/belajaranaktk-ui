import * as React from 'react'
import { NeoText } from '@/components/atoms/neo-text'
import { Button } from '@/components/ui/button'
import { motion } from 'motion/react'
import { cn } from '@/lib/utils'

interface EmptyStateProps {
  icon: React.ReactNode
  title: string
  description: string
  actionLabel?: string
  onAction?: () => void
  className?: string
}

export function EmptyState({
  icon,
  title,
  description,
  actionLabel,
  onAction,
  className,
}: EmptyStateProps) {
  return (
    <div className={cn('flex flex-col items-center justify-center p-8 text-center bg-background neo-border neo-shadow rounded-neo-lg border-dashed', className)}>
      <motion.div
        initial={{ scale: 0.8, rotate: -10 }}
        animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="mb-4 text-muted-foreground"
      >
        {React.cloneElement(icon as React.ReactElement, { size: 64, strokeWidth: 1.5 } as any)}
      </motion.div>
      <NeoText variant="heading" size="2xl" className="mb-2">
        {title}
      </NeoText>
      <NeoText variant="body" color="muted" className="max-w-xs mb-6">
        {description}
      </NeoText>
      {actionLabel && onAction && (
        <Button
          onClick={onAction}
          className="bg-vibrant hover:bg-vibrant/90 neo-border neo-shadow neo-shadow-hover text-black font-black px-8 py-6 h-auto"
        >
          {actionLabel}
        </Button>
      )}
    </div>
  )
}

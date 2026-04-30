import * as React from 'react'
import { NeoText } from '@/components/atoms/neo-text'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface TimelineItemProps {
  title: string
  description: string
  time: string
  icon?: React.ReactNode
  isLast?: boolean
  variant?: 'wisdom' | 'luminous' | 'vibrant' | 'lime'
}

export function TimelineItem({
  title,
  description,
  time,
  icon,
  isLast,
  variant = 'wisdom',
}: TimelineItemProps) {
  const colorMap = {
    wisdom: 'bg-wisdom',
    luminous: 'bg-luminous',
    vibrant: 'bg-vibrant',
    lime: 'bg-lime',
  }

  return (
    <div className="flex gap-4">
      <div className="flex flex-col items-center">
        <div className={cn('h-10 w-10 rounded-full border-2 border-border neo-shadow flex items-center justify-center z-10 shrink-0', colorMap[variant])}>
          {icon}
        </div>
        {!isLast && <div className="w-1 h-full bg-border -mt-1 mb-1" />}
      </div>
      <div className="pb-8 flex-1">
        <div className="flex items-center gap-2 mb-1">
          <NeoText variant="caption" color="muted">{time}</NeoText>
        </div>
        <Card className="p-4 neo-border neo-shadow bg-background">
          <NeoText variant="body" className="font-black text-lg">{title}</NeoText>
          <NeoText variant="body" size="sm" color="muted">{description}</NeoText>
        </Card>
      </div>
    </div>
  )
}

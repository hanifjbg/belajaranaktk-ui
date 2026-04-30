import * as React from 'react'
import { Card } from '@/components/ui/card'
import { NeoText } from '@/components/atoms/neo-text'
import { BadgeNeo } from '@/components/atoms/badge-neo'
import { cn } from '@/lib/utils'

interface StatCardProps {
  title: string
  value: string | number
  icon: React.ReactNode
  trend?: {
    value: string
    isUp: boolean
  }
  variant?: 'wisdom' | 'luminous' | 'vibrant' | 'lime'
  className?: string
}

export function StatCard({
  title,
  value,
  icon,
  trend,
  variant = 'wisdom',
  className,
}: StatCardProps) {
  const colorMap = {
    wisdom: 'border-wisdom text-wisdom',
    luminous: 'border-luminous text-luminous',
    vibrant: 'border-vibrant text-vibrant',
    lime: 'border-lime text-lime',
  }

  return (
    <Card className={cn('p-6 neo-border neo-shadow flex flex-col gap-2', className)}>
      <div className="flex items-center justify-between">
        <div className={cn('p-2 rounded-neo border-2', colorMap[variant])}>
          {icon}
        </div>
        {trend && (
          <BadgeNeo variant={trend.isUp ? 'lime' : 'vibrant'}>
            {trend.value}
          </BadgeNeo>
        )}
      </div>
      <div>
        <NeoText variant="caption" color="muted">
          {title}
        </NeoText>
        <NeoText variant="heading" size="3xl">
          {value}
        </NeoText>
      </div>
    </Card>
  )
}

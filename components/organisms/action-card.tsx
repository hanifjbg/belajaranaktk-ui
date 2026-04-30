import * as React from 'react'
import { CardNeo } from './card-neo'
import { NeoText } from '@/components/atoms/neo-text'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ActionCardProps {
  title: string
  description: string
  icon: React.ReactNode
  actionLabel: string
  onAction?: () => void
  variant?: 'wisdom' | 'luminous' | 'vibrant' | 'lime'
  imageUrl?: string
}

export function ActionCard({
  title,
  description,
  icon,
  actionLabel,
  onAction,
  variant = 'wisdom',
  imageUrl,
}: ActionCardProps) {
  const colorMap = {
    wisdom: 'bg-wisdom text-white border-wisdom',
    luminous: 'bg-luminous text-black border-luminous',
    vibrant: 'bg-vibrant text-black border-vibrant',
    lime: 'bg-lime text-black border-lime',
  }

  return (
    <CardNeo hover className="flex flex-col h-full gap-4 group">
      {imageUrl && (
        <div className="w-full aspect-video rounded-neo overflow-hidden border-2 border-border mb-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
      <div className="flex items-start justify-between">
        <div className={cn('p-3 rounded-neo border-2 border-border neo-shadow', colorMap[variant])}>
          {icon}
        </div>
      </div>
      <div className="flex-1">
        <NeoText variant="heading" size="2xl" className="mb-2 uppercase">
          {title}
        </NeoText>
        <NeoText variant="body" color="muted" className="line-clamp-2">
          {description}
        </NeoText>
      </div>
      <button
        onClick={onAction}
        className={cn(
          'mt-4 w-full py-4 rounded-neo border-2 border-border neo-shadow group-hover:shadow-neo-hover group-hover:translate-x-[2px] group-hover:translate-y-[2px] transition-all font-black uppercase flex items-center justify-center gap-2',
          colorMap[variant]
        )}
      >
        {actionLabel}
        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
      </button>
    </CardNeo>
  )
}

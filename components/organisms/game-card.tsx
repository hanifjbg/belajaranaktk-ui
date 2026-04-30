import * as React from 'react'
import { CardNeo } from './card-neo'
import { NeoText } from '@/components/atoms/neo-text'
import { Star, Lock, Trophy } from 'lucide-react'
import { BadgeNeo } from '@/components/atoms/badge-neo'
import { cn } from '@/lib/utils'

interface GameCardProps {
  title: string
  thumbnailUrl: string
  level: number
  rating: number
  status: 'locked' | 'completed' | 'unlocked'
  onClick?: () => void
}

export function GameCard({
  title,
  thumbnailUrl,
  level,
  rating,
  status,
  onClick,
}: GameCardProps) {
  const isLocked = status === 'locked'

  return (
    <CardNeo 
      hover={!isLocked} 
      onClick={!isLocked ? onClick : undefined}
      className={cn(
        'group flex flex-col gap-0 p-0 overflow-hidden relative',
        isLocked && 'grayscale cursor-not-allowed opacity-80'
      )}
    >
      <div className="relative aspect-video w-full border-b-2 border-border overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
          src={thumbnailUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        <div className="absolute top-2 left-2 flex gap-2">
          <BadgeNeo variant="wisdom">LV {level}</BadgeNeo>
          {status === 'completed' && <BadgeNeo variant="lime"><Trophy size={12} className="mr-1" /> KOMPLIT</BadgeNeo>}
        </div>
        {isLocked && (
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px] flex items-center justify-center">
            <div className="p-4 bg-background rounded-full border-4 border-border neo-shadow">
              <Lock size={32} className="text-destructive" />
            </div>
          </div>
        )}
      </div>

      <div className="p-4 flex flex-col gap-2">
        <NeoText variant="heading" size="xl" className="uppercase truncate">
          {title}
        </NeoText>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            {[1, 2, 3, 4, 5].map((s) => (
              <Star
                key={s}
                size={14}
                className={cn(s <= rating ? 'text-luminous fill-luminous' : 'text-muted')}
              />
            ))}
          </div>
          <NeoText variant="caption" size="xs" color="muted">
            {isLocked ? 'TERKUNCI' : 'SIAP MAIN'}
          </NeoText>
        </div>
      </div>

      {!isLocked && (
        <div className="absolute bottom-0 left-0 w-full h-1 bg-wisdom transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
      )}
    </CardNeo>
  )
}

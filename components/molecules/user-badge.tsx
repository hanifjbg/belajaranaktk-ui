import * as React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { NeoText } from '@/components/atoms/neo-text'
import { BadgeNeo } from '@/components/atoms/badge-neo'
import { cn } from '@/lib/utils'

interface UserBadgeProps {
  name: string
  role?: string
  avatarUrl?: string
  status?: 'online' | 'offline' | 'away'
  className?: string
}

export function UserBadge({
  name,
  role,
  avatarUrl,
  status = 'online',
  className,
}: UserBadgeProps) {
  const statusColor = {
    online: 'bg-lime',
    offline: 'bg-muted-foreground',
    away: 'bg-luminous',
  }

  return (
    <div className={cn('flex items-center gap-3 p-2 pr-4 bg-background border-2 border-border neo-shadow rounded-full', className)}>
      <div className="relative">
        <Avatar className="h-10 w-10 border-2 border-border">
          <AvatarImage src={avatarUrl} alt={name} />
          <AvatarFallback className="font-black bg-wisdom text-white">
            {name.substring(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div className={cn('absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-border', statusColor[status])} />
      </div>
      <div className="flex flex-col">
        <NeoText variant="body" size="sm" className="font-black leading-none">
          {name}
        </NeoText>
        {role && (
          <NeoText variant="caption" size="xs" color="muted" className="leading-tight mt-0.5">
            {role}
          </NeoText>
        )}
      </div>
    </div>
  )
}

'use client'

import * as React from 'react'
import { Plus, ChevronRight, UserCircle } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { NeoText } from '@/components/atoms/neo-text'
import { CardNeo } from '@/components/organisms/card-neo'
import { IconButton } from '@/components/atoms/icon-button'
import { cn } from '@/lib/utils'

interface Profile {
  id: string
  name: string
  avatarUrl?: string
  age: number
}

interface ChildProfileSwitcherProps {
  profiles: Profile[]
  activeId: string
  onSelect: (id: string) => void
  onAdd?: () => void
}

export function ChildProfileSwitcher({ 
  profiles, 
  activeId, 
  onSelect, 
  onAdd 
}: ChildProfileSwitcherProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between px-2">
        <NeoText variant="caption">Profil Anak</NeoText>
        <IconButton icon={<Plus size={18} />} onClick={onAdd} variant="ghost" size="sm" />
      </div>

      <div className="flex flex-col gap-3">
        {profiles.map((profile) => {
          const isActive = profile.id === activeId
          return (
            <CardNeo
              key={profile.id}
              onClick={() => onSelect(profile.id)}
              className={cn(
                'flex items-center gap-4 transition-all hover:scale-[1.02] cursor-pointer',
                isActive ? 'border-wisdom neo-shadow shadow-wisdom/40' : 'opacity-80 grayscale-[0.3]'
              )}
            >
              <Avatar className={cn('h-14 w-14 border-2 border-border', isActive ? 'ring-4 ring-wisdom ring-offset-2' : '')}>
                <AvatarImage src={profile.avatarUrl} alt={profile.name} />
                <AvatarFallback className="font-black bg-wisdom text-white text-xl">
                  {profile.name.substring(0, 1).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <NeoText variant="body" size="lg" className="font-black">
                  {profile.name}
                </NeoText>
                <NeoText variant="body" size="sm" color="muted">
                  Kelas {profile.age <= 5 ? 'TK A' : 'TK B'}
                </NeoText>
              </div>
              {isActive && <div className="h-4 w-4 rounded-full bg-wisdom border-2 border-white" />}
            </CardNeo>
          )
        })}
      </div>
    </div>
  )
}

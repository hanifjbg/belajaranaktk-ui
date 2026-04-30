import * as React from 'react'
import { Bell } from 'lucide-react'
import { IconButton } from '@/components/atoms/icon-button'
import { BadgeNeo } from '@/components/atoms/badge-neo'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { NeoText } from '@/components/atoms/neo-text'

interface NotificationBellProps {
  count?: number
  notifications?: { id: string; text: string; time: string }[]
}

export function NotificationBell({ count = 0, notifications = [] }: NotificationBellProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="relative inline-block">
          <IconButton icon={<Bell size={20} />} variant="default" size="md" />
          {count > 0 && (
            <BadgeNeo
              variant="vibrant"
              className="absolute -top-2 -right-2 px-1.5 py-0.5 min-w-[20px] justify-center"
            >
              {count}
            </BadgeNeo>
          )}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-64 p-2 neo-border neo-shadow bg-background">
        <div className="p-2 border-b border-border mb-2">
          <NeoText variant="caption">Notifications</NeoText>
        </div>
        {notifications.length === 0 ? (
          <div className="p-4 text-center">
            <NeoText variant="body" size="sm" color="muted">No new notifications</NeoText>
          </div>
        ) : (
          notifications.map((n) => (
            <DropdownMenuItem key={n.id} className="flex flex-col items-start gap-1 p-3 cursor-pointer hover:bg-muted rounded-neo mb-1">
              <NeoText variant="body" size="sm" className="font-bold">{n.text}</NeoText>
              <NeoText variant="caption" size="xs" color="muted">{n.time}</NeoText>
            </DropdownMenuItem>
          ))
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

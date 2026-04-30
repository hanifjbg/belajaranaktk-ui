import * as React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { BadgeNeo } from '@/components/atoms/badge-neo'
import { NeoText } from '@/components/atoms/neo-text'
import { cn } from '@/lib/utils'

interface LeaderboardUser {
  rank: number
  userId: string
  name: string
  avatarUrl?: string
  xp: number
  isCurrentUser?: boolean
}

interface LeaderboardTableProps {
  users: LeaderboardUser[]
}

export function LeaderboardTable({ users }: LeaderboardTableProps) {
  const getRankStyle = (rank: number) => {
    switch (rank) {
      case 1: return 'bg-luminous border-luminous'
      case 2: return 'bg-slate-300 border-slate-300'
      case 3: return 'bg-amber-600 border-amber-600 text-white'
      default: return 'bg-background'
    }
  }

  return (
    <div className="neo-border neo-shadow rounded-neo overflow-hidden bg-background">
      <Table>
        <TableHeader className="bg-muted border-b-2 border-border">
          <TableRow className="hover:bg-transparent border-none">
            <TableHead className="w-[100px] font-black text-foreground">RANK</TableHead>
            <TableHead className="font-black text-foreground">PLAYER</TableHead>
            <TableHead className="text-right font-black text-foreground">TOTAL XP</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow 
              key={user.userId} 
              className={cn(
                'border-b-2 border-border transition-colors',
                user.isCurrentUser ? 'bg-wisdom/10' : 'hover:bg-muted'
              )}
            >
              <TableCell>
                <div className={cn(
                  'w-10 h-10 flex items-center justify-center rounded-neo border-2 border-border neo-shadow font-black text-lg',
                  getRankStyle(user.rank)
                )}>
                  {user.rank}
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10 border-2 border-border">
                    <AvatarImage src={user.avatarUrl} alt={user.name} />
                    <AvatarFallback className="font-black bg-wisdom text-white">
                      {user.name.substring(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex flex-col">
                    <NeoText variant="body" className="font-black">{user.name}</NeoText>
                    {user.isCurrentUser && <BadgeNeo variant="wisdom" className="text-[10px] w-fit">KAMU</BadgeNeo>}
                  </div>
                </div>
              </TableCell>
              <TableCell className="text-right">
                <div className="flex flex-col items-end">
                  <NeoText variant="heading" size="xl" color="wisdom">{user.xp.toLocaleString()}</NeoText>
                  <NeoText variant="caption" size="xs" color="muted">XP</NeoText>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

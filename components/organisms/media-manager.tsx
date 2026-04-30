'use client'

import * as React from 'react'
import { Upload, File, Image as ImageIcon, Video, MoreVertical, Trash2, Download } from 'lucide-react'
import { CardNeo } from '@/components/organisms/card-neo'
import { NeoText } from '@/components/atoms/neo-text'
import { IconButton } from '@/components/atoms/icon-button'
import { BadgeNeo } from '@/components/atoms/badge-neo'
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'

interface MediaItem {
  id: string
  name: string
  type: 'image' | 'video' | 'file'
  size: string
  date: string
  thumbnail?: string
}

export function MediaManager() {
  const [items] = React.useState<MediaItem[]>([
    { id: '1', name: 'alphabet_a.png', type: 'image', size: '1.2MB', date: '2026-04-20', thumbnail: 'https://picsum.photos/seed/a/200' },
    { id: '2', name: 'intro_video.mp4', type: 'video', size: '24MB', date: '2026-04-19', thumbnail: 'https://picsum.photos/seed/v/200' },
    { id: '3', name: 'lesson_plan.pdf', type: 'file', size: '4.5MB', date: '2026-04-18' },
    { id: '4', name: 'hippo_story.jpg', type: 'image', size: '800KB', date: '2026-04-21', thumbnail: 'https://picsum.photos/seed/h/200' },
  ])

  return (
    <div className="space-y-6">
      <CardNeo className="p-8 border-dashed flex flex-col items-center justify-center gap-4 text-center group cursor-pointer hover:bg-muted/50 transition-colors">
        <div className="w-16 h-16 rounded-full bg-wisdom/10 flex items-center justify-center text-wisdom border-2 border-wisdom group-hover:scale-110 transition-transform">
          <Upload size={32} />
        </div>
        <div>
          <NeoText variant="heading" size="xl">Upload Media</NeoText>
          <NeoText variant="body" color="muted">Drag and drop file atau klik untuk memilih file</NeoText>
        </div>
      </CardNeo>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {items.map((item) => (
          <CardNeo key={item.id} className="p-0 overflow-hidden group">
            <div className="aspect-square bg-muted relative border-b-2 border-border overflow-hidden">
              {item.thumbnail ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={item.thumbnail} alt={item.name} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                  <File size={48} />
                </div>
              )}
              <div className="absolute top-2 left-2">
                <BadgeNeo variant={item.type === 'image' ? 'wisdom' : item.type === 'video' ? 'vibrant' : 'default'}>
                  {item.type.toUpperCase()}
                </BadgeNeo>
              </div>
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <IconButton icon={<MoreVertical size={16} />} variant="default" size="sm" />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="neo-border neo-shadow">
                    <DropdownMenuItem className="flex items-center gap-2 cursor-pointer font-bold">
                      <Download size={14} /> Download
                    </DropdownMenuItem>
                    <DropdownMenuItem className="flex items-center gap-2 cursor-pointer font-bold text-destructive">
                      <Trash2 size={14} /> Hapus
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>
            <div className="p-3">
              <NeoText variant="body" className="font-black truncate block uppercase text-xs" title={item.name}>
                {item.name}
              </NeoText>
              <div className="flex items-center justify-between mt-1">
                <NeoText variant="caption" size="xs" color="muted">{item.size}</NeoText>
                <NeoText variant="caption" size="xs" color="muted">{item.date}</NeoText>
              </div>
            </div>
          </CardNeo>
        ))}
      </div>
    </div>
  )
}

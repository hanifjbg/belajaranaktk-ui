'use client'

import * as React from 'react'
import { 
  Bold, 
  Italic, 
  List, 
  ListOrdered, 
  Link as LinkIcon, 
  Type, 
  AlignLeft, 
  AlignCenter, 
  AlignRight 
} from 'lucide-react'
import { IconButton } from '@/components/atoms/icon-button'
import { NeoText } from '@/components/atoms/neo-text'
import { CardNeo } from '@/components/organisms/card-neo'
import { cn } from '@/lib/utils'

export function RichTextEditor() {
  const [content, setContent] = React.useState('')

  return (
    <CardNeo className="p-0 overflow-hidden">
      <div className="p-2 border-b-2 border-border bg-muted flex flex-wrap gap-1">
        <IconButton variant="ghost" size="sm" icon={<Bold size={18} />} />
        <IconButton variant="ghost" size="sm" icon={<Italic size={18} />} />
        <div className="w-[2px] h-6 bg-border mx-1 my-auto" />
        <IconButton variant="ghost" size="sm" icon={<Type size={18} />} />
        <div className="w-[2px] h-6 bg-border mx-1 my-auto" />
        <IconButton variant="ghost" size="sm" icon={<AlignLeft size={18} />} />
        <IconButton variant="ghost" size="sm" icon={<AlignCenter size={18} />} />
        <IconButton variant="ghost" size="sm" icon={<AlignRight size={18} />} />
        <div className="w-[2px] h-6 bg-border mx-1 my-auto" />
        <IconButton variant="ghost" size="sm" icon={<List size={18} />} />
        <IconButton variant="ghost" size="sm" icon={<ListOrdered size={18} />} />
        <IconButton variant="ghost" size="sm" icon={<LinkIcon size={18} />} />
      </div>
      <textarea
        className="w-full h-64 p-4 bg-background focus:outline-none resize-none font-sans text-lg border-none"
        placeholder="Mulai menulis cerita atau materi di sini..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <div className="p-2 border-t-2 border-border bg-muted text-right">
        <NeoText variant="caption" color="muted" size="xs">
          {content.length} karakter | {content.split(/\s+/).filter(Boolean).length} kata
        </NeoText>
      </div>
    </CardNeo>
  )
}

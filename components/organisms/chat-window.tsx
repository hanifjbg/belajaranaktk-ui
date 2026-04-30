'use client'

import * as React from 'react'
import { Send, Image, Smile } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { NeoText } from '@/components/atoms/neo-text'
import { CardNeo } from '@/components/organisms/card-neo'
import { IconButton } from '@/components/atoms/icon-button'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import { cn } from '@/lib/utils'

const chatSchema = z.object({
  message: z.string().min(1, 'Pesan tidak boleh kosong'),
})

type ChatForm = z.infer<typeof chatSchema>

interface Message {
  id: string
  senderId: string
  text: string
  timestamp: string
  senderName: string
  senderAvatar?: string
}

interface ChatWindowProps {
  currentUserId: string
  messages: Message[]
  onSendMessage: (text: string) => void
  recipientName: string
  recipientAvatar?: string
}

export function ChatWindow({
  currentUserId,
  messages,
  onSendMessage,
  recipientName,
  recipientAvatar,
}: ChatWindowProps) {
  const scrollRef = React.useRef<HTMLDivElement>(null)
  
  const { register, handleSubmit, reset, watch } = useForm<ChatForm>({
    resolver: zodResolver(chatSchema),
  })

  const onSubmit = (data: ChatForm) => {
    onSendMessage(data.message)
    reset()
  }

  React.useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

  return (
    <CardNeo className="flex flex-col h-[600px] p-0 overflow-hidden">
      {/* Header */}
      <div className="flex items-center gap-3 p-4 border-b-2 border-border bg-background">
        <Avatar className="h-10 w-10 border-2 border-border">
          <AvatarImage src={recipientAvatar} alt={recipientName} />
          <AvatarFallback className="font-black bg-wisdom text-white">
            {recipientName.substring(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <NeoText variant="body" className="font-black leading-none">{recipientName}</NeoText>
          <NeoText variant="caption" size="xs" color="lime" className="leading-tight mt-0.5">Online</NeoText>
        </div>
      </div>

      {/* Messages */}
      <ScrollArea className="flex-1 p-4 bg-muted/30">
        <div ref={scrollRef} className="space-y-4">
          <AnimatePresence initial={false}>
            {messages.map((msg) => {
              const isMine = msg.senderId === currentUserId
              return (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  className={cn(
                    'flex items-end gap-2 max-w-[80%]',
                    isMine ? 'ml-auto flex-row-reverse' : 'mr-auto'
                  )}
                >
                  {!isMine && (
                    <Avatar className="h-8 w-8 border-2 border-border shrink-0">
                      <AvatarFallback className="text-[10px] font-black">{msg.senderName.substring(0, 2)}</AvatarFallback>
                    </Avatar>
                  )}
                  <div className="flex flex-col gap-1">
                    <div className={cn(
                      'p-3 rounded-neo border-2 border-border neo-shadow',
                      isMine ? 'bg-wisdom text-white' : 'bg-background'
                    )}>
                      <NeoText variant="body" size="sm">{msg.text}</NeoText>
                    </div>
                    <NeoText variant="caption" size="xs" color="muted" className={cn(isMine ? 'text-right' : 'text-left')}>
                      {msg.timestamp}
                    </NeoText>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>
      </ScrollArea>

      {/* Input */}
      <form onSubmit={handleSubmit(onSubmit)} className="p-4 border-t-2 border-border bg-background flex items-center gap-2">
        <IconButton variant="ghost" icon={<Smile size={20} />} size="sm" type="button" />
        <IconButton variant="ghost" icon={<Image size={20} />} size="sm" type="button" />
        <Input
          {...register('message')}
          placeholder="Tulis pesan..."
          className="flex-1 neo-border focus-visible:ring-wisdom h-12"
          autoComplete="off"
        />
        <IconButton 
          icon={<Send size={20} />} 
          variant="primary" 
          size="md" 
          type="submit" 
          className="bg-wisdom"
          disabled={!watch('message')}
        />
      </form>
    </CardNeo>
  )
}

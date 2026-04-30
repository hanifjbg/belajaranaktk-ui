'use client'

import * as React from 'react'
import { Volume2, VolumeX, Loader2 } from 'lucide-react'
import { motion, HTMLMotionProps } from 'motion/react'
import { cn } from '@/lib/utils'

interface AudioButtonProps extends HTMLMotionProps<'button'> {
  audioUrl?: string
  variant?: 'wisdom' | 'luminous' | 'vibrant' | 'lime'
}

export function AudioButton({
  audioUrl,
  variant = 'wisdom',
  className,
  ...props
}: AudioButtonProps) {
  const [isPlaying, setIsPlaying] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false)
  const audioRef = React.useRef<HTMLAudioElement | null>(null)

  const toggleAudio = () => {
    if (!audioUrl) return

    if (!audioRef.current) {
      setIsLoading(true)
      const audio = new Audio(audioUrl)
      audioRef.current = audio
      audio.oncanplaythrough = () => {
        setIsLoading(false)
        audio.play()
        setIsPlaying(true)
      }
      audio.onended = () => setIsPlaying(false)
      audio.onerror = () => {
        setIsLoading(false)
        setIsPlaying(false)
      }
    } else {
      if (isPlaying) {
        audioRef.current.pause()
        setIsPlaying(false)
      } else {
        audioRef.current.play()
        setIsPlaying(true)
      }
    }
  }

  const bgClasses = {
    wisdom: 'bg-wisdom',
    luminous: 'bg-luminous',
    vibrant: 'bg-vibrant',
    lime: 'bg-lime',
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleAudio}
      className={cn(
        'p-3 rounded-full border-2 border-border neo-shadow transition-all',
        isPlaying ? 'pulse-anim' : '',
        bgClasses[variant],
        className
      )}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <Loader2 className="h-6 w-6 animate-spin text-white" />
      ) : isPlaying ? (
        <VolumeX className="h-6 w-6 text-white" />
      ) : (
        <Volume2 className="h-6 w-6 text-white" />
      )}
    </motion.button>
  )
}

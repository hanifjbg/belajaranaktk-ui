'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { AudioButton } from '@/components/atoms/audio-button'
import { NeoText } from '@/components/atoms/neo-text'
import { cn } from '@/lib/utils'

interface AlphabetCardNeoProps {
  letter: string
  word: string
  imageUrl: string
  audioUrl?: string
  variant?: 'wisdom' | 'luminous' | 'vibrant' | 'lime'
}

export function AlphabetCardNeo({
  letter,
  word,
  imageUrl,
  audioUrl,
  variant = 'wisdom',
}: AlphabetCardNeoProps) {
  const [isFlipped, setIsFlipped] = React.useState(false)

  const colorClasses = {
    wisdom: 'bg-wisdom text-white',
    luminous: 'bg-luminous text-black',
    vibrant: 'bg-vibrant text-black',
    lime: 'bg-lime text-black',
  }

  return (
    <div 
      className="perspective-1000 w-full max-w-[280px] aspect-[3/4] cursor-pointer group"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6, type: 'spring', stiffness: 260, damping: 20 }}
        className="relative w-full h-full preserve-3d"
      >
        {/* Front Side */}
        <div className={cn(
          'absolute inset-0 backface-hidden rounded-neo-lg border-4 border-border neo-shadow flex flex-col items-center justify-center p-6',
          colorClasses[variant]
        )}>
          <NeoText variant="heading" size="6xl" className="text-8xl md:text-9xl mb-2">
            {letter}
          </NeoText>
          <NeoText variant="caption" className="opacity-70">Tap to flip</NeoText>
        </div>

        {/* Back Side */}
        <div className={cn(
          'absolute inset-0 backface-hidden rounded-neo-lg border-4 border-border neo-shadow flex flex-col items-center justify-between p-6 rotate-y-180 bg-background'
        )}>
          <div className="w-full aspect-square rounded-neo border-2 border-border overflow-hidden relative mb-4">
             {/* eslint-disable-next-line @next/next/no-img-element */}
             <img src={imageUrl} alt={word} className="w-full h-full object-cover" />
          </div>
          <div className="flex flex-col items-center gap-2">
            <NeoText variant="heading" size="3xl" className="uppercase tracking-widest">
              {word}
            </NeoText>
            {audioUrl && (
              <div onClick={(e) => e.stopPropagation()}>
                <AudioButton audioUrl={audioUrl} variant={variant} />
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  )
}

'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Trophy, Star, X } from 'lucide-react'
import { NeoText } from '@/components/atoms/neo-text'
import { CardNeo } from '@/components/organisms/card-neo'
import { IconButton } from '@/components/atoms/icon-button'
import { triggerConfetti } from '@/components/atoms/confetti-burst'
import { cn } from '@/lib/utils'

interface AchievementPopupProps {
  title: string
  description: string
  icon?: React.ReactNode
  xp?: number
  onClose?: () => void
}

export function AchievementPopup({
  title,
  description,
  icon = <Trophy size={48} />,
  xp = 100,
  onClose,
}: AchievementPopupProps) {
  React.useEffect(() => {
    triggerConfetti()
    const timer = setTimeout(() => {
      onClose?.()
    }, 5000)
    return () => clearTimeout(timer)
  }, [onClose])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.8, y: 50 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
    >
      <CardNeo className="relative max-w-sm w-full bg-wisdom text-white p-8 overflow-hidden">
        {/* Animated Background Shapes */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-3xl animate-pulse" />

        <div className="flex flex-col items-center text-center gap-6 relative z-10">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-luminous"
          >
            {icon}
          </motion.div>

          <div className="space-y-2">
            <NeoText variant="caption" className="text-luminous tracking-widest font-black">
              Pencapaian Baru!
            </NeoText>
            <NeoText variant="heading" size="3xl">
              {title}
            </NeoText>
            <NeoText variant="body" className="opacity-90">
              {description}
            </NeoText>
          </div>

          <div className="flex items-center gap-2 bg-white/20 px-6 py-2 rounded-full border-2 border-white/30 backdrop-blur-sm">
            <Star size={20} fill="#FACC15" className="text-luminous" />
            <NeoText variant="body" className="font-black">
              +{xp} XP
            </NeoText>
          </div>

          <button
            onClick={onClose}
            className="w-full bg-luminous text-black py-4 rounded-neo border-4 border-black neo-shadow font-black uppercase text-xl mt-4 active:translate-y-1 transition-all"
          >
            Luar Biasa!
          </button>
        </div>

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>
      </CardNeo>
    </motion.div>
  )
}

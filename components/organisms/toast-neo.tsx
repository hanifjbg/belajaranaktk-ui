'use client'

import { toast } from 'sonner'
import { CheckCircle2, AlertCircle, Info, Trophy } from 'lucide-react'
import { cn } from '@/lib/utils'

export const ToastNeo = {
  success: (message: string, description?: string) => {
    toast.success(message, {
      description,
      icon: <CheckCircle2 className="text-lime" />,
      className: 'neo-border neo-shadow bg-background font-sans',
    })
  },
  error: (message: string, description?: string) => {
    toast.error(message, {
      description,
      icon: <AlertCircle className="text-destructive" />,
      className: 'neo-border neo-shadow bg-background font-sans',
    })
  },
  info: (message: string, description?: string) => {
    toast.info(message, {
      description,
      icon: <Info className="text-wisdom" />,
      className: 'neo-border neo-shadow bg-background font-sans',
    })
  },
  reward: (message: string, points: number) => {
    toast(message, {
      description: `Kamu mendapatkan +${points} XP!`,
      icon: <Trophy className="text-luminous" />,
      className: 'neo-border neo-shadow bg-wisdom text-white font-sans',
    })
  },
}

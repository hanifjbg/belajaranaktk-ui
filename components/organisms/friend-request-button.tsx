'use client'

import * as React from 'react'
import { UserPlus, UserCheck, Clock } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import { cn } from '@/lib/utils'

interface FriendRequestButtonProps {
  status: 'none' | 'pending' | 'accepted'
  onAdd?: () => void
  className?: string
}

export function FriendRequestButton({ status, onAdd, className }: FriendRequestButtonProps) {
  const [currentStatus, setCurrentStatus] = React.useState(status)

  const handleAdd = () => {
    if (currentStatus === 'none') {
      setCurrentStatus('pending')
      onAdd?.()
    }
  }

  const variants = {
    none: {
      bg: 'bg-luminous',
      text: 'text-black',
      icon: <UserPlus size={18} />,
      label: 'Tambah Teman',
    },
    pending: {
      bg: 'bg-muted',
      text: 'text-muted-foreground',
      icon: <Clock size={18} />,
      label: 'Menunggu...',
    },
    accepted: {
      bg: 'bg-lime',
      text: 'text-black',
      icon: <UserCheck size={18} />,
      label: 'Teman',
    },
  }

  const { bg, text, icon, label } = variants[currentStatus]

  return (
    <motion.button
      whileHover={currentStatus === 'none' ? { scale: 1.05 } : {}}
      whileTap={currentStatus === 'none' ? { scale: 0.95 } : {}}
      onClick={handleAdd}
      disabled={currentStatus !== 'none'}
      className={cn(
        'px-4 py-2 rounded-neo border-2 border-border neo-shadow font-black uppercase text-xs flex items-center gap-2 transition-all',
        currentStatus === 'none' ? 'neo-shadow-hover hover:translate-x-[1px] hover:translate-y-[1px]' : 'shadow-none',
        bg,
        text,
        className
      )}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStatus}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="flex items-center gap-2"
        >
          {icon}
          <span>{label}</span>
        </motion.div>
      </AnimatePresence>
    </motion.button>
  )
}

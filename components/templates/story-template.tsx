'use client'

import * as React from 'react'
import { X } from 'lucide-react'
import { IconButton } from '@/components/atoms/icon-button'
import { motion } from 'motion/react'
import { useRouter } from 'next/navigation'

interface StoryTemplateProps {
  children: React.ReactNode
}

export function StoryTemplate({ children }: StoryTemplateProps) {
  const router = useRouter()

  return (
    <div className="fixed inset-0 z-50 bg-background flex flex-col overflow-hidden">
      <div className="absolute top-6 right-6 z-[60]">
        <IconButton 
          icon={<X size={24} />} 
          variant="secondary" 
          size="lg" 
          onClick={() => router.back()}
          className="rounded-full shadow-lg"
        />
      </div>
      
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex-1 h-full overflow-y-auto"
      >
        {children}
      </motion.div>
    </div>
  )
}

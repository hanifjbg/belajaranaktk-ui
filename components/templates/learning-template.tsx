'use client'

import * as React from 'react'
import { AppNavbar } from '@/components/organisms/app-navbar'
import { BottomTabBar } from '@/components/organisms/bottom-tab-bar'
import { FloatingDXToolbar } from '@/components/organisms/floating-dx-toolbar'
import { motion } from 'motion/react'

interface LearningTemplateProps {
  children: React.ReactNode
}

export function LearningTemplate({ children }: LearningTemplateProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <AppNavbar />
      
      <motion.main 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex-1 w-full max-w-7xl mx-auto px-4 py-8 mb-24 md:mb-8"
      >
        {children}
      </motion.main>

      <BottomTabBar />
      <FloatingDXToolbar />
    </div>
  )
}

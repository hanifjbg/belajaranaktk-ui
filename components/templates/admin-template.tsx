'use client'

import * as React from 'react'
import { Sidebar } from '@/components/organisms/sidebar'
import { AppNavbar } from '@/components/organisms/app-navbar'
import { FloatingDXToolbar } from '@/components/organisms/floating-dx-toolbar'
import { useSidebarStore } from '@/stores/sidebar-store'
import { useIsMobile } from '@/hooks/use-mobile'
import { motion } from 'motion/react'
import { cn } from '@/lib/utils'

interface AdminTemplateProps {
  children: React.ReactNode
}

export function AdminTemplate({ children }: AdminTemplateProps) {
  const { isCollapsed } = useSidebarStore()
  const isMobile = useIsMobile()

  return (
    <div className="min-h-screen bg-muted/30 flex">
      <Sidebar />
      
      <div className={cn(
        'flex-1 flex flex-col transition-all duration-300',
        !isMobile ? (isCollapsed ? 'ml-20' : 'ml-64') : 'ml-0'
      )}>
        <AppNavbar />
        
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex-1 p-6"
        >
          {children}
        </motion.main>
      </div>

      <FloatingDXToolbar />
    </div>
  )
}

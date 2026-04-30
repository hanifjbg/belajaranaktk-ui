'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, BookOpen, Trophy, Users, User } from 'lucide-react'
import { motion } from 'motion/react'
import { cn } from '@/lib/utils'

const tabs = [
  { icon: Home, label: 'Home', href: '/app' },
  { icon: BookOpen, label: 'Belajar', href: '/app/belajar' },
  { icon: Trophy, label: 'Prestasi', href: '/app/pencapaian' },
  { icon: Users, label: 'Sosial', href: '/app/sosial' },
  { icon: User, label: 'Profil', href: '/app/profil' },
]

export function BottomTabBar() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-lg bg-background border-2 border-border neo-shadow rounded-full p-2 flex items-center justify-around md:hidden">
      {tabs.map((tab) => {
        const isActive = pathname === tab.href
        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={cn(
              'relative flex flex-col items-center justify-center p-2 rounded-full transition-all',
              isActive ? 'text-wisdom' : 'text-muted-foreground'
            )}
          >
            {isActive && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-wisdom/10 rounded-full border-2 border-wisdom"
                transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
              />
            )}
            <tab.icon size={24} strokeWidth={isActive ? 3 : 2} className="relative z-10" />
            <span className="text-[10px] font-black uppercase mt-1 relative z-10 leading-none">
              {tab.label}
            </span>
          </Link>
        )
      })}
    </nav>
  )
}

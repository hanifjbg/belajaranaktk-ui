'use client'

import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  LayoutDashboard, 
  Users, 
  BookOpen, 
  Settings, 
  ChevronLeft, 
  ChevronRight,
  LogOut,
  LayoutGrid
} from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import { useSidebarStore } from '@/stores/sidebar-store'
import { useIsMobile } from '@/hooks/use-mobile'
import { NeoText } from '@/components/atoms/neo-text'
import { IconButton } from '@/components/atoms/icon-button'
import { UserBadge } from '@/components/molecules/user-badge'
import { cn } from '@/lib/utils'

const adminMenu = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/admin' },
  { icon: Users, label: 'Users', href: '/admin/users' },
  { icon: BookOpen, label: 'Content', href: '/admin/content' },
  { icon: LayoutGrid, label: 'Demo Kit', href: '/demo/components' },
  { icon: Settings, label: 'Settings', href: '/admin/settings' },
]

export function Sidebar() {
  const pathname = usePathname()
  const isMobile = useIsMobile()
  const { isOpen, isCollapsed, setOpen, setCollapsed } = useSidebarStore()

  // Auto-close on mobile when route changes
  React.useEffect(() => {
    if (isMobile) setOpen(false)
  }, [pathname, isMobile, setOpen])

  const sidebarWidth = isCollapsed ? 'w-20' : 'w-64'
  const mobileTranslate = isOpen ? 'translate-x-0' : '-translate-x-full'

  return (
    <>
      {/* Mobile Overlay */}
      <AnimatePresence>
        {isMobile && isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
          />
        )}
      </AnimatePresence>

      <aside
        className={cn(
          'fixed inset-y-0 left-0 z-50 bg-background border-r-2 border-border transition-all duration-300 flex flex-col',
          isMobile ? mobileTranslate : sidebarWidth
        )}
      >
        <div className="p-4 flex items-center justify-between border-b-2 border-border">
          {!isCollapsed && (
            <Link href="/" className="flex items-center gap-2 overflow-hidden">
              <div className="w-10 h-10 bg-wisdom rounded-neo border-2 border-border neo-shadow flex items-center justify-center font-black text-white text-xl shrink-0">
                B
              </div>
              <NeoText variant="heading" size="xl" className="whitespace-nowrap">
                BelajarAdmin
              </NeoText>
            </Link>
          )}
          {isCollapsed && (
            <div className="w-10 h-10 bg-wisdom rounded-neo border-2 border-border neo-shadow flex items-center justify-center font-black text-white text-xl mx-auto">
              B
            </div>
          )}
          {!isMobile && (
            <IconButton
              icon={isCollapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
              variant="ghost"
              size="sm"
              onClick={() => setCollapsed(!isCollapsed)}
              className={isCollapsed ? 'hidden' : ''}
            />
          )}
        </div>

        <nav className="flex-1 overflow-y-auto p-3 space-y-2">
          {adminMenu.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'flex items-center gap-3 p-3 rounded-neo border-2 transition-all group',
                  isActive 
                    ? 'bg-wisdom text-white border-border neo-shadow shadow-wisdom/20' 
                    : 'border-transparent hover:bg-muted text-muted-foreground hover:text-foreground'
                )}
              >
                <item.icon className={cn('shrink-0', isActive ? 'stroke-[3px]' : '')} size={22} />
                {!isCollapsed && (
                  <span className={cn('font-black uppercase text-sm tracking-tight', isActive ? '' : '')}>
                    {item.label}
                  </span>
                )}
              </Link>
            )
          })}
        </nav>

        <div className="p-4 border-t-2 border-border space-y-4">
          <div className={cn('overflow-hidden transition-all', isCollapsed ? 'w-0 opacity-0' : 'w-full opacity-100')}>
            <UserBadge name="Admin" role="Superuser" status="online" className="border-none shadow-none p-0 bg-transparent" />
          </div>
          <button className="flex items-center gap-3 p-3 w-full rounded-neo text-destructive font-black uppercase text-sm hover:bg-destructive/10 transition-colors">
            <LogOut size={22} />
            {!isCollapsed && <span>Logout</span>}
          </button>
        </div>
      </aside>
    </>
  )
}

'use client'

import * as React from 'react'
import Link from 'next/link'
import { Menu, X, Search, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SearchBarNeo } from '@/components/molecules/search-bar-neo'
import { UserBadge } from '@/components/molecules/user-badge'
import { NotificationBell } from '@/components/molecules/notification-bell'
import { ThemeToggle } from '@/components/atoms/theme-toggle'
import { useSidebarStore } from '@/stores/sidebar-store'
import { cn } from '@/lib/utils'

export function AppNavbar() {
  const { toggle } = useSidebarStore()
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'sticky top-0 z-40 w-full transition-all px-4 py-3',
        isScrolled ? 'bg-background/80 backdrop-blur-md border-b-2 border-border' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggle}
            className="md:hidden neo-border neo-shadow bg-background"
          >
            <Menu size={24} />
          </Button>
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-wisdom rounded-neo border-2 border-border neo-shadow flex items-center justify-center font-black text-white text-xl">
              B
            </div>
            <span className="font-black text-xl hidden sm:block tracking-tighter">
              BelajarAnakTK
            </span>
          </Link>
        </div>

        <div className="hidden md:flex flex-1 max-w-md">
          <SearchBarNeo placeholder="Cari materi belajar..." />
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <NotificationBell 
            count={3} 
            notifications={[
              { id: '1', text: 'Kamu dapat lencana baru!', time: '2 menit lalu' },
              { id: '2', text: 'Quiz harian tersedia', time: '1 jam lalu' },
            ]}
          />
          <div className="hidden sm:block">
            <ThemeToggle />
          </div>
          <UserBadge name="Andi" role="Siswa TK A" status="online" className="hidden lg:flex" />
          <Button variant="ghost" size="icon" className="lg:hidden neo-border neo-shadow bg-background">
            <User size={20} />
          </Button>
        </div>
      </div>
    </header>
  )
}

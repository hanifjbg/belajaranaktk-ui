'use client'

import * as React from 'react'
import { 
  Settings, 
  Github, 
  Moon, 
  Sun, 
  Grid, 
  Play, 
  Pause, 
  Code, 
  Info,
  Maximize2
} from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import { useTheme } from 'next-themes'
import { IconButton } from '@/components/atoms/icon-button'
import { BadgeNeo } from '@/components/atoms/badge-neo'
import { NeoText } from '@/components/atoms/neo-text'
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { cn } from '@/lib/utils'

export function FloatingDXToolbar() {
  const { theme, setTheme } = useTheme()
  const [isOpen, setIsOpen] = React.useState(false)
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col-reverse items-end gap-3">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="flex flex-col items-end gap-3 pointer-events-auto"
          >
            {/* Version Info */}
            <BadgeNeo variant="wisdom" className="text-[10px] neo-shadow border-2">DX v0.1.0-alpha</BadgeNeo>

            {/* Tools */}
            <div className="flex flex-col gap-2 p-2 bg-background/80 backdrop-blur-md rounded-neo border-2 border-border neo-shadow">
              <ToolbarItem 
                icon={theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />} 
                label="Toggle Theme" 
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              />
              <ToolbarItem icon={<Grid size={18} />} label="Toggle Grid" />
              <ToolbarItem icon={<Play size={18} />} label="Toggle animations" />
              <ToolbarItem icon={<Code size={18} />} label="Copy Component Code" />
              <ToolbarItem icon={<Github size={18} />} label="View Repository" />
              <div className="h-[2px] bg-border mx-1" />
              <ToolbarItem icon={<Info size={18} />} label="UI Kit Docs" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1, rotate: 15 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'w-14 h-14 rounded-full border-4 border-border neo-shadow flex items-center justify-center transition-all bg-wisdom text-white',
          isOpen ? 'bg-vibrant rotate-90' : 'bg-wisdom'
        )}
      >
        <Settings size={28} className={isOpen ? 'animate-spin-slow' : ''} />
      </motion.button>
    </div>
  )
}

function ToolbarItem({ icon, label, onClick }: { icon: React.ReactNode; label: string; onClick?: () => void }) {
  return (
    <Tooltip>
      <TooltipTrigger>
        <IconButton
          icon={icon}
          variant="ghost"
          size="sm"
          onClick={onClick}
          className="hover:bg-wisdom hover:text-white transition-colors"
        />
      </TooltipTrigger>
      <TooltipContent side="left" className="neo-border text-xs font-bold">
        {label}
      </TooltipContent>
    </Tooltip>
  )
}

'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ChevronLeft, ChevronRight, Volume2, BookOpen } from 'lucide-react'
import { IconButton } from '@/components/atoms/icon-button'
import { ProgressNeo } from '@/components/atoms/progress-neo'
import { NeoText } from '@/components/atoms/neo-text'
import { CardNeo } from '@/components/organisms/card-neo'
import { cn } from '@/lib/utils'

interface Page {
  content: string
  imageUrl: string
  audioUrl?: string
}

interface StoryBookReaderProps {
  title: string
  pages: Page[]
}

export function StoryBookReader({ title, pages }: StoryBookReaderProps) {
  const [currentPage, setCurrentPage] = React.useState(0)
  const [direction, setDirection] = React.useState(0)

  const paginate = (newDirection: number) => {
    if (currentPage + newDirection >= 0 && currentPage + newDirection < pages.length) {
      setDirection(newDirection)
      setCurrentPage(currentPage + newDirection)
    }
  }

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  const progress = ((currentPage + 1) / pages.length) * 100

  return (
    <div className="w-full max-w-4xl mx-auto flex flex-col gap-6">
      <div className="flex items-center justify-between px-2">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-wisdom rounded-neo border-2 border-border neo-shadow text-white">
            <BookOpen size={20} />
          </div>
          <NeoText variant="heading" size="xl">
            {title}
          </NeoText>
        </div>
        <NeoText variant="caption" color="muted">
          Halaman {currentPage + 1} dari {pages.length}
        </NeoText>
      </div>

      <ProgressNeo value={progress} variant="wisdom" className="h-4" />

      <div className="relative aspect-[16/9] sm:aspect-[21/9] bg-background rounded-neo-lg border-4 border-border neo-shadow overflow-hidden flex items-center justify-center">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={currentPage}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute inset-0 flex flex-col md:flex-row"
          >
            <div className="flex-1 relative h-1/2 md:h-full border-b-2 md:border-b-0 md:border-r-2 border-border">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={pages[currentPage].imageUrl}
                alt={`Page ${currentPage + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 p-6 md:p-12 flex flex-col items-center justify-center text-center gap-6 bg-white dark:bg-card">
              <NeoText variant="body" size="xl" className="font-bold leading-relaxed max-w-md">
                {pages[currentPage].content}
              </NeoText>
              <IconButton
                icon={<Volume2 size={24} />}
                variant="secondary"
                size="lg"
                className="rounded-full"
              />
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-x-0 bottom-4 flex justify-between px-4 z-20 pointer-events-none">
          <IconButton
            icon={<ChevronLeft size={24} />}
            variant="default"
            size="lg"
            onClick={() => paginate(-1)}
            disabled={currentPage === 0}
            className={cn('pointer-events-auto', currentPage === 0 && 'opacity-0')}
          />
          <IconButton
            icon={<ChevronRight size={24} />}
            variant="default"
            size="lg"
            onClick={() => paginate(1)}
            disabled={currentPage === pages.length - 1}
            className={cn('pointer-events-auto', currentPage === pages.length - 1 && 'opacity-0')}
          />
        </div>
      </div>
    </div>
  )
}

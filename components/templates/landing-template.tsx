'use client'

import * as React from 'react'
import { motion } from 'motion/react'
import { NeoText } from '@/components/atoms/neo-text'
import { AppNavbar } from '@/components/organisms/app-navbar'

interface LandingTemplateProps {
  children: React.ReactNode
}

export function LandingTemplate({ children }: LandingTemplateProps) {
  return (
    <div className="min-h-screen relative flex flex-col">
      <AppNavbar />
      <main className="flex-1">
        {children}
      </main>
      <footer className="py-12 border-t-2 border-border bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <NeoText variant="body" color="muted">
            &copy; 2026 @fanfeklab/belajaranaktk-ui. All rights reserved.
          </NeoText>
        </div>
      </footer>
    </div>
  )
}

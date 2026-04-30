'use client'

import * as React from 'react'
import { motion } from 'motion/react'
import { CardNeo } from '@/components/organisms/card-neo'
import { NeoText } from '@/components/atoms/neo-text'

interface AuthTemplateProps {
  children: React.ReactNode
  title: string
  subtitle: string
}

export function AuthTemplate({ children, title, subtitle }: AuthTemplateProps) {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-muted/20 relative overflow-hidden">
      {/* Background shapes strictly for Auth */}
      <div className="absolute top-0 left-0 w-full h-full grid-bg opacity-30" />
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-wisdom/10 rounded-full blur-[120px]" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-vibrant/10 rounded-full blur-[120px]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md relative z-10"
      >
        <div className="text-center mb-8">
          <div className="inline-block w-16 h-16 bg-wisdom rounded-neo border-4 border-border neo-shadow text-white text-3xl font-black mb-4 flex items-center justify-center">
            B
          </div>
          <NeoText variant="heading" size="4xl" className="uppercase">{title}</NeoText>
          <NeoText variant="body" color="muted">{subtitle}</NeoText>
        </div>

        <CardNeo className="p-8">
          {children}
        </CardNeo>
      </motion.div>
    </div>
  )
}

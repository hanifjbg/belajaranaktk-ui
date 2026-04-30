'use client'

import * as React from 'react'
import { LearningTemplate } from '@/components/templates/learning-template'
import { LetterTracingCanvas } from '@/components/organisms/letter-tracing-canvas'
import { NeoText } from '@/components/atoms/neo-text'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function TracingPage() {
  const [activeLetter, setActiveLetter] = React.useState('A')

  return (
    <LearningTemplate>
      <div className="space-y-8">
         <div className="flex items-center gap-4">
          <Link href="/app/app/belajar">
            <button className="p-3 bg-background rounded-neo border-2 border-border neo-shadow hover:translate-x-[2px] transition-all">
              <ArrowLeft size={24} />
            </button>
          </Link>
          <div>
            <NeoText variant="heading" size="3xl">Latihan Menulis</NeoText>
            <NeoText variant="body" color="muted">Gunakan jarimu atau mouse untuk mengikuti pola huruf.</NeoText>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mb-8">
          {['A', 'B', 'C', 'D', 'E', 'F', 'G'].map((l) => (
            <button
              key={l}
              onClick={() => setActiveLetter(l)}
              className={`w-12 h-12 flex items-center justify-center rounded-neo border-2 border-border neo-shadow font-black text-xl transition-all ${
                activeLetter === l ? 'bg-wisdom text-white' : 'bg-background hover:bg-muted'
              }`}
            >
              {l}
            </button>
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
          <LetterTracingCanvas letter={activeLetter} />
        </div>
      </div>
    </LearningTemplate>
  )
}

'use client'

import * as React from 'react'
import { LearningTemplate } from '@/components/templates/learning-template'
import { AlphabetCardNeo } from '@/components/organisms/alphabet-card-neo'
import { NeoText } from '@/components/atoms/neo-text'
import { mockLearning } from '@/lib/mock'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function AlphabetPage() {
  const variants: ('wisdom' | 'luminous' | 'vibrant' | 'lime')[] = ['wisdom', 'luminous', 'vibrant', 'lime']

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
            <NeoText variant="heading" size="3xl">Kartu Huruf</NeoText>
            <NeoText variant="body" color="muted">Ketuk kartu untuk melihat gambar dan mendengar suara.</NeoText>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center">
          {mockLearning.alphabet.map((item, i) => (
            <AlphabetCardNeo
              key={item.letter}
              {...item}
              variant={variants[i % variants.length]}
            />
          ))}
          {/* Filler to show more */}
          <AlphabetCardNeo
              letter="D"
              word="Domba"
              imageUrl="https://picsum.photos/seed/sheep/400"
              variant="wisdom"
          />
          <AlphabetCardNeo
              letter="E"
              word="Elang"
              imageUrl="https://picsum.photos/seed/eagle/400"
              variant="luminous"
          />
        </div>
      </div>
    </LearningTemplate>
  )
}

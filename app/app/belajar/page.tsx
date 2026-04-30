'use client'

import * as React from 'react'
import { LearningTemplate } from '@/components/templates/learning-template'
import { NeoText } from '@/components/atoms/neo-text'
import { ActionCard } from '@/components/organisms/action-card'
import { BookOpen, Star, Music, Palette, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function BelajarPage() {
  return (
    <LearningTemplate>
      <div className="space-y-8">
        <div className="flex items-center gap-4">
          <Link href="/app">
            <button className="p-3 bg-background rounded-neo border-2 border-border neo-shadow hover:translate-x-[2px] transition-all">
              <ArrowLeft size={24} />
            </button>
          </Link>
          <NeoText variant="heading" size="3xl">Pilih Materi 📖</NeoText>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Link href="/app/app/belajar/alphabet">
            <ActionCard
              title="Huruf & Abjad"
              description="Belajar mengenal huruf A sampai Z dengan cara yang menyenangkan."
              icon={<BookOpen size={32} />}
              actionLabel="Pelajari"
              variant="wisdom"
              imageUrl="https://picsum.photos/seed/learn-abc/600/300"
            />
          </Link>
          <Link href="/app/app/belajar/angka">
            <ActionCard
              title="Angka & Berhitung"
              description="Ayo belajar angka 1-10 dan cara berhitung yang benar."
              icon={<Star size={32} />}
              actionLabel="Pelajari"
              variant="luminous"
              imageUrl="https://picsum.photos/seed/learn-123/600/300"
            />
          </Link>
          <Link href="/app/app/belajar/cerita">
            <ActionCard
              title="Dongeng Interaktif"
              description="Dengarkan cerita menarik dengan gambar yang bercerita."
              icon={<Music size={32} />}
              actionLabel="Baca"
              variant="vibrant"
              imageUrl="https://picsum.photos/seed/learn-story/600/300"
            />
          </Link>
          <Link href="/app/app/belajar/tracing">
            <ActionCard
              title="Latihan Menulis"
              description="Belajar menulis huruf dengan mengikuti pola garis."
              icon={<Palette size={32} />}
              actionLabel="Latihan"
              variant="lime"
              imageUrl="https://picsum.photos/seed/learn-write/600/300"
            />
          </Link>
        </div>
      </div>
    </LearningTemplate>
  )
}

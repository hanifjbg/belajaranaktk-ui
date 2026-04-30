'use client'

import * as React from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { BookOpen, Trophy, Users, Star, ArrowRight, Play } from 'lucide-react'
import { LearningTemplate } from '@/components/templates/learning-template'
import { NeoText } from '@/components/atoms/neo-text'
import { ActionCard } from '@/components/organisms/action-card'
import { GameCard } from '@/components/organisms/game-card'
import { StatsGrid } from '@/components/organisms/stats-grid'
import { AchievementPopup } from '@/components/organisms/achievement-popup'
import { mockAuth, mockLearning } from '@/lib/mock'
import { triggerConfetti, ConfettiBurst } from '@/components/atoms/confetti-burst'

export default function AppDemoPage() {
  const [showAchievement, setShowAchievement] = React.useState(false)

  return (
    <LearningTemplate>
      <div className="space-y-12">
        {/* Hero Welcome */}
        <section className="bg-wisdom rounded-neo-lg border-4 border-border neo-shadow p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <BookOpen size={200} strokeWidth={8} />
          </div>
          <div className="relative z-10 max-w-2xl">
            <NeoText variant="heading" size="4xl" className="mb-4">
              Selamat Datang, {mockAuth.profiles[0].name}! 👋
            </NeoText>
            <NeoText variant="body" size="lg" className="mb-8 opacity-90">
              Hari ini adalah hari yang cerah untuk belajar sesuatu yang baru. Ayo pilih petualanganmu sekarang!
            </NeoText>
            <button
               onClick={() => setShowAchievement(true)}
               className="bg-luminous text-black px-8 py-4 rounded-neo border-4 border-black neo-shadow neo-shadow-hover font-black uppercase text-xl flex items-center gap-3 active:translate-y-1 transition-all"
            >
              <Play size={24} fill="currentColor" />
              Lanjut Belajar
            </button>
          </div>
        </section>

        {/* Stats Quick View */}
        <StatsGrid />

        {/* Learning Paths */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <NeoText variant="heading" size="3xl">Materi Belajar 📚</NeoText>
            <button className="text-wisdom font-black flex items-center gap-1 group">
               Lihat Semua <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ActionCard
              title="Mengenal Huruf"
              description="Belajar abjad A-Z dengan gambar dan suara yang lucu."
              icon={<BookOpen size={24} />}
              actionLabel="Mulai"
              variant="wisdom"
              imageUrl="https://picsum.photos/seed/abc/600/400"
            />
            <ActionCard
              title="Belajar Angka"
              description="Satu, dua, tiga! Ayo berhitung bersama teman-teman."
              icon={<Star size={24} />}
              actionLabel="Mulai"
              variant="luminous"
              imageUrl="https://picsum.photos/seed/123/600/400"
            />
            <ActionCard
              title="Kuis Seru"
              description="Tes kemampuanmu dengan kuis gambar yang interaktif."
              icon={<Trophy size={24} />}
              actionLabel="Mulai"
              variant="vibrant"
              imageUrl="https://picsum.photos/seed/quiz/600/400"
            />
          </div>
        </section>

        {/* Mini Games Area */}
        <section>
          <NeoText variant="heading" size="3xl" className="mb-8">Game Edukasi 🎮</NeoText>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <GameCard 
              title="Tebak Gambar" 
              level={1} 
              rating={5} 
              status="completed" 
              thumbnailUrl="https://picsum.photos/seed/game1/400" 
            />
            <GameCard 
              title="Match Warna" 
              level={2} 
              rating={4} 
              status="unlocked" 
              thumbnailUrl="https://picsum.photos/seed/game2/400" 
            />
            <GameCard 
              title="Memory Card" 
              level={3} 
              rating={0} 
              status="locked" 
              thumbnailUrl="https://picsum.photos/seed/game3/400" 
            />
            <GameCard 
              title="Susun Balok" 
              level={4} 
              rating={0} 
              status="locked" 
              thumbnailUrl="https://picsum.photos/seed/game4/400" 
            />
          </div>
        </section>

        {/* Social Feed Sidebar integration in mobile is hard, so we just list friends */}
        <section className="bg-muted/50 p-8 rounded-neo-lg border-2 border-border border-dashed">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-vibrant rounded-neo border-2 border-border neo-shadow">
                <Users size={24} className="text-white" />
              </div>
              <NeoText variant="heading" size="2xl">Teman Yang Belajar 👫</NeoText>
            </div>
            <div className="flex flex-wrap gap-4">
              {['Budi', 'Siti', 'Ani', 'Dodi', 'Eka'].map((name, i) => (
                <div key={i} className="flex items-center gap-2 bg-background p-2 pr-4 rounded-full border-2 border-border neo-shadow">
                  <div className={`w-8 h-8 rounded-full border-2 border-border bg-wisdom flex items-center justify-center text-[10px] text-white font-black`}>
                    {name.substring(0,2)}
                  </div>
                  <NeoText variant="body" size="sm" className="font-black">{name}</NeoText>
                </div>
              ))}
            </div>
        </section>
      </div>

      <AnimatePresence>
        {showAchievement && (
          <AchievementPopup 
            title="Pembelajar Hebat!" 
            description="Kamu baru saja membuka akses ke petualangan baru."
            onClose={() => setShowAchievement(false)}
          />
        )}
      </AnimatePresence>
    </LearningTemplate>
  )
}

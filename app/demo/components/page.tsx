'use client'

import * as React from 'react'
import { 
  Box, 
  Layers, 
  MousePointer2, 
  Layout, 
  CheckCircle, 
  AlertCircle,
  Package,
  Search,
  ChevronRight,
  Star
} from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import { LandingTemplate } from '@/components/templates/landing-template'
import { NeoText } from '@/components/atoms/neo-text'
import { CardNeo } from '@/components/organisms/card-neo'
import { BadgeNeo } from '@/components/atoms/badge-neo'
import { IconButton } from '@/components/atoms/icon-button'
import { ThemeToggle } from '@/components/atoms/theme-toggle'
import { Input } from '@/components/ui/input'
import { ScrollArea } from '@/components/ui/scroll-area'
import { FloatingDXToolbar } from '@/components/organisms/floating-dx-toolbar'

// Dynamic Imports or direct usage for components
import * as UI from "@/components/ui/button" // Button as an example
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ProgressNeo } from '@/components/atoms/progress-neo'
import { AudioButton } from '@/components/atoms/audio-button'
import { StarRating } from '@/components/atoms/star-rating'
import { StatCard } from '@/components/molecules/stat-card'
import { UserBadge } from '@/components/molecules/user-badge'

const categories = [
  { id: 'atoms', label: 'Atoms', icon: Box },
  { id: 'molecules', label: 'Molecules', icon: Layers },
  { id: 'organisms', label: 'Organisms', icon: Layout },
  { id: 'forms', label: 'Forms & Inputs', icon: CheckCircle },
  { id: 'feedback', label: 'Feedback', icon: AlertCircle },
]

export default function DemoComponentsPage() {
  const [activeCategory, setActiveCategory] = React.useState('atoms')
  const [search, setSearch] = React.useState('')

  return (
    <LandingTemplate>
      <div className="flex h-screen overflow-hidden pt-16">
        {/* Sidebar */}
        <aside className="w-64 border-r-2 border-border bg-background flex flex-col pt-4">
          <div className="px-4 mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={16} />
              <Input 
                placeholder="Cari komponen..." 
                className="pl-9 neo-border h-10 text-xs" 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
          </div>
          <ScrollArea className="flex-1 px-4">
            <div className="space-y-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`w-full flex items-center gap-3 p-3 rounded-neo border-2 transition-all font-black uppercase text-xs tracking-tight ${
                    activeCategory === cat.id ? 'bg-wisdom text-white border-border neo-shadow' : 'border-transparent hover:bg-muted text-muted-foreground'
                  }`}
                >
                  <cat.icon size={18} />
                  {cat.label}
                </button>
              ))}
            </div>
          </ScrollArea>
        </aside>

        {/* Content */}
        <main className="flex-1 overflow-y-auto bg-muted/20 p-8 scroll-smooth">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="flex items-center justify-between">
              <div>
                <NeoText variant="heading" size="4xl">Component Gallery</NeoText>
                <NeoText variant="body" color="muted">Jelajahi semua elemen UI kit Neobrutalist kami.</NeoText>
              </div>
              <ThemeToggle />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-16"
              >
                {activeCategory === 'atoms' && (
                  <>
                    <ComponentSection title="Typography (NeoText)">
                      <div className="space-y-4 p-6 bg-background rounded-neo neo-border">
                        <NeoText variant="heading" size="4xl">Judul Utama Sangat Besar</NeoText>
                        <NeoText variant="heading" size="2xl">Sub Judul Menarik</NeoText>
                        <NeoText variant="body" size="lg">Paragraf panjang yang sangat mudah dibaca oleh anak-anak dengan spasi yang lega.</NeoText>
                        <NeoText variant="caption">Label Kecil Uppercase</NeoText>
                        <div className="flex gap-4">
                          <NeoText color="wisdom" className="font-black">Warna Wisdom</NeoText>
                          <NeoText color="accent" className="font-black">Warna Vibrant</NeoText>
                          <NeoText color="lime" className="font-black">Warna Lime</NeoText>
                        </div>
                      </div>
                    </ComponentSection>

                    <ComponentSection title="Buttons & Icons">
                      <div className="flex flex-wrap gap-4">
                        <Button className="font-black neo-border neo-shadow neo-shadow-hover">Standar Button</Button>
                        <IconButton icon={<Package />} variant="primary" />
                        <IconButton icon={<Star />} variant="secondary" />
                        <IconButton icon={<ChevronRight />} variant="lime" />
                        <IconButton icon={<AlertCircle />} variant="accent" />
                      </div>
                    </ComponentSection>

                    <ComponentSection title="Badges & Dots">
                      <div className="flex flex-wrap gap-4">
                        <BadgeNeo variant="wisdom">Wisdom</BadgeNeo>
                        <BadgeNeo variant="luminous">Luminous</BadgeNeo>
                        <BadgeNeo variant="vibrant">Vibrant</BadgeNeo>
                        <BadgeNeo variant="lime">Lime</BadgeNeo>
                        <BadgeNeo variant="outline">Outline</BadgeNeo>
                      </div>
                    </ComponentSection>
                  </>
                )}

                {activeCategory === 'molecules' && (
                  <>
                    <ComponentSection title="Stats & Profiles">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <StatCard 
                          title="Total Poin" 
                          value="12.450" 
                          icon={<Star size={24} />} 
                          variant="luminous"
                          trend={{ value: '+15%', isUp: true }}
                        />
                        <UserBadge name="Andi Siswa" role="Kelas TK A" status="online" />
                      </div>
                    </ComponentSection>

                    <ComponentSection title="Education Components">
                      <div className="space-y-6">
                        <ProgressNeo value={65} variant="wisdom" />
                        <div className="flex gap-4">
                          <AudioButton audioUrl="#" variant="wisdom" />
                          <StarRating rating={4} />
                        </div>
                      </div>
                    </ComponentSection>
                  </>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </main>
      </div>
      <FloatingDXToolbar />
    </LandingTemplate>
  )
}

function ComponentSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4">
        <NeoText variant="heading" size="2xl">{title}</NeoText>
        <div className="flex-1 h-[2px] bg-border opacity-20" />
      </div>
      {children}
    </div>
  )
}

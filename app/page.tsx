'use client'

import React from 'react'
import { motion } from 'motion/react'
import { LayoutGrid, AppWindow, ShieldAlert, Github, Star, Zap } from 'lucide-react'
import { LandingTemplate } from '@/components/templates/landing-template'
import { ActionCard } from '@/components/organisms/action-card'
import { NeoText } from '@/components/atoms/neo-text'
import { BadgeNeo } from '@/components/atoms/badge-neo'

export default function LandingPage() {
  const openInNewTab = (url: string) => {
    if (typeof window !== 'undefined') {
      window.open(url, '_blank', 'noreferrer')
    }
  }

  return (
    <LandingTemplate>
      <div className="relative pt-20 pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="mb-6 inline-flex items-center gap-2 px-4 py-2 bg-wisdom/10 neo-border rounded-full"
            >
              <BadgeNeo variant="wisdom">v0.1.0 Alpha</BadgeNeo>
              <span className="text-sm font-black uppercase text-wisdom">Production-Ready Component Library</span>
            </motion.div>

            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-6xl md:text-8xl font-black mb-6 tracking-tighter leading-none"
            >
              Desain <span className="text-vibrant">Neobrutalist</span> untuk Anak Indonesia
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto font-medium"
            >
              UI Kit lengkap untuk membangun aplikasi edukasi yang ceria, responsif, dan berkinerja tinggi. Dirancang khusus untuk dunia belajar anak.
            </motion.p>

            <div className="flex flex-wrap items-center justify-center gap-6">
               <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => openInNewTab('/demo/components')}
                className="bg-luminous px-8 py-5 neo-border neo-shadow neo-shadow-hover rounded-neo-lg text-xl font-black uppercase flex items-center gap-3 transition-all"
              >
                <LayoutGrid size={24} />
                Eksplor Komponen
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-background px-8 py-5 neo-border neo-shadow neo-shadow-hover rounded-neo-lg text-xl font-black uppercase flex items-center gap-3 transition-all"
              >
                <Github size={24} />
                Dokumentasi
              </motion.button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ActionCard
              title="Demo Komponen"
              description="Lihat galeri 50+ komponen UI yang siap pakai dan interaktif."
              icon={<LayoutGrid size={32} />}
              actionLabel="Buka Galeri"
              variant="wisdom"
              onAction={() => openInNewTab('/demo/components')}
            />
            <ActionCard
              title="Demo Aplikasi"
              description="Contoh implementasi aplikasi belajar anak dengan gamifikasi penuh."
              icon={<AppWindow size={32} />}
              actionLabel="Lihat App"
              variant="vibrant"
              onAction={() => openInNewTab('/app')}
            />
            <ActionCard
              title="Admin Panel"
              description="Dashboard manajemen konten dan analitik untuk guru & orang tua."
              icon={<ShieldAlert size={32} />}
              actionLabel="Buka Admin"
              variant="lime"
              onAction={() => openInNewTab('/admin')}
            />
          </div>
        </div>

        {/* Feature section */}
        <div className="max-w-7xl mx-auto px-4 mt-32">
          <div className="bg-background rounded-neo-lg border-4 border-border neo-shadow p-12 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-8 text-wisdom/5">
                <Zap size={300} strokeWidth={4} />
             </div>
             
             <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                   <BadgeNeo variant="wisdom" className="mb-4">KEUNGGULAN UTAMA</BadgeNeo>
                   <NeoText variant="heading" size="4xl" className="mb-6">Cepat, Mudah, dan Menyenangkan</NeoText>
                   <ul className="space-y-6">
                      <FeatureItem 
                        icon={<Star className="text-luminous" />} 
                        title="Aksesibilitas Tinggi" 
                        desc="Kontras warna tinggi dan tipografi besar untuk memudahkan anak-anak." 
                      />
                      <FeatureItem 
                        icon={<Zap className="text-vibrant" />} 
                        title="Performa PWA" 
                        desc="Mendukung instalasi di mobile dan dapat diakses secara offline." 
                      />
                      <FeatureItem 
                        icon={<LayoutGrid className="text-wisdom" />} 
                        title="Atomic Design" 
                        desc="Struktur komponen yang sangat fleksibel dan mudah dikembangkan." 
                      />
                   </ul>
                </div>
                <div className="aspect-video bg-muted rounded-neo border-4 border-border neo-shadow flex items-center justify-center p-8">
                   <div className="w-full h-full bg-white/50 dark:bg-black/50 rounded-neo border-2 border-dashed border-border flex items-center justify-center">
                     <NeoText variant="heading" size="xl" color="muted">Preview UI Animasi</NeoText>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </LandingTemplate>
  )
}

function FeatureItem({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <li className="flex gap-4">
      <div className="shrink-0 p-3 bg-background border-2 border-border neo-shadow rounded-neo h-fit">
        {icon}
      </div>
      <div>
        <NeoText variant="body" size="lg" className="font-black leading-none mb-1 uppercase tracking-tight">{title}</NeoText>
        <NeoText variant="body" color="muted">{desc}</NeoText>
      </div>
    </li>
  )
}

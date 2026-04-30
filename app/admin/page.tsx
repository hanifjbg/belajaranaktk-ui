'use client'

import * as React from 'react'
import { AdminTemplate } from '@/components/templates/admin-template'
import { StatsGrid } from '@/components/organisms/stats-grid'
import { ChartContainer } from '@/components/molecules/chart-container'
import { SortableTable } from '@/components/organisms/sortable-table'
import { TimelineItem } from '@/components/molecules/timeline-item'
import { NeoText } from '@/components/atoms/neo-text'
import { mockAdmin } from '@/lib/mock'
import { BookOpen, UserPlus, Star, Layout } from 'lucide-react'

export default function AdminPage() {
  return (
    <AdminTemplate>
      <div className="space-y-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <NeoText variant="heading" size="3xl">Overview Panel</NeoText>
            <NeoText variant="body" color="muted">Data statistik aplikasi BelajarAnakTK hari ini.</NeoText>
          </div>
          <div className="flex gap-2">
            <button className="bg-luminous px-4 py-2 rounded-neo border-2 border-border neo-shadow font-black uppercase text-xs">
              Eksport PDF
            </button>
            <button className="bg-wisdom text-white px-4 py-2 rounded-neo border-2 border-border neo-shadow font-black uppercase text-xs">
              Config Global
            </button>
          </div>
        </div>

        <StatsGrid />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
             <ChartContainer 
               title="Update Aktivitas Siswa" 
               categories={['value']} 
               data={mockAdmin.stats} 
             />
          </div>
          <div className="space-y-6">
            <NeoText variant="heading" size="xl">Log Aktivitas Terbaru</NeoText>
            <div className="space-y-0">
               <TimelineItem 
                 title="Konten Baru" 
                 description="Paket huruf Hijaiyah telah diunggah." 
                 time="10:30 AM" 
                 icon={<BookOpen size={20} />} 
                 variant="wisdom"
               />
               <TimelineItem 
                 title="Siswa Terdaftar" 
                 description="Anak ke-1000 baru saja bergabung." 
                 time="09:15 AM" 
                 icon={<UserPlus size={20} />} 
                 variant="lime"
               />
               <TimelineItem 
                 title="Update Tema" 
                 description="Warna aksen 'Wisdom' telah diperbarui." 
                 time="Dini Hari" 
                 icon={<Layout size={20} />} 
                 variant="vibrant"
                 isLast
               />
            </div>
          </div>
        </div>

        <SortableTable 
          title="Manajemen Pengguna Terakhir"
          columns={[
            { key: 'name', label: 'NAMA', sortable: true },
            { key: 'email', label: 'EMAIL' },
            { key: 'role', label: 'PERAN' },
            { key: 'status', label: 'STATUS' },
          ]}
          data={mockAdmin.users}
        />
      </div>
    </AdminTemplate>
  )
}

import * as React from 'react'
import { StatCard } from '@/components/molecules/stat-card'
import { TrendingUp, TrendingDown, Users, BookOpen, Trophy, BarChart3 } from 'lucide-react'

interface Stat {
  title: string
  value: string | number
  icon: React.ReactNode
  variant: 'wisdom' | 'luminous' | 'vibrant' | 'lime'
  trend?: { value: string; isUp: boolean }
}

export function StatsGrid() {
  const stats: Stat[] = [
    {
      title: 'Total Siswa',
      value: '2,543',
      icon: <Users size={20} />,
      variant: 'wisdom',
      trend: { value: '+12%', isUp: true },
    },
    {
      title: 'Materi Aktif',
      value: '128',
      icon: <BookOpen size={20} />,
      variant: 'luminous',
    },
    {
      title: 'Award Diberikan',
      value: '15.2k',
      icon: <Trophy size={20} />,
      variant: 'lime',
      trend: { value: '+5%', isUp: true },
    },
    {
      title: 'Rata-rata Nilai',
      value: '88/100',
      icon: <BarChart3 size={20} />,
      variant: 'vibrant',
      trend: { value: '-2%', isUp: false },
    },
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, i) => (
        <StatCard
          key={i}
          title={stat.title}
          value={stat.value}
          icon={stat.icon}
          variant={stat.variant}
          trend={stat.trend}
        />
      ))}
    </div>
  )
}

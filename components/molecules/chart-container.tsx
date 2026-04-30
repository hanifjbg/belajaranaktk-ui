'use client'

import * as React from 'react'
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts'
import { Card } from '@/components/ui/card'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { NeoText } from '@/components/atoms/neo-text'

interface ChartContainerProps {
  title: string
  data: any[]
  categories: string[]
  className?: string
}

export function ChartContainer({ title, data, categories, className }: ChartContainerProps) {
  return (
    <Card className={`p-6 neo-border neo-shadow bg-background ${className}`}>
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <NeoText variant="heading" size="xl">{title}</NeoText>
        <Tabs defaultValue="week" className="w-[200px]">
          <TabsList className="grid w-full grid-cols-2 neo-border neo-shadow rounded-neo">
            <TabsTrigger value="week" className="rounded-none data-[state=active]:bg-wisdom data-[state=active]:text-white">Week</TabsTrigger>
            <TabsTrigger value="month" className="rounded-none data-[state=active]:bg-wisdom data-[state=active]:text-white">Month</TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      
      <div className="h-[300px] w-full mt-4">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 12, fontWeight: 700, fill: '#6b7280' }} 
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fontSize: 12, fontWeight: 700, fill: '#6b7280' }} 
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#fff',
                border: '2px solid #000',
                borderRadius: '8px',
                boxShadow: '4px 4px 0px 0px rgba(0,0,0,1)',
                fontWeight: 700
              }}
            />
            <Area
              type="monotone"
              dataKey={categories[0]}
              stroke="#8B5CF6"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorValue)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </Card>
  )
}

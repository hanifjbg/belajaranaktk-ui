'use client'

import * as React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { ChevronDown, ArrowUpDown, Search, Filter } from 'lucide-react'
import { NeoText } from '@/components/atoms/neo-text'
import { CardNeo } from '@/components/organisms/card-neo'
import { cn } from '@/lib/utils'

interface SortableTableProps {
  title: string
  columns: { key: string; label: string; sortable?: boolean }[]
  data: any[]
}

export function SortableTable({ title, columns, data }: SortableTableProps) {
  const [searchTerm, setSearchTerm] = React.useState('')

  return (
    <CardNeo className="p-0 overflow-hidden">
      <div className="p-6 border-b-2 border-border bg-background flex flex-wrap items-center justify-between gap-4">
        <NeoText variant="heading" size="xl">{title}</NeoText>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
            <Input 
              placeholder="Search..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 neo-border w-64 h-10 focus-visible:ring-wisdom"
            />
          </div>
          <Button variant="outline" className="neo-border neo-shadow h-10 px-4 font-bold flex items-center gap-2">
            <Filter size={18} />
            Filter
          </Button>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <Table>
          <TableHeader className="bg-muted text-foreground border-b-2 border-border">
            <TableRow className="hover:bg-transparent border-none">
              {columns.map((col) => (
                <TableHead key={col.key} className="font-black h-14">
                  <div className="flex items-center gap-2">
                    {col.label}
                    {col.sortable && <ArrowUpDown size={14} className="text-muted-foreground" />}
                  </div>
                </TableHead>
              ))}
              <TableHead className="text-right font-black">AKSI</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row, i) => (
              <TableRow key={i} className="border-b-2 border-border hover:bg-muted transition-colors">
                {columns.map((col) => (
                  <TableCell key={col.key} className="font-medium h-16">
                    {row[col.key]}
                  </TableCell>
                ))}
                <TableCell className="text-right">
                  <Button variant="ghost" className="font-black text-wisdom hover:bg-wisdom/10">
                    EDIT
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <div className="p-4 border-t-2 border-border flex items-center justify-between bg-muted/50">
        <NeoText variant="caption" color="muted">Showing {data.length} entries</NeoText>
        <div className="flex items-center gap-2">
          <Button variant="outline" disabled className="neo-border neo-shadow font-black uppercase text-xs h-8">Prev</Button>
          <Button variant="outline" className="neo-border neo-shadow font-black uppercase text-xs h-8 bg-wisdom text-white">1</Button>
          <Button variant="outline" className="neo-border neo-shadow font-black uppercase text-xs h-8">2</Button>
          <Button variant="outline" className="neo-border neo-shadow font-black uppercase text-xs h-8">Next</Button>
        </div>
      </div>
    </CardNeo>
  )
}

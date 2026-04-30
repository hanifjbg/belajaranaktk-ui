'use client'

import * as React from 'react'
import { Eraser, Undo, Download, PenTool } from 'lucide-react'
import { IconButton } from '@/components/atoms/icon-button'
import { CardNeo } from '@/components/organisms/card-neo'
import { NeoText } from '@/components/atoms/neo-text'
import { cn } from '@/lib/utils'

interface LetterTracingCanvasProps {
  letter?: string
  className?: string
}

export function LetterTracingCanvas({ letter = 'A', className }: LetterTracingCanvasProps) {
  const canvasRef = React.useRef<HTMLCanvasElement>(null)
  const [isDrawing, setIsDrawing] = React.useState(false)
  const [history, setHistory] = React.useState<string[]>([])

  const startDrawing = (e: React.MouseEvent | React.TouchEvent) => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const { x, y } = getCoordinates(e, canvas)
    ctx.beginPath()
    ctx.moveTo(x, y)
    setIsDrawing(true)
  }

  const draw = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDrawing) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const { x, y } = getCoordinates(e, canvas)
    ctx.lineTo(x, y)
    ctx.strokeStyle = '#8B5CF6'
    ctx.lineWidth = 10
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'
    ctx.stroke()
  }

  const stopDrawing = () => {
    if (!isDrawing) return
    setIsDrawing(false)
    const canvas = canvasRef.current
    if (canvas) {
      setHistory([...history, canvas.toDataURL()])
    }
  }

  const getCoordinates = (e: React.MouseEvent | React.TouchEvent, canvas: HTMLCanvasElement) => {
    const rect = canvas.getBoundingClientRect()
    const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX
    const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY
    return {
      x: clientX - rect.left,
      y: clientY - rect.top,
    }
  }

  const clear = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    setHistory([])
  }

  const undo = () => {
    if (history.length === 0) return
    const newHistory = [...history]
    newHistory.pop()
    setHistory(newHistory)

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    if (newHistory.length > 0) {
      const img = new Image()
      img.src = newHistory[newHistory.length - 1]
      img.onload = () => ctx.drawImage(img, 0, 0)
    }
  }

  React.useEffect(() => {
    const canvas = canvasRef.current
    if (canvas) {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }
  }, [])

  return (
    <CardNeo className={cn('w-full flex flex-col gap-4', className)}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <PenTool className="text-vibrant" />
          <NeoText variant="heading" size="lg">Ayo Tulis Huruf &quot;{letter}&quot;</NeoText>
        </div>
        <div className="flex gap-2">
          <IconButton icon={<Undo size={18} />} onClick={undo} variant="ghost" size="sm" />
          <IconButton icon={<Eraser size={18} />} onClick={clear} variant="ghost" size="sm" />
        </div>
      </div>

      <div className="relative w-full aspect-square bg-muted rounded-neo border-4 border-dashed border-border overflow-hidden cursor-crosshair">
        {/* Transparent tracing guide */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none select-none">
          <span className="text-[200px] sm:text-[300px] font-black">{letter}</span>
        </div>
        
        <canvas
          ref={canvasRef}
          onMouseDown={startDrawing}
          onMouseMove={draw}
          onMouseUp={stopDrawing}
          onMouseLeave={stopDrawing}
          onTouchStart={startDrawing}
          onTouchMove={draw}
          onTouchEnd={stopDrawing}
          className="absolute inset-0 w-full h-full touch-none"
        />
      </div>
      
      <div className="flex justify-center">
        <button className="bg-lime px-6 py-2 rounded-neo border-2 border-border neo-shadow font-black uppercase text-sm flex items-center gap-2 active:translate-y-1 transition-all">
          <Download size={16} />
          Simpan Hasilnya
        </button>
      </div>
    </CardNeo>
  )
}

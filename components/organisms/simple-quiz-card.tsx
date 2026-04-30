'use client'

import * as React from 'react'
import { motion } from 'motion/react'
import { Check, X, AlertTriangle } from 'lucide-react'
import { NeoText } from '@/components/atoms/neo-text'
import { CardNeo } from '@/components/organisms/card-neo'
import { IconButton } from '@/components/atoms/icon-button'
import { cn } from '@/lib/utils'

interface SimpleQuizCardProps {
  question: string
  options: string[]
  correctIndex: number
  onAnswer?: (isCorrect: boolean) => void
}

export function SimpleQuizCard({ question, options, correctIndex, onAnswer }: SimpleQuizCardProps) {
  const [selectedIndex, setSelectedIndex] = React.useState<number | null>(null)
  const [isAnswered, setIsAnswered] = React.useState(false)

  const handleSelect = (index: number) => {
    if (isAnswered) return
    setSelectedIndex(index)
  }

  const handleSubmit = () => {
    if (selectedIndex === null || isAnswered) return
    setIsAnswered(true)
    onAnswer?.(selectedIndex === correctIndex)
  }

  return (
    <CardNeo className="max-w-xl mx-auto overflow-hidden">
      <div className="space-y-6">
        <div className="bg-luminous p-4 -mx-6 -mt-6 border-b-2 border-border mb-6">
          <NeoText variant="heading" size="xl" className="text-center">
            Pecahkan Teka-teki ini!
          </NeoText>
        </div>

        <div className="p-4 bg-muted rounded-neo border-2 border-border text-center mb-8">
          <NeoText variant="body" size="lg" className="font-black">
            {question}
          </NeoText>
        </div>

        <div className="grid gap-3">
          {options.map((option, index) => {
            const isSelected = selectedIndex === index
            const isCorrect = isAnswered && index === correctIndex
            const isWrong = isAnswered && isSelected && index !== correctIndex

            return (
              <motion.button
                key={index}
                whileHover={!isAnswered ? { scale: 1.02, x: 5 } : {}}
                whileTap={!isAnswered ? { scale: 0.98 } : {}}
                onClick={() => handleSelect(index)}
                className={cn(
                  'flex items-center justify-between p-4 rounded-neo border-2 transition-all font-black uppercase text-left',
                  !isAnswered && (isSelected ? 'bg-wisdom text-white border-border neo-shadow' : 'bg-background hover:bg-muted'),
                  isAnswered && isCorrect && 'bg-lime text-black border-border neo-shadow',
                  isAnswered && isWrong && 'bg-vibrant text-white border-border neo-shadow opacity-100',
                  isAnswered && !isCorrect && !isWrong && 'opacity-50'
                )}
                disabled={isAnswered}
              >
                <span>{option}</span>
                {isAnswered && isCorrect && <Check size={20} />}
                {isAnswered && isWrong && <X size={20} />}
              </motion.button>
            )
          })}
        </div>

        <div className="pt-4 flex flex-col gap-4">
          {!isAnswered ? (
            <button
              onClick={handleSubmit}
              disabled={selectedIndex === null}
              className={cn(
                'w-full p-4 rounded-neo border-4 border-border font-black text-xl uppercase transition-all',
                selectedIndex !== null 
                  ? 'bg-wisdom text-white neo-shadow neo-shadow-hover hover:translate-x-[2px] hover:translate-y-[2px]' 
                  : 'bg-muted text-muted-foreground opacity-50 cursor-not-allowed'
              )}
            >
              Cek Jawaban
            </button>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={cn(
                'p-4 rounded-neo border-2 border-border text-center flex flex-col items-center gap-2',
                selectedIndex === correctIndex ? 'bg-lime/20' : 'bg-vibrant/20'
              )}
            >
              <NeoText variant="heading" size="lg" color={selectedIndex === correctIndex ? 'lime' : 'accent'}>
                {selectedIndex === correctIndex ? 'Hebat! Kamu Benar! 🎉' : 'Ayo coba lagi! 🌟'}
              </NeoText>
            </motion.div>
          )}
        </div>
      </div>
    </CardNeo>
  )
}

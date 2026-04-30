'use client'

import * as React from 'react'
import { Search } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { IconButton } from '@/components/atoms/icon-button'
import { cn } from '@/lib/utils'

interface SearchBarNeoProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onSearch?: (value: string) => void
}

export function SearchBarNeo({ className, onSearch, ...props }: SearchBarNeoProps) {
  const [value, setValue] = React.useState('')

  const handleSearch = () => {
    onSearch?.(value)
  }

  return (
    <div className={cn('relative flex w-full max-w-sm items-center gap-2', className)}>
      <div className="relative flex-1">
        <Input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
          className="pr-10 neo-border neo-shadow focus-visible:ring-wisdom"
          {...props}
        />
        <div className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">
          <Search size={18} />
        </div>
      </div>
      <IconButton
        icon={<Search size={18} />}
        variant="secondary"
        size="sm"
        onClick={handleSearch}
        aria-label="Search"
      />
    </div>
  )
}

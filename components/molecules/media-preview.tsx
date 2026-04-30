import * as React from 'react'
import Image from 'next/image'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { BadgeNeo } from '@/components/atoms/badge-neo'
import { SkeletonNeo } from '@/components/atoms/skeleton-neo'
import { cn } from '@/lib/utils'

interface MediaPreviewProps {
  src: string
  alt: string
  ratio?: number
  label?: string
  className?: string
}

export function MediaPreview({ src, alt, ratio = 16 / 9, label, className }: MediaPreviewProps) {
  const [isLoading, setIsLoading] = React.useState(true)

  return (
    <div className={cn('relative w-full rounded-neo overflow-hidden border-2 border-border neo-shadow bg-background', className)}>
      <AspectRatio ratio={ratio}>
        {isLoading && <SkeletonNeo className="absolute inset-0" />}
        <Image
          src={src}
          alt={alt}
          fill
          className={cn(
            'object-cover transition-opacity duration-300',
            isLoading ? 'opacity-0' : 'opacity-100'
          )}
          onLoad={() => setIsLoading(false)}
          referrerPolicy="no-referrer"
        />
        {label && (
          <div className="absolute top-2 left-2">
            <BadgeNeo variant="wisdom">{label}</BadgeNeo>
          </div>
        )}
      </AspectRatio>
    </div>
  )
}

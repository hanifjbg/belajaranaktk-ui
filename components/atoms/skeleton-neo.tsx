import { cn } from "@/lib/utils"

interface SkeletonNeoProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'text' | 'circular' | 'rect'
}

export function SkeletonNeo({ className, variant = 'rect', ...props }: SkeletonNeoProps) {
  return (
    <div
      className={cn(
        "animate-pulse bg-muted border-2 border-border neo-shadow",
        variant === 'circular' ? "rounded-full" : "rounded-neo",
        variant === 'text' ? "h-4 w-full" : "",
        className
      )}
      {...props}
    />
  )
}

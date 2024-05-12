import { ComponentProps } from 'react'

import { cn } from '@/lib/utils'

interface SkeletonProps extends ComponentProps<'div'> {}

export const Skeleton = ({ className, ...props }: SkeletonProps) => {
  return (
    <div
      className={cn('bg-zinc-50/10 animate-pulse rounded-md', className)}
      {...props}
    />
  )
}

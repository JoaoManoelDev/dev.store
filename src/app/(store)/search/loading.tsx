'use client'

import { Skeleton } from '@/components/skeleton'

const Loading = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-3 gap-6">
        <Skeleton className="h-[347px]" />
        <Skeleton className="h-[347px]" />
        <Skeleton className="h-[347px]" />
        <Skeleton className="h-[347px]" />
        <Skeleton className="h-[347px]" />
        <Skeleton className="h-[347px]" />
      </div>
    </div>
  )
}

export default Loading

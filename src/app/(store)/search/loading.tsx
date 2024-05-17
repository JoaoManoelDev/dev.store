'use client'

import { Skeleton } from '@/components/skeleton'
import { useSearchParams } from 'next/navigation'

const Loading = () => {
  const searchParams = useSearchParams()

  const query = searchParams.get('q')

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm">
        Resultados para: <span className="font-semibold">{query}</span>
      </p>

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

import { Skeleton } from '../skeleton'

export const SearchFormSkeleton = () => {
  return (
    <div className="flex items-center w-[320px] gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-1 ring-zinc-700">
      <Skeleton className="w-5 h-5 text-zinc-500 rounded-full" />
    </div>
  )
}

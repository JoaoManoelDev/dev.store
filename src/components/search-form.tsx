'use client'

import { FormEvent } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

import { Icons } from '@/components/icons'

export const SearchForm = () => {
  const router = useRouter()
  const searchParams = useSearchParams()

  const query = searchParams.get('q')

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const data = Object.fromEntries(formData)

    const query = data.q

    if (!query) return null

    router.push(`/search?q=${query}`)
  }

  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center w-[320px] gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-1 ring-zinc-700"
    >
      <Icons.search className="w-5 h-5 text-zinc-500" />

      <input
        name="q"
        defaultValue={query ?? ''}
        type="text"
        placeholder="buscar produtos..."
        className="flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500"
      />
    </form>
  )
}

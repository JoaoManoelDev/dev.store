import Link from 'next/link'
import Image from 'next/image'

import { CartWidget } from '@/components/cart-widget'
import { SearchForm } from '@/components/search-form'

export const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Link href="/" className="text-2xl font-extrabold text-white">
          dev.store
        </Link>

        <SearchForm />
      </div>
      <div className="flex items-center gap-4">
        <CartWidget />

        <div className="w-px h-4 bg-zinc-700" />

        <Link href="/" className="flex items-center gap-2 hover:underline">
          <Image
            src="https://github.com/JoaoManoelDev.png"
            className="w-8 h-8 rounded-full"
            width={32}
            height={32}
            alt=""
          />
        </Link>
      </div>
    </div>
  )
}

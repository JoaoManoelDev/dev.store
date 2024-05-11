import Link from 'next/link'
import Image from 'next/image'

import { Icons } from '@/components/icons'

export const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Link href="/" className="text-2xl font-extrabold text-white">
          dev.store
        </Link>

        <form className="flex items-center w-[320px] gap-3 rounded-full bg-zinc-900 px-5 py-3 ring-1 ring-zinc-700">
          <Icons.search className="w-5 h-5 text-zinc-500" />

          <input
            type="text"
            placeholder="buscar produtos..."
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-zinc-500"
          />
        </form>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Icons.shoppingBag className="w-5 h-5" />
          <span className="text-sm">Carrinho (0)</span>
        </div>

        <div className="w-px h-4 bg-zinc-700" />

        <Link href="/" className="flex items-center gap-2 hover:underline">
          <span className="text-sm">Conta</span>
          <Image
            src="https://github.com/JoaoManoelDev.png"
            className="w-6 h-6 rounded-full"
            width={24}
            height={24}
            alt=""
          />
        </Link>
      </div>
    </div>
  )
}

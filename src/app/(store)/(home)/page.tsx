import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { api } from '@/data/api'
import { Product } from '@/data/types/product'

const getFeaturedProducts = async (): Promise<Product[]> => {
  const response = await api('/products/featured')

  const products = await response.json()

  return products
}

export const metadata: Metadata = {
  title: 'Home',
}

const Home = async () => {
  const [highlightedProduct, ...otherProducts] = await getFeaturedProducts()

  return (
    <div className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
      <Link
        href={`/product/${highlightedProduct.slug}`}
        className="group relative col-span-6 row-span-6 flex justify-center items-end rounded-lg bg-zinc-900 overflow-hidden"
      >
        <Image
          src={highlightedProduct.image}
          className="group-hover:scale-105 transition-transform duration-500"
          width={920}
          height={920}
          quality={100}
          alt=""
        />

        <div className="absolute bottom-14 right-14 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate">{highlightedProduct.title}</span>
          <span className="flex justify-center items-center h-full rounded-full bg-violet-500 px-4 font-semibold">
            {highlightedProduct.price.toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL',
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
          </span>
        </div>
      </Link>

      {otherProducts.map((product) => (
        <Link
          href={`/product/${product.slug}`}
          className="group relative col-span-3 row-span-3 flex justify-center items-end rounded-lg bg-zinc-900 overflow-hidden"
          key={product.id}
        >
          <Image
            src={product.image}
            className="group-hover:scale-105 transition-transform duration-500"
            width={920}
            height={920}
            quality={100}
            alt=""
          />

          <div className="absolute bottom-4 right-4 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
            <span className="text-sm truncate">{product.title}</span>
            <span className="flex justify-center items-center h-full rounded-full bg-violet-500 px-4 font-semibold">
              {product.price.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </span>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Home

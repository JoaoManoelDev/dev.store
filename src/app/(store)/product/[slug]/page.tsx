import Image from 'next/image'

import { api } from '@/data/api'
import { Product as IProduct } from '@/data/types/product'

interface ProductProps {
  params: {
    slug: string
  }
}

const getProduct = async (slug: string): Promise<IProduct> => {
  const response = await api(`/products/${slug}`)

  const product = await response.json()

  return product
}

const Product = async ({ params }: ProductProps) => {
  const product = await getProduct(params.slug)

  console.log('MEU PRODUTO', product)

  return (
    <div className="relative grid max-h-[860px] grid-cols-3">
      <div className="col-span-2 overflow-hidden">
        <Image
          src={product.image}
          alt=""
          width={620}
          height={620}
          quality={100}
        />
      </div>

      <div className="flex flex-col justify-center">
        <h1 className="text-3xl font-bold leading-tight">{product.title}</h1>

        <p className="mt-2 leading-relaxed text-zinc-400">
          {product.description}
        </p>

        <div className="mt-8 flex items-center gap-3">
          <span className="rounded-full bg-violet-500 px-5 py-2.5 font-semibold">
            {product.price.toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL',
              minimumFractionDigits: 0,
              maximumFractionDigits: 0,
            })}
          </span>
          <span className="text-sm text-zinc-400">
            Em 12x sem juros de{' '}
            {(product.price / 12).toLocaleString('pt-br', {
              style: 'currency',
              currency: 'BRL',
            })}
          </span>
        </div>

        <div className="mt-8 space-y-4">
          <span className="block font-semibold">Tamanhos</span>

          <div className="flex gap-2">
            <button
              type="button"
              className="flex w-14 h-9 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
            >
              P
            </button>

            <button
              type="button"
              className="flex w-14 h-9 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
            >
              M
            </button>

            <button
              type="button"
              className="flex w-14 h-9 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
            >
              G
            </button>

            <button
              type="button"
              className="flex w-14 h-9 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-sm font-semibold"
            >
              GG
            </button>
          </div>
        </div>

        <button
          type="button"
          className="mt-8 h-12 flex  items-center justify-center rounded-full bg-emerald-600 font-semibold text-white"
        >
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  )
}

export default Product

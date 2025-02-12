import { ImageResponse } from 'next/og'
import colors from 'tailwindcss/colors'

import { Product } from '@/data/types/product'
import { api } from '@/data/api'
import { env } from '@/env'
import Image from 'next/image'

export const alt = 'About Acme'
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

const getProduct = async (slug: string): Promise<Product> => {
  const response = await api(`/products/${slug}`, {
    next: {
      revalidate: 60 * 60, // 1 hour
    },
  })

  const product = await response.json()

  return product
}

interface ImageProps {
  params: {
    slug: string
  }
}

const OgImage = async ({ params }: ImageProps) => {
  const product = await getProduct(params.slug)

  const productImageUrl = new URL(product.image, env.APP_URL).toString()

  return new ImageResponse(
    (
      <div
        style={{
          background: colors.zinc[950],
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Image src={productImageUrl} alt="" style={{ width: '100%' }} />
      </div>
    ),
    {
      ...size,
    },
  )
}

export default OgImage

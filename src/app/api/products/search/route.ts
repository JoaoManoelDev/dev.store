import type { NextRequest } from 'next/server'
import data from '../data.json'

import { z } from 'zod'

export const GET = async (request: NextRequest) => {
  const { searchParams } = request.nextUrl

  const query = z.string().parse(searchParams.get('q'))

  const products = data.products.filter((product) => {
    return product.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  })

  if (!products) {
    return Response.json({ message: 'Products not found.' }, { status: 400 })
  }

  return Response.json(products)
}

import data from '../data.json'

export const GET = () => {
  const featuredProducts = data.products.filter((product) => product.featured)

  return Response.json(featuredProducts)
}

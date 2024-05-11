import data from './data.json'

export const GET = () => {
  return Response.json(data.products)
}

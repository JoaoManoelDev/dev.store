'use client'

import { useCart } from '@/contexts/cart-context'

interface AddToCartButtonProps {
  productId: number
}

export const AddToCartButton = ({ productId }: AddToCartButtonProps) => {
  const { addToCart } = useCart()

  const handleAddProductToCart = () => {
    addToCart(productId)
  }

  return (
    <button
      type="button"
      className="mt-8 h-12 flex  items-center justify-center rounded-full bg-emerald-600 font-semibold text-white"
      onClick={handleAddProductToCart}
    >
      Adicionar ao carrinho
    </button>
  )
}

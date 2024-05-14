'use client'

import { Icons } from '@/components/icons'
import { useCart } from '@/contexts/cart-context'

export const CartWidget = () => {
  const { items } = useCart()

  return (
    <div className="flex items-center gap-2">
      <Icons.shoppingBag className="w-5 h-5" />
      <span className="text-sm">Carrinho ({items.length})</span>
    </div>
  )
}

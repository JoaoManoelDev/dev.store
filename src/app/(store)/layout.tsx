import { Header } from '@/components/header'
import { CartContextProvider } from '@/contexts/cart-context'

interface StoreLayoutProps {
  children: React.ReactNode
}

const StoreLayout = ({ children }: StoreLayoutProps) => {
  return (
    <CartContextProvider>
      <div className="mx-auto grid min-h-screen w-full max-w-6xl grid-rows-app gap-5 px-8 p-8">
        <Header />
        {children}
      </div>
    </CartContextProvider>
  )
}

export default StoreLayout

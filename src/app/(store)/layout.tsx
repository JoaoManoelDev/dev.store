import { Header } from '@/components/header'

interface StoreLayoutProps {
  children: React.ReactNode
}

const StoreLayout = ({ children }: StoreLayoutProps) => {
  return (
    <div className="mx-auto grid min-h-screen w-full max-w-[1600px] grid-rows-app gap-5 px-8 p-8">
      <Header />
      {children}
    </div>
  )
}

export default StoreLayout

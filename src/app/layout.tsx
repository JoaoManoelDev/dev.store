import type { Metadata } from 'next'
import NextTopLoader from 'nextjs-toploader'

import '@/styles/globals.css'
import { inter } from '@/styles/fonts'

export const metadata: Metadata = {
  title: {
    template: '%s | dev.store',
    default: 'dev.store',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br" className={inter.variable}>
      <body className="bg-zinc-950 text-zinc-50 antialiased">
        <NextTopLoader color="#a1a1aa" showSpinner={false} shadow={false} />
        {children}
      </body>
    </html>
  )
}

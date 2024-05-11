import type { Metadata } from 'next'

import '@/styles/globals.css'
import { inter } from '@/styles/fonts'

export const metadata: Metadata = {
  title: 'devstore',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br" className={inter.variable}>
      <body>{children}</body>
    </html>
  )
}

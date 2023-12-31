import type { Metadata } from 'next'
import { Inter, Roboto } from 'next/font/google'
import './globals.css'

// const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400','500','700']
})

export const metadata: Metadata = {
  title: 'Registro de Arquitetos',
  description: 'App para cadastro de novos arquitetos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  )
}

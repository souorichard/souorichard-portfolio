import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import './globals.css'
import { Toaster } from '@/components/ui/sonner'

const rubik = Rubik({
  variable: '--font-rubik-sans',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Richard Rodrigues | Portfolio ',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${rubik.variable} dark antialiased`}>
        {children}
        <Toaster richColors />
      </body>
    </html>
  )
}

import { Header } from '@/components/header'
import { Separator } from '@/components/ui/separator'
import type { PropsWithChildren } from 'react'
import { ScrollButton } from './_components/scroll-button'

export default function AppLayout({ children }: PropsWithChildren) {
  return (
    <div className="relative w-full max-w-5xl min-h-[screen] mx-auto px-5 py-7 space-y-6">
      <Header />
      <Separator />
      {children}

      <ScrollButton />
    </div>
  )
}

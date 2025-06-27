import { Header } from '@/components/header'
import { PropsWithChildren } from 'react'

export default function AppLayout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen">
      <Header />
      {children}
    </div>
  )
}

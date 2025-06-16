import type { PropsWithChildren } from 'react'

export default function AppLayout({ children }: PropsWithChildren) {
  return (
    <div className="max-w-5xl mx-auto px-5 py-7">
      <span>header</span>
      {children}
    </div>
  )
}

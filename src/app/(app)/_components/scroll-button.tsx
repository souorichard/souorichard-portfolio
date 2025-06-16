'use client'

import { Button } from '@/components/ui/button'
import { ArrowUp } from 'lucide-react'

export function ScrollButton() {
  return (
    <Button
      size="icon"
      variant="outline"
      className="fixed right-5 bottom-5 size-12 rounded-full"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      disabled={window.scrollY === 0}
    >
      <ArrowUp className="size-5" />
      <span className="sr-only">Scroll to top</span>
    </Button>
  )
}

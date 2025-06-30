'use client'

import { Menu } from 'lucide-react'
import { Button } from './ui/button'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet'
import Link from 'next/link'
import { useState } from 'react'

export function NavMenuSheet() {
  const [open, setIsOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button size="icon" variant="ghost" className="lg:hidden">
          <Menu className="size-4" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <div className="px-4 flex flex-col gap-3">
          <Button variant="outline" onClick={() => setIsOpen(false)} asChild>
            <Link href="/">HOME</Link>
          </Button>
          <Button variant="outline" onClick={() => setIsOpen(false)} asChild>
            <Link href="/#about">ABOUT</Link>
          </Button>
          <Button variant="outline" onClick={() => setIsOpen(false)} asChild>
            <Link href="/#projects">PROJECTS</Link>
          </Button>
          <Button variant="outline" onClick={() => setIsOpen(false)} asChild>
            <Link href="/#contact">CONTACT</Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}

import { Button } from './ui/button'
import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { NavMenuSheet } from './nav-menu-sheet'

export function Header() {
  return (
    <header className="fixed top-0 left-0 w-full p-5 border-b bg-background/90 backdrop-blur-xs shadow-md z-10">
      <div className="w-full max-w-[1200px] mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Avatar className="size-8">
            <AvatarImage src="https://github.com/souorichard.png" />
            <AvatarFallback>RR</AvatarFallback>
          </Avatar>
          <span className="font-bold tracking-wider">RICHARD RODRIGUES</span>
        </div>

        <nav className="hidden lg:flex items-center gap-3">
          <Button variant="ghost" asChild>
            <Link href="/">HOME</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/#about">ABOUT</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/#projects">PROJECTS</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/#contact">CONTACT</Link>
          </Button>
        </nav>

        <NavMenuSheet />
      </div>
    </header>
  )
}

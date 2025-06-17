import { Code } from 'lucide-react'
import { ThemeSwitcher } from './theme-switcher'
import { Button } from './ui/button'
import { NavLink } from './nav-link'
import { Separator } from './ui/separator'

const navLinks = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/projects',
    label: 'Projects',
  },
  {
    href: '/contact',
    label: 'Contact',
  },
]

export function Header() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="size-7 rounded-full bg-gradient-to-br from-sky-500 to-violet-500 flex items-center justify-center">
          <Code className="size-4" />
        </div>
        <span className="font-medium">Hi, there!</span>
      </div>

      <div className="flex items-center gap-4">
        <nav className="flex items-center gap-4">
          {navLinks.map((link) => (
            <Button
              key={link.label}
              size="sm"
              variant="ghost"
              className="data-[current=true]:text-sky-500 data-[current=true]:font-semibold data-[current=false]:font-normal"
              asChild
            >
              <NavLink href={link.href}>{link.label}</NavLink>
            </Button>
          ))}
        </nav>

        <Separator orientation="vertical" className="!h-4" />

        <ThemeSwitcher />
      </div>
    </header>
  )
}

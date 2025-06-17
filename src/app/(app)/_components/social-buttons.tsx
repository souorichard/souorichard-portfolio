import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Github, Instagram, Linkedin } from 'lucide-react'

const socialLinks = [
  {
    href: 'https://github.com/souorichard',
    icon: Github,
    label: 'GitHub',
  },
  {
    href: 'https://linkedin.com/in/richdrodrigues',
    icon: Linkedin,
    label: 'LinkedIn',
  },
  {
    href: 'https://instagram.com/souorichard_',
    icon: Instagram,
    label: 'Instagram',
  },
]

export function SocialButtons() {
  return (
    <div className="flex items-center gap-3">
      {socialLinks.map((link) => (
        <Button
          key={link.label}
          size="icon"
          variant="ghost"
          className="rounded-full"
          asChild
        >
          <Link href={link.href} target="_blank">
            <link.icon className="size-4" />
            <span className="sr-only">{link.label}</span>
          </Link>
        </Button>
      ))}
    </div>
  )
}

import { SocialButtons } from '@/components/social-butons'
import { Button } from '@/components/ui/button'
import { ArrowDown, Dot } from 'lucide-react'
import Link from 'next/link'

export function HomeSection() {
  return (
    <section className="relative h-screen mx-auto px-5 py-20 flex justify-center items-center bg-[url(/hero.jpg)] bg-cover">
      <div className="w-full max-w-[1200px] flex flex-col justify-center items-center gap-7">
        <h1 className="text-[2.5rem] font-bold tracking-widest">
          HEY, I'M RICHARD RODRIGUES
        </h1>

        <p className="text-lg text-muted-foreground text-center text-pretty">
          Full Stack Developer focused on building clean, scalable, and
          high-performance web applications. I work across the entire stack —
          from intuitive, responsive user interfaces to secure and efficient
          APIs. I'm passionate about writing clean code, learning new
          technologies, and delivering real solutions that make a difference.
        </p>

        <div className="flex items-center gap-3">
          <Button size="lg" asChild>
            <Link href="#projects">
              PROJECTS
              <ArrowDown className="size-4 animate-up-down" />
            </Link>
          </Button>
          <Button size="lg" variant="link" asChild>
            <a href="#" download>
              Download CV
            </a>
          </Button>
        </div>

        <SocialButtons />
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-6 h-10 flex justify-center items-center rounded-full border border-foreground">
        <Dot className="animate-scroll-up" />
      </div>
    </section>
  )
}

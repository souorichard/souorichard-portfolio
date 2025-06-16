import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative h-[500px] p-10 flex flex-col justify-end rounded-lg overflow-hidden border">
        <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-black/40" />

        <div className="relative z-10 space-y-5">
          <h1 className="text-3xl font-bold tracking-wide">
            I'm Richard Rodrigues
          </h1>

          <p className="max-w-2xl font-light text-pretty">
            I'm a software engineer with a passion for building web applications
            that are both functional and aesthetically pleasing.
          </p>

          <Button className="w-fit gap-2">
            See more about me
            <ArrowRight className="size-4" />
          </Button>
        </div>
      </section>
    </main>
  )
}

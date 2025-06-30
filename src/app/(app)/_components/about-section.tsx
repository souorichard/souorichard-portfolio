import {
  Section,
  SectionContent,
  SectionDescription,
  SectionHeader,
  SectionTitle,
} from '@/components/section'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'

const skills = [
  {
    id: 1,
    name: 'HTML',
  },
  {
    id: 2,
    name: 'CSS',
  },
  {
    id: 3,
    name: 'JAVASCRIPT',
  },
  {
    id: 4,
    name: 'TYPESCRIPT',
  },
  {
    id: 5,
    name: 'REACT',
  },
  {
    id: 6,
    name: 'SAAS',
  },
  {
    id: 7,
    name: 'NODE',
  },
  {
    id: 8,
    name: 'FASTIFY',
  },
  {
    id: 9,
    name: 'EXPRESS',
  },
  {
    id: 10,
    name: 'JAVA',
  },
  {
    id: 11,
    name: 'SPRING BOOT',
  },
  {
    id: 12,
    name: 'GIT',
  },
  {
    id: 13,
    name: 'GITHUB',
  },
]

export function AboutSection() {
  return (
    <Section id="about">
      <SectionContent>
        <SectionHeader>
          <SectionTitle>ABOUT ME</SectionTitle>
          <Separator className="!w-7 !h-1 bg-primary rounded-full" />
          <SectionDescription>
            Here you will find more information about me, what I do, and my
            current skills mostly in terms of programming and technology
          </SectionDescription>
        </SectionHeader>

        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div className="space-y-7">
            <h5 className="text-lg lg:text-xl font-semibold">
              Get to know me!
            </h5>
            <p className="text-sm text-muted-foreground text-pretty">
              I'm a{' '}
              <span className="text-foreground/80">
                Full-Stack Web Developer
              </span>{' '}
              passionate about building scalable and performant applications,
              from designing robust APIs to creating seamless and responsive
              user interfaces. Check out some of my recent work in the{' '}
              <span className="text-foreground/80">Projects</span> section.{' '}
              <br />
              <br /> I enjoy sharing what I learn about backend and frontend
              technologies, including frameworks, tools, and good practices that
              help improve developer workflows. I'm active on platforms like{' '}
              <span className="text-foreground/80">Linkedin</span> and{' '}
              <span className="text-foreground/80">Instagram</span>, where I
              post content related to{' '}
              <span className="text-foreground/80">Web Development</span>,{' '}
              <span className="text-foreground/80">APIs</span> and{' '}
              <span className="text-foreground/80">Software Engineering</span>.{' '}
              <br />
              <br /> I'm open to opportunities where I can apply my skills, grow
              alongside a team, and contribute to building meaningful digital
              experiences. If you are looking for someone who's comfortable on
              both sides of the stack, feel free to reach out and{' '}
              <span className="font-medium">contact</span> me.
            </p>
            <Button asChild>
              <Link href="/#contact">CONTACT ME</Link>
            </Button>
          </div>
          <div className="space-y-7">
            <h5 className="text-xl font-semibold">My skills</h5>
            <div className="flex flex-wrap items-center gap-4">
              {skills.map((skill) => {
                return (
                  <div
                    key={skill.id}
                    className="px-7 py-3 flex justify-center items-center bg-secondary/60 rounded-md"
                  >
                    <span className="text-sm font-medium text-primary">
                      {skill.name}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </SectionContent>
    </Section>
  )
}

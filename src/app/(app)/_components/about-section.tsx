import {
  Section,
  SectionContent,
  SectionDescription,
  SectionHeader,
  SectionTitle,
} from '@/components/section'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

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

        <div className="w-full grid grid-cols-2 gap-20">
          <div className="space-y-7">
            <h5 className="text-xl font-semibold">Get to know me!</h5>
            <p className="text-sm font-light text-muted-foreground text-pretty">
              I'm a{' '}
              <span className="font-medium">
                Frontend Focused Web Developer
              </span>{' '}
              building and managing the Front-end of Websites and Web
              Applications that leads to the success of the overall product.
              Check out some of my work in the{' '}
              <span className="font-medium">Projects</span> section. <br />
              <br /> I also like sharing content related to the stuff that I
              have learned over the years in Web Development so it can help
              other people of the Dev Community. Feel free to Connect or Follow
              me on my Linkedin and Instagram where I post useful content
              related to <span className="font-medium">
                Web Development
              </span>{' '}
              and Programming. <br />
              <br /> I'm open to <span className="font-medium">Web</span>{' '}
              opportunities where I can contribute, learn and grow. If you have
              a good opportunity that matches my skills and experience then
              don't hesitate to <span className="font-medium">contact</span> me.
            </p>
            <Button>CONTACT ME</Button>
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

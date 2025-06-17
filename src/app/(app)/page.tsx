import { Button } from '@/components/ui/button'
import { ArrowRight, Download } from 'lucide-react'
import { SocialButtons } from './_components/social-buttons'
import Link from 'next/link'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const workExperience = [
  {
    id: 1,
    title: 'UX/UI Designer',
    company: 'Support - Sistemas de Gestão',
    date: '2023 - 2024',
    description:
      'Creating intuitive and engaging user experiences through thoughtful design and user-centered approaches. Specializing in wireframing, prototyping, and visual design while ensuring accessibility and usability.',
  },
  {
    id: 2,
    title: 'Administrative Assistant',
    company: 'Commander Service Terceirização',
    date: '2024 - Current',
    description:
      'Assisting with administrative tasks and supporting the team with various administrative duties.',
  },
]

const education = [
  {
    id: 1,
    title: 'System Development',
    company: 'Etec - Lençóis Paulista',
    date: '2020 - 2023',
    description: 'System development course with a focus on practical skills.',
  },
  {
    id: 2,
    title: 'Computer Science',
    company: 'University of the Sacred Heart',
    date: '2024 - 2028',
    description:
      'Studying computer science and developing skills in programming, algorithms, and software development.',
  },
]

export default function Home() {
  const orderedWorkExperience = workExperience.sort((a, b) => {
    return b.id - a.id
  })

  const orderedEducation = education.sort((a, b) => {
    return b.id - a.id
  })

  return (
    <main className="space-y-24 md:space-y-32">
      {/* Hero */}
      <section
        id="hero"
        className="relative h-[500px] p-10 flex flex-col justify-end rounded-lg overflow-hidden border"
      >
        <div className="absolute inset-0 bg-[url('/hero-bg.jpg')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-black/40" />

        <div className="relative z-10 space-y-4">
          <h1 className="text-3xl font-bold tracking-wide">
            I'm Richard Rodrigues
          </h1>

          <p className="max-w-2xl font-light text-muted-foreground text-pretty">
            I'm a software engineer with a passion for building web applications
            that are both functional and aesthetically pleasing.{' '}
            <span className="text-sm font-normal">
              Based in Lençóis Paulista, SP
            </span>
          </p>

          <div className="flex items-center gap-2">
            <Button className="w-fit gap-2" asChild>
              <Link href="/contact">
                Contact me
                <ArrowRight className="size-4" />
              </Link>
            </Button>

            <Button variant="outline" className="w-fit gap-2" asChild>
              <Link href="/resume.docx" download>
                Download CV
                <Download className="size-4" />
              </Link>
            </Button>
          </div>

          <SocialButtons />
        </div>
      </section>

      {/* About */}
      <section id="about" className="flex flex-col items-center space-y-5">
        <h2 className="text-3xl font-bold">About me</h2>

        <p className="max-w-4xl font-light text-muted-foreground text-pretty text-center">
          I work mainly with Java, Node.js, and React, combining solid back-end
          logic with responsive and user-friendly interfaces. I enjoy building
          complete solutions that solve real problems and provide great user
          experiences. I'm always learning and evolving, following best
          practices and staying up-to-date with the latest technologies. I'm
          currently focused on growing as a developer and contributing to
          impactful projects. Let's build something great together.
        </p>
      </section>

      {/* Work Experience */}
      <section
        id="work-experience"
        className="space-y-5 flex flex-col items-center"
      >
        <h2 className="text-3xl font-bold">Work Experience</h2>

        <div className="w-full grid gap-5">
          {orderedWorkExperience.map((experience) => {
            return (
              <Card key={experience.id}>
                <CardHeader className="flex flex-row items-start justify-between gap-3">
                  <div className="space-y-1.5">
                    <CardTitle>{experience.title}</CardTitle>
                    <CardDescription>{experience.company}</CardDescription>
                  </div>

                  <Badge>{experience.date}</Badge>
                </CardHeader>
                <CardContent>
                  <p>{experience.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Education */}
      <section id="education" className="space-y-5 flex flex-col items-center">
        <h2 className="text-3xl font-bold">Education</h2>

        <div className="w-full grid gap-5">
          {orderedEducation.map((education) => {
            return (
              <Card key={education.id}>
                <CardHeader className="flex flex-row items-start justify-between gap-3">
                  <div className="space-y-1.5">
                    <CardTitle>{education.title}</CardTitle>
                    <CardDescription>{education.company}</CardDescription>
                  </div>

                  <Badge>{education.date}</Badge>
                </CardHeader>
                <CardContent>
                  <p>{education.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>
    </main>
  )
}

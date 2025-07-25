import {
  Section,
  SectionContent,
  SectionDescription,
  SectionHeader,
  SectionTitle,
} from '@/components/section'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { getRepositories } from '@/http/get-repositories'
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

const pinnedRepositories = [
  {
    name: 'github-finder',
    image: '/projects/github-finder.png',
  },
  {
    name: 'short-links-api',
    image: '/projects/short-links-api.png',
  },
  {
    name: 'tailwind-spotify',
    image: '/projects/tailwind-spotify.png',
  },
  {
    name: 'cash-io-web',
    image: '/projects/cash-io-web.png',
  },
]

export async function ProjectsSection() {
  const response = await getRepositories()

  const filteredRepositories = response.filter((repo) =>
    pinnedRepositories.some((pinned) => pinned.name === repo.name),
  )

  const repositories = filteredRepositories.map((repo) => {
    // const pinned = pinnedRepositories.find((item) => item.name === repo.name)

    return {
      id: repo.id,
      name: repo.name,
      description: repo.description,
      url: repo.html_url,
      image: `https://og-image.vercel.app/${encodeURIComponent(repo.name)}.png`, // fallback
    }
  })

  return (
    <Section id="projects">
      <SectionContent>
        <SectionHeader>
          <SectionTitle>PROJECTS</SectionTitle>
          <Separator className="!w-7 !h-1 bg-primary rounded-full" />
          <SectionDescription>
            Take a look at some personal projects where I’ve put my ideas into
            practice, exploring different stacks and solving real problems
            through code.
          </SectionDescription>
        </SectionHeader>

        <div className="w-full grid grid-col-1 md:grid-cols-2 gap-20">
          {repositories.map((repository) => {
            return (
              <div
                key={repository.id}
                className="flex flex-col lg:flex-row lg:items-center gap-7"
              >
                <Image
                  src={repository.image}
                  width={500}
                  height={200}
                  className="w-full lg:w-1/2 h-auto bg-secondary rounded-md object-cover"
                  alt={repository.name}
                />
                <div className="lg:w-1/2 space-y-4">
                  <h6 className="font-semibold">{repository.name}</h6>
                  <p className="text-xs text-muted-foreground text-pretty">
                    {repository.description || 'No description'}
                  </p>
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full lg:w-fit"
                    asChild
                  >
                    <a href={repository.url} target="_blank">
                      View details
                      <ArrowUpRight className="size-4" />
                    </a>
                  </Button>
                </div>
              </div>
            )
          })}
        </div>
      </SectionContent>
    </Section>
  )
}

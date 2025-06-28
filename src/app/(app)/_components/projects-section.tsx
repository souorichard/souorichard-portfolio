import {
  Section,
  SectionContent,
  SectionDescription,
  SectionHeader,
  SectionTitle,
} from '@/components/section'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'

export function ProjectsSection() {
  return (
    <Section id="projects">
      <SectionContent>
        <SectionHeader>
          <SectionTitle>PROJECTS</SectionTitle>
          <Separator className="!w-7 !h-1 bg-primary rounded-full" />
          <SectionDescription>
            Here you will find some of the personal and clients projects that I
            created with each project containing its own case study
          </SectionDescription>
        </SectionHeader>

        <div className="w-full grid grid-cols-2 gap-20">
          {Array.from({ length: 4 }).map((_, index) => {
            return (
              <div key={index} className="flex items-center gap-7">
                <div className="w-1/2 h-50 bg-secondary rounded-md" />
                <div className="w-1/2 space-y-4">
                  <h6 className="font-semibold">Project name</h6>
                  <p className="text-xs text-muted-foreground text-pretty">
                    Dopefolio is a successful Open-Source project that I created
                    which have been featured on some of the biggest tech sites
                    like CSS-Tricks, Hostinger, etc & used by thousands of
                    developers globally
                  </p>
                  <Button size="sm" variant="outline" asChild>
                    <Link href="#">
                      View details
                      <ArrowUpRight className="size-4" />
                    </Link>
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

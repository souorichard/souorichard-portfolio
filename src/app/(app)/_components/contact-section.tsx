import {
  Section,
  SectionContent,
  SectionDescription,
  SectionHeader,
  SectionTitle,
} from '@/components/section'
import { Separator } from '@/components/ui/separator'
import { ContactForm } from './contact-form'

export async function ContactSection() {
  return (
    <Section id="contact" className="bg-[url(/hero.jpg)] bg-cover">
      <SectionContent>
        <SectionHeader>
          <SectionTitle>CONTACT ME</SectionTitle>
          <Separator className="!w-7 !h-1 bg-primary rounded-full" />
          <SectionDescription>
            Feel free to Contact me by submitting the form below and I will get
            back to you as soon as possible
          </SectionDescription>
        </SectionHeader>

        <ContactForm />
      </SectionContent>
    </Section>
  )
}

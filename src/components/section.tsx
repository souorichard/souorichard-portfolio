import { ComponentProps, PropsWithChildren, ReactNode } from 'react'

interface SectionProps extends ComponentProps<'section'> {
  children: ReactNode
}

export function Section({ children, ...props }: SectionProps) {
  return (
    <section className="px-5 py-20" {...props}>
      {children}
    </section>
  )
}

export function SectionContent({ children }: PropsWithChildren) {
  return (
    <div className="w-full max-w-[1200px] mx-auto flex flex-col justify-center items-center gap-10">
      {children}
    </div>
  )
}

export function SectionHeader({ children }: PropsWithChildren) {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-4">
      {children}
    </div>
  )
}

export function SectionTitle({ children }: PropsWithChildren) {
  return <h3 className="text-2xl font-bold text-center">{children}</h3>
}

export function SectionDescription({ children }: PropsWithChildren) {
  return (
    <span className="w-full max-w-xl text-muted-foreground text-center text-pretty">
      {children}
    </span>
  )
}

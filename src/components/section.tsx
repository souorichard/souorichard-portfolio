import { cn } from '@/lib/utils'
import { ComponentProps, PropsWithChildren, ReactNode } from 'react'

interface SectionProps extends ComponentProps<'section'> {
  children: ReactNode
}

export function Section({ children, className, ...props }: SectionProps) {
  return (
    <section className={cn('px-10 py-20', className)} {...props}>
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
  return (
    <h3 className="text-xl lg:text-2xl font-bold text-center tracking-widest">
      {children}
    </h3>
  )
}

export function SectionDescription({ children }: PropsWithChildren) {
  return (
    <span className="w-full max-w-xl text-muted-foreground text-center text-pretty">
      {children}
    </span>
  )
}

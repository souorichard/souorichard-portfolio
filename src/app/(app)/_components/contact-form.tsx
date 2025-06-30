'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { zodResolver } from '@hookform/resolvers/zod'
import { Loader2 } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { z } from 'zod'

const contactFormSchema = z.object({
  name: z.string().min(3, 'Name must be at least 3 characters long'),
  email: z
    .string()
    .email('Please, enter a valid e-mail')
    .min(1, 'E-mail is required'),
  message: z.string().min(10, 'Message must be at least 10 characters long'),
})

type ContactFormData = z.infer<typeof contactFormSchema>

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  })

  async function handleSendMessage({ name, message }: ContactFormData) {
    await new Promise((resolve) => setTimeout(resolve, 2000))

    const subject = `Contato de ${name}`

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=rodrigues.lpta@gmail.com&su=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(message)}`

    const mailtoUrl = `mailto:rodrigues.lpta@gmail.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(message)}`

    toast('Opening yout e-mail provider...')

    try {
      const win = window.open(gmailUrl, '_blank')

      // fallback se o navegador bloqueou o popup ou o Gmail não abriu
      setTimeout(() => {
        if (!win || win.closed || typeof win.closed === 'undefined') {
          window.location.href = mailtoUrl
        }
      }, 1500)
    } catch {
      // fallback imediato em caso de erro
      window.location.href = mailtoUrl
    }

    reset()
  }

  return (
    <div className="w-full lg:w-2/3 p-8 lg:p-10 bg-background border rounded-xl">
      <form
        onSubmit={handleSubmit(handleSendMessage)}
        className="w-full grid grid-cols-1 lg:grid-cols-2 gap-4"
      >
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            type="text"
            placeholder="Enter your name"
            {...register('name')}
          />
          {errors.name && (
            <span className="text-xs lg:text-sm text-destructive">
              {errors.name.message}
            </span>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">E-mail</Label>
          <Input
            id="email"
            type="text"
            placeholder="Enter your e-mail"
            {...register('email')}
          />
          {errors.email && (
            <span className="text-xs lg:text-sm text-destructive">
              {errors.email.message}
            </span>
          )}
        </div>
        <div className="space-y-2 lg:col-span-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            placeholder="Enter your message"
            className="min-h-24"
            {...register('message')}
          />
          {errors.message && (
            <span className="text-xs lg:text-sm text-destructive">
              {errors.message.message}
            </span>
          )}
        </div>

        <Button type="submit" className="lg:col-span-2" disabled={isSubmitting}>
          {isSubmitting ? (
            <Loader2 className="size-4 animate-spin" />
          ) : (
            'Send message'
          )}
        </Button>
      </form>
    </div>
  )
}

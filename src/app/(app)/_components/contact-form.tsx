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

  async function handleSendMessage({ name, email, message }: ContactFormData) {
    await new Promise((resolve) => setTimeout(resolve, 2000))

    console.log({ name, email, message })

    toast.success('Message sent successfully!')

    reset()
  }

  return (
    <form
      onSubmit={handleSubmit(handleSendMessage)}
      className="grid grid-cols-2 gap-4"
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
          <span className="text-sm text-destructive">
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
          <span className="text-sm text-destructive">
            {errors.email.message}
          </span>
        )}
      </div>
      <div className="space-y-2 col-span-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          placeholder="Enter your message"
          className="min-h-24"
          {...register('message')}
        />
        {errors.message && (
          <span className="text-sm text-destructive">
            {errors.message.message}
          </span>
        )}
      </div>

      <Button type="submit" className="col-span-2" disabled={isSubmitting}>
        {isSubmitting ? (
          <Loader2 className="size-4 animate-spin" />
        ) : (
          'Send message'
        )}
      </Button>
    </form>
  )
}

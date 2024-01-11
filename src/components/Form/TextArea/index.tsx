import { ComponentProps } from 'react'

export type FormTextAreaProps = ComponentProps<'textarea'>

export default function FormTextArea(props: FormTextAreaProps) {
  return (
    <textarea
      {...props}
      className="min-h-formTextArea w-full resize-y rounded-lg border border-zinc-300 px-3 py-2 shadow-sm outline-none focus:border-violet-300 focus:ring-4 focus:ring-violet-100"
    />
  )
}

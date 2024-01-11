import React, { ComponentProps, ReactNode } from 'react'

export type FormLabelProps = ComponentProps<'label'> & {
  title: string
  children?: ReactNode
}

export default function FormLabel({
  title,
  children,
  ...props
}: FormLabelProps) {
  return (
    <label {...props} className="text-sm font-medium text-zinc-700">
      {title}
      {children || null}
    </label>
  )
}

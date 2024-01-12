import React, { ComponentProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

export type FormLabelProps = ComponentProps<'label'> & {
  title: string
  children?: ReactNode
}

export default function FormLabel({
  title,
  children,
  className,
  ...props
}: FormLabelProps) {
  return (
    <label
      {...props}
      className={twMerge('text-sm font-medium text-zinc-700', className)}
    >
      {title}
      {children || null}
    </label>
  )
}

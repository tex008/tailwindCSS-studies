'use client'

import { ChangeEvent, ComponentProps } from 'react'
import { useFileInput } from './root'

export type ControlProps = ComponentProps<'input'>

export default function Control({ multiple = false, ...props }: ControlProps) {
  const { id, onFileSelected } = useFileInput()

  function handleFilesSelected(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files?.length) return

    const files = Array.from(event.target.files)

    onFileSelected(files, multiple)
  }

  return (
    <input
      type="file"
      className="sr-only"
      id={id}
      multiple={multiple}
      {...props}
      onChange={handleFilesSelected}
    />
  )
}

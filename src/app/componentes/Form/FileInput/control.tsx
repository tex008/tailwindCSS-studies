'use client'

import { ChangeEvent, ComponentProps } from 'react'
import { useFileInput } from './root'

export type ControlProps = ComponentProps<'input'>

export default function Control(props: ControlProps) {
  const { id, onFileSelected } = useFileInput()

  function handleFilesSelected(event: ChangeEvent<HTMLInputElement>) {
    if (!event.target.files?.length) return

    const files = Array.from(event.target.files)

    onFileSelected(files)
  }

  return (
    <input
      type="file"
      className="sr-only"
      id={id}
      {...props}
      onChange={handleFilesSelected}
    />
  )
}

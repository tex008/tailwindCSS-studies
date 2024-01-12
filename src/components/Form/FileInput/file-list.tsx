'use client'

import { useAutoAnimate } from '@formkit/auto-animate/react'
import FileItem from './file-item'
import { useFileInput } from './root'

export default function FileList() {
  const { files } = useFileInput()
  const [parent] = useAutoAnimate({})

  return (
    <div ref={parent} className="mt-4 space-y-3">
      {files.map((file) => (
        <FileItem
          key={file.name}
          name={file.name}
          size={file.size}
          state="progress"
        />
      ))}
    </div>
  )
}

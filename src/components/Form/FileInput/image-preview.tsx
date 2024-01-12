'use client'

import { User } from 'lucide-react'
import Image from 'next/image'
import { useMemo } from 'react'
import { useFileInput } from './root'

export default function ImagePreview() {
  const { files } = useFileInput()

  const previewURL = useMemo(() => {
    return files.length === 0 ? null : URL.createObjectURL(files[0])
  }, [files])

  return previewURL === null ? (
    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-50 dark:bg-violet-500/10">
      <User className="h-8 w-8 text-violet-500 dark:text-violet-300" />
    </div>
  ) : (
    <Image
      width={24}
      height={24}
      src={previewURL}
      alt="avatar profile image"
      className=" h-16 w-16 rounded-full object-cover"
    />
  )
}

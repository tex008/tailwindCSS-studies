'use client'

import * as Select from '@radix-ui/react-select'
import { ChevronDown } from 'lucide-react'
import { ReactNode } from 'react'

export interface SelectProps {
  children: ReactNode
  placeholder: string
}

export default function FormSelect({ children, placeholder }: SelectProps) {
  return (
    <Select.Root>
      <Select.Trigger className="border-zin-300 flex h-11 w-full items-center justify-between gap-2 rounded-lg border px-3 py-2 shadow-sm data-[placeholder]:text-zinc-600">
        <Select.Value placeholder={placeholder} className="text-black" />
        <Select.Icon>
          <ChevronDown className="h-5 w-5 text-zinc-500" />
        </Select.Icon>
      </Select.Trigger>

      <Select.Portal>
        <Select.Content
          side="bottom"
          position="popper"
          sideOffset={8}
          className="z-10 w-[--radix-select-trigger-width] overflow-hidden rounded-lg border border-zinc-200 bg-white"
        >
          <Select.Viewport className="outline-none">{children}</Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}

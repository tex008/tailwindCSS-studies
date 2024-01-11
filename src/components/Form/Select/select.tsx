'use client'

import * as Select from '@radix-ui/react-select'
import { Check, ChevronDown } from 'lucide-react'

export default function FormSelect() {
  return (
    <Select.Root>
      <Select.Trigger className="border-zin-300 flex h-11 w-full items-center justify-between gap-2 rounded-lg border px-3 py-2 shadow-sm data-[placeholder]:text-zinc-600">
        <Select.Value
          placeholder="Select a country..."
          className="text-black"
        />
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
          <Select.Viewport>
            <Select.Item
              value="br"
              className="flex items-center justify-between gap-2 px-3 py-2.5 outline-none data-[highlighted]:bg-zinc-50"
            >
              <Select.ItemText className="text-black">Brazil</Select.ItemText>

              <Select.ItemIndicator>
                <Check className="h-4 w-4 text-violet-500" />
              </Select.ItemIndicator>
            </Select.Item>

            <Select.Item
              value="us"
              className="flex items-center justify-between gap-2 px-3 py-2.5 outline-none data-[highlighted]:bg-zinc-50"
            >
              <Select.ItemText className="text-black">
                United States
              </Select.ItemText>

              <Select.ItemIndicator>
                <Check className="h-4 w-4 text-violet-500" />
              </Select.ItemIndicator>
            </Select.Item>
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}

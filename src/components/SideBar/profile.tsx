import { LogOut } from 'lucide-react'
import Image from 'next/image'
import { Button } from '../button'

export default function Profile() {
  return (
    <div className="grid grid-cols-profile items-center gap-3">
      <Image
        alt="User profile Photo"
        className="h-10 w-10 rounded-full"
        width={24}
        height={24}
        src="https://github.com/tex008.png"
      />
      <div className="flex flex-1 flex-col truncate">
        <span className=" text-sm font-semibold text-zinc-700">
          Vinicius Teixeira
        </span>
        <span className="truncate text-sm text-zinc-500">
          vinicius.teixeira.f@gmail.com
        </span>
      </div>
      <Button type="button" variant="ghost">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </Button>
    </div>
  )
}

'use client'

import * as Collapsible from '@radix-ui/react-collapsible'
import { Cog, LifeBuoy, Menu, Search } from 'lucide-react'
import * as Input from '../Form/input'
import { Button } from '../button'
import MainNavigation from './MainNavigation'
import NavItem from './MainNavigation/navItem'
import Logo from './logo'
import Profile from './profile'
import UsedSpaceWidget from './usedSpaceWidget'

export default function SideBar() {
  return (
    <Collapsible.Root className="fixed left-0 right-0 top-0 z-20 flex flex-col gap-6  border-b  border-zinc-300 bg-white   p-4 pb-12 data-[state=open]:bottom-0 data-[state=open]:h-screen lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-8 lg:data-[state=closed]:bottom-0">
      <div className="flex items-center justify-between lg:data-[state=closed]:h-screen">
        <Logo />
        <Collapsible.Trigger asChild className="lg:hidden">
          <Button variant="ghost">
            <Menu className="h-6 w-6" />
          </Button>
        </Collapsible.Trigger>
      </div>

      <Collapsible.Content
        forceMount
        className="flex flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex"
      >
        <Input.Root>
          <Input.Prefix>
            <Search className="h5- w-5 text-zinc-500" />
          </Input.Prefix>
          <Input.Control placeholder="Search" />
        </Input.Root>

        <nav className="space-y-0.5">
          <MainNavigation />
        </nav>

        <div className="mt-auto flex flex-col gap-6">
          <nav className="space-y-0.5">
            <NavItem title="Support" icon={LifeBuoy} />
            <NavItem title="Settings" icon={Cog} />
          </nav>

          <UsedSpaceWidget />

          <div className="h-px bg-zinc-200"></div>
          <Profile />
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}

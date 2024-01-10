import { Cog, LifeBuoy, Search } from 'lucide-react'
import * as Input from '../Form/input'
import MainNavigation from './MainNavigation'
import NavItem from './MainNavigation/navItem'
import Logo from './logo'
import Profile from './profile'
import UsedSpaceWidget from './usedSpaceWidget'

export default function SideBar() {
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-300  px-5 py-8 pb-12">
      <Logo />

      <Input.Root>
        <Input.Prefix>
          <Search className="h5- w-5 text-zinc-500" />
        </Input.Prefix>
        <Input.Control placeholder="Search" />
      </Input.Root>

      <MainNavigation />

      <div className="mt-auto flex flex-col gap-6">
        <nav className="space-y-0.5">
          <NavItem title="Support" icon={LifeBuoy} />
          <NavItem title="Settings" icon={Cog} />
        </nav>

        <UsedSpaceWidget />

        <div className="h-px bg-zinc-200"></div>
        <Profile />
      </div>
    </aside>
  )
}

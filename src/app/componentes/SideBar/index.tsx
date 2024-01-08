import { Cog, LifeBuoy, Search } from 'lucide-react'
import MainNavigation from './MainNavigation'
import NavItem from './MainNavigation/navItem'
import Logo from './logo'
import Profile from './profile'
import UsedSpaceWidget from './usedSpaceWidget'

export default function SideBar() {
  return (
    <aside className="flex flex-col gap-6 border-r border-zinc-300  px-5 py-8 pb-12">
      <Logo />

      <div className="mx-1 flex w-full items-center gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm ">
        <Search className="h-5 w-5 text-zinc-500" />
        <input
          className=" flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600"
          placeholder="Search"
        />
      </div>

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

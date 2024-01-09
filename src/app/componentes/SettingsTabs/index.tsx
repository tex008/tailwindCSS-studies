'use client'

import * as Tabs from '@radix-ui/react-tabs'
import { useState } from 'react'
import TabItem from './tabItem'

export default function SettingsTabs() {
  const [currentTab, setCurrentTab] = useState<string>('my-details')

  return (
    <Tabs.Root value={currentTab} onValueChange={setCurrentTab}>
      <Tabs.List className="mt-6 flex w-full items-center gap-4 border-b border-zinc-200">
        <TabItem
          title="My details"
          value="my-details"
          isSelected={currentTab === 'my-details'}
        />
        <TabItem
          title="Profile"
          value="profile"
          isSelected={currentTab === 'profile'}
        />
        <TabItem
          title="Password"
          value="password"
          isSelected={currentTab === 'password'}
        />
        <TabItem title="Team" value="team" isSelected={currentTab === 'team'} />
        <TabItem title="Plan" value="plan" isSelected={currentTab === 'plan'} />
        <TabItem
          title="Biling"
          value="biling"
          isSelected={currentTab === 'biling'}
        />
        <TabItem
          title="Email"
          value="email"
          isSelected={currentTab === 'email'}
        />
        <TabItem
          title="Notifications"
          value="notifications"
          isSelected={currentTab === 'notifications'}
        />
        <TabItem
          title="Integrations"
          value="integrations"
          isSelected={currentTab === 'integrations'}
        />
        <TabItem title="API" value="api" isSelected={currentTab === 'api'} />
      </Tabs.List>
    </Tabs.Root>
  )
}

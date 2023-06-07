import React from 'react'
import Item from './MenuItem'
import * as Icons from 'iconsax-react'
import { SidebarItems } from '@/types'
import SupportItem from './SupportItem'

// TODO: make the an AIP call
const menuItems: SidebarItems = [
  {
    name: 'Dashboard',
    icon: <Icons.Home2 size={17} />,
    href: '/',
    disabled: false,
  },
  {
    name: 'Instances',
    href: '/instances',
    icon: <Icons.AddSquare size={17} />,
    disabled: false,
  },
  {
    name: 'Snapshots',
    href: '/snapshots',
    icon: <Icons.Copy size={17} />,
    disabled: false,
  },
  {
    name: 'SSH Keys',
    icon: <Icons.Key size={17} />,
    href: '/ssh-keys',
    disabled: false,
  },
  {
    name: 'Volume',
    icon: <Icons.DirectboxDefault size={17} />,
    href: '/volume',
    disabled: true,
  },
]

// TODO: make the an AIP call
const controlItems: SidebarItems = [
  {
    disabled: false,
    href: '/networking',
    name: 'Networking',
    icon: <Icons.Wifi size={17} />,
  },
  {
    disabled: false,
    href: '/report',
    name: 'Report',
    icon: <Icons.DocumentText size={17} />,
  },
]

const supportItems: SidebarItems = [
  {
    name: 'Billing',
    disabled: false,
    href: '/billing',
    icon: <Icons.DollarCircle size={17} />,
  },
  {
    name: 'Support',
    disabled: false,
    href: '/support',
    icon: <Icons.Messages2 size={17} />,
  },
  {
    name: 'Help',
    disabled: false,
    href: '/help',
    icon: <Icons.MessageQuestion size={17} />,
  },
]

const Sidebar = () => {
  return (
    <aside className='fixed flex h-full w-[248px] flex-col items-start justify-between overflow-auto  border-r border-gray-300 bg-white px-[30px] pb-5 pt-[75px] text-[#0D2D51] scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-200 scrollbar-thumb-rounded'>
      <div className='w-full'>
        <div className='border-b border-gray-300 pb-5 pt-7'>
          {menuItems.map(item => (
            <Item
              name={item.name}
              key={item.name}
              icon={item.icon}
              href={item.href}
              disabled={item.disabled}
            />
          ))}
        </div>
        <div className='pb-5 pt-5'>
          {controlItems.map(item => (
            <Item
              name={item.name}
              key={item.name}
              icon={item.icon}
              href={item.href}
              disabled={item.disabled}
            />
          ))}
        </div>
      </div>
      <div className='w-full'>
        {supportItems.map(item => (
          <SupportItem
            name={item.name}
            key={item.name}
            icon={item.icon}
            href={item.href}
            disabled={item.disabled}
          />
        ))}
      </div>
    </aside>
  )
}

export default Sidebar

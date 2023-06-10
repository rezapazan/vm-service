import React from 'react'
import Item from './MenuItem'
import * as Icons from 'iconsax-react'
import { SidebarItem, SidebarItems } from '@/types'
import SupportItem from './SupportItem'

const getMenuItems = async () => {
  const items = await fetch(
    'https://my-json-server.typicode.com/rezapazan/vm-service/sidebar'
  )
  return items.json()
}

// const controlItems: SidebarItems = [
//   {
//     disabled: false,
//     href: '/networking',
//     name: 'Networking',
//     icon: <Icons.Wifi size={17} />,
//   },
//   {
//     disabled: false,
//     href: '/report',
//     name: 'Report',
//     icon: <Icons.DocumentText size={17} />,
//   },
// ]

// const supportItems: SidebarItems = [
//   {
//     name: 'Billing',
//     disabled: false,
//     href: '/billing',
//     icon: <Icons.DollarCircle size={17} />,
//   },
//   {
//     name: 'Support',
//     disabled: false,
//     href: '/support',
//     icon: <Icons.Messages2 size={17} />,
//   },
//   {
//     name: 'Help',
//     disabled: false,
//     href: '/help',
//     icon: <Icons.MessageQuestion size={17} />,
//   },
// ]

const Sidebar = async () => {
  const menuItems: SidebarItem[] = await getMenuItems()

  return (
    <aside className='fixed flex h-full w-[248px] flex-col items-start justify-between overflow-auto  border-r-2 border-gray-sidebar-border bg-white px-[30px] pb-5 pt-[75px] text-blue-text scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-200 scrollbar-thumb-rounded'>
      <div className='w-full'>
        <div className='border-b border-gray-primary-border pb-5 pt-7'>
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
        {/* <div className='pb-5 pt-5'>
          {controlItems.map(item => (
            <Item
              name={item.name}
              key={item.name}
              icon={item.icon}
              href={item.href}
              disabled={item.disabled}
            />
          ))}
        </div> */}
      </div>
      {/* <div className='w-full'>
        {supportItems.map(item => (
          <SupportItem
            name={item.name}
            key={item.name}
            icon={item.icon}
            href={item.href}
            disabled={item.disabled}
          />
        ))}
      </div> */}
    </aside>
  )
}

export default Sidebar

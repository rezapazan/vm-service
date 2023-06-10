import React from 'react'
import Item from './MenuItem'
import { SidebarItems } from '@/types'
import SupportItem from './SupportItem'

const getMenuItems = async () => {
  const items = await fetch(
    'https://my-json-server.typicode.com/rezapazan/vm-service/sidebar/menu'
  )
  return items.json()
}

const getSupportItems = async () => {
  const items = await fetch(
    'https://my-json-server.typicode.com/rezapazan/vm-service/sidebar/support'
  )
  return items.json()
}

const getControlItems = async () => {
  const items = await fetch(
    'https://my-json-server.typicode.com/rezapazan/vm-service/sidebar/control'
  )
  return items.json()
}

const Sidebar = async () => {
  const menuItemsData = getMenuItems()
  const supportItemsData = getSupportItems()
  const controlItemsData = getControlItems()

  const [menuItems, supportItems, controlItems] = await Promise.all([
    menuItemsData,
    supportItemsData,
    controlItemsData,
  ])

  return (
    <aside className='fixed flex h-full w-[248px] flex-col items-start justify-between overflow-auto  border-r-2 border-gray-sidebar-border bg-white px-[30px] pb-5 pt-[75px] text-blue-text scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-200 scrollbar-thumb-rounded'>
      <div className='w-full'>
        <div className='border-b border-gray-primary-border pb-5 pt-7'>
          {(menuItems as SidebarItems).map(item => (
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
          {(controlItems as SidebarItems).map(item => (
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
        {(supportItems as SidebarItems).map(item => (
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

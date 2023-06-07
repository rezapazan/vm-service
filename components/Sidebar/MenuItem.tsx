import { SidebarItem } from '@/types'
import Link from 'next/link'
import React from 'react'

const Item = ({ name, icon, href, disabled }: SidebarItem) =>
  disabled ? (
    <button
      disabled
      className={`flex h-10 w-full items-center rounded px-[22px] font-plex text-sm font-medium text-[#E3E4E6]`}
    >
      {icon}
      <span className='ml-3'>{name}</span>
    </button>
  ) : (
    <Link
      href={href}
      className={`flex h-10 w-full cursor-pointer items-center rounded px-[22px] font-plex text-sm font-medium text-[#0D2D51] hover:bg-[#2C5EFF] hover:text-white`}
    >
      {icon}
      <span className='ml-3'>{name}</span>
    </Link>
  )

export default Item

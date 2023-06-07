import { SidebarItem } from '@/types'
import Link from 'next/link'
import React from 'react'

const SupportItem = ({ name, icon, href }: SidebarItem) => {
  return (
    <Link
      href={href}
      className='mb-2 flex h-10 items-center rounded border border-[#E8E9EB] px-[22px] hover:bg-[#2C5EFF] hover:text-white'
    >
      {icon}
      <span className='ml-3'>{name}</span>
    </Link>
  )
}

export default SupportItem

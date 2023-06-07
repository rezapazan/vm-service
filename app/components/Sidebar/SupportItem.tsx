'use client'

import { useActiveLink } from '@/hooks'
import { SidebarItem } from '@/types'
import Link from 'next/link'

const SupportItem = ({ name, icon, href }: SidebarItem) => {
  const activeClassName = useActiveLink(href)

  return (
    <Link
      href={href}
      className={`${activeClassName} mb-2 flex h-10 items-center rounded border border-[#E8E9EB] px-[22px] hover:bg-[#2C5EFF] hover:text-white`}
    >
      {icon}
      <span className='ml-3'>{name}</span>
    </Link>
  )
}

export default SupportItem

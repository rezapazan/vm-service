'use client'

import { SidebarItem } from '@/types'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState, useTransition } from 'react'

const SupportItem = ({ name, icon, href }: SidebarItem) => {
  const pathname = usePathname()
  const [isPending, startTransition] = useTransition()
  const [activeClassName, setActiveClassName] = useState<string>('')

  useEffect(() => {
    pathname === href
      ? startTransition(() => {
          setActiveClassName('bg-[#2C5EFF] text-white')
        })
      : startTransition(() => {
          setActiveClassName('bg-transparent text-[#0D2D51]')
        })
  }, [href, pathname])

  return isPending ? (
    <button
      disabled
      className={`mb-1 flex h-10 w-full items-center rounded px-[22px] font-plex text-sm font-medium text-[#E3E4E6]`}
    >
      {icon}
      <span className='ml-3'>{name}</span>
    </button>
  ) : (
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

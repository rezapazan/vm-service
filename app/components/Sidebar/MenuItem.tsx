'use client'

// import { useActiveLink } from '@/hooks'
import { SidebarItem } from '@/types'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState, useTransition } from 'react'

const Item = ({ name, icon, href, disabled }: SidebarItem) => {
  // TODO: make this logic a hook?
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

  return disabled || isPending ? (
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
      className={`${activeClassName} mb-1 flex h-10 w-full cursor-pointer items-center rounded px-[22px] font-plex text-sm font-medium text-[#0D2D51] hover:bg-[#2C5EFF] hover:text-white`}
    >
      {icon}
      <span className='ml-3'>{name}</span>
    </Link>
  )
}
export default Item

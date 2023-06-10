'use client'

import { SidebarItem } from '@/types'
import { getIcon } from '@/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState, useTransition } from 'react'

const Item = ({ name, icon, href, disabled }: SidebarItem) => {
  // make this logic a hook?
  const pathname = usePathname()
  const [, startTransition] = useTransition()
  const [activeClassName, setActiveClassName] = useState<string>('')

  useEffect(() => {
    pathname === href
      ? startTransition(() => {
          setActiveClassName('bg-blue-primary text-white')
        })
      : startTransition(() => {
          setActiveClassName('bg-transparent text-blue-text')
        })
  }, [href, pathname])

  return disabled ? (
    <button
      disabled
      className={`mb-1 flex h-10 w-full items-center rounded px-[22px] font-plex text-sm font-medium text-gray-disabled`}
    >
      {getIcon(icon, 17)}
      <span className='ml-3'>{name}</span>
    </button>
  ) : (
    <Link
      href={href}
      className={`${activeClassName} mb-1 flex h-10 w-full cursor-pointer items-center rounded px-[22px] font-plex text-sm font-medium text-blue-text hover:bg-blue-primary hover:text-white`}
    >
      {getIcon(icon, 17)}
      <span className='ml-3'>{name}</span>
    </Link>
  )
}
export default Item

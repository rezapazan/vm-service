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
          setActiveClassName('bg-blue-primary text-white')
        })
      : startTransition(() => {
          setActiveClassName('bg-transparent text-blue-text')
        })
  }, [href, pathname])

  return isPending ? (
    <button
      disabled
      className={`mb-1 flex h-10 w-full items-center rounded px-[22px] font-plex text-sm font-medium text-gray-disabled`}
    >
      {icon}
      <span className='ml-3'>{name}</span>
    </button>
  ) : (
    <Link
      href={href}
      className={`${activeClassName} mb-2 flex h-10 items-center rounded border border-gray-button-border px-[22px] hover:bg-blue-primary hover:text-white`}
    >
      {icon}
      <span className='ml-3'>{name}</span>
    </Link>
  )
}

export default SupportItem

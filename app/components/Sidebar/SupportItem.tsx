'use client'

import { SidebarItem } from '@/types'
import { getIcon } from '@/utils'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState, useTransition } from 'react'

const SupportItem = ({ name, icon, href }: SidebarItem) => {
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

  return (
    <Link
      href={href}
      className={`${activeClassName} mb-2 flex h-10 items-center rounded border border-gray-button-border px-[22px] hover:bg-blue-primary hover:text-white`}
    >
      {getIcon(icon, 17)}
      <span className='ml-3'>{name}</span>
    </Link>
  )
}

export default SupportItem

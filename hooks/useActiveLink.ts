import { UseActiveLink } from '@/types'
import { usePathname } from 'next/navigation'
import { useEffect, useState, useTransition } from 'react'

// TODO: handle initial build bug
export const useActiveLink: UseActiveLink = href => {
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

  return [activeClassName, isPending]
}

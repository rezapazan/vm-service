import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

export const useActiveLink = (href: string) => {
  const pathname = usePathname()
  const [activeClassName, setActiveClassName] = useState<string>()

  useEffect(() => {
    pathname === href
      ? setActiveClassName('bg-[#2C5EFF] text-white')
      : setActiveClassName('bg-transparent text-[#0D2D51]')
  }, [href, pathname])

  return activeClassName
}

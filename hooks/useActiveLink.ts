import { usePathname } from 'next/navigation'

export const useActiveLink = (href: string): string => {
  const pathname = usePathname()

  return pathname === href ? 'bg-[#2C5EFF] text-white' : 'text-[#0D2D51]'
}

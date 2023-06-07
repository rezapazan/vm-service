import React from 'react'

export type SidebarItem = {
  icon: React.ReactNode
  name: string
  href: string
  disabled: boolean
}

export type SidebarItems = SidebarItem[]

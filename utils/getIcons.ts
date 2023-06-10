import { AddSquare, Copy, DirectboxDefault, Home2, Key } from 'iconsax-react'
import React from 'react'

const Components = {
  Home2: Home2,
  AddSquare: AddSquare,
  Copy: Copy,
  Key: Key,
  DirectboxDefault: DirectboxDefault,
}

export const getIcon = (icon: string, size: number) => {
  return React.createElement(Components[icon as keyof typeof Components], {
    size: size,
  })
}

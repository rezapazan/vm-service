import {
  AddSquare,
  Copy,
  DirectboxDefault,
  DocumentText,
  DollarCircle,
  Home2,
  Key,
  MessageQuestion,
  Messages2,
  Wifi,
} from 'iconsax-react'
import React from 'react'

const Components = {
  Home2: Home2,
  AddSquare: AddSquare,
  Copy: Copy,
  Key: Key,
  DirectboxDefault: DirectboxDefault,
  Wifi: Wifi,
  DocumentText: DocumentText,
  DollarCircle: DollarCircle,
  Messages2: Messages2,
  MessageQuestion: MessageQuestion,
}

export const getIcon = (icon: string, size: number) => {
  return React.createElement(Components[icon as keyof typeof Components], {
    size: size,
  })
}

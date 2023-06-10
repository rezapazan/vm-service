import * as Icons from 'iconsax-react'
import React from 'react'

const Components = {
  Home2: Icons.Home2,
  AddSquare: Icons.AddSquare,
  Copy: Icons.Copy,
  Key: Icons.Key,
  DirectboxDefault: Icons.DirectboxDefault,
  Wifi: Icons.Wifi,
  DocumentText: Icons.DocumentText,
  DollarCircle: Icons.DollarCircle,
  Messages2: Icons.Messages2,
  MessageQuestion: Icons.MessageQuestion,
}

export const getIcon = (icon: string, size: number) => {
  return React.createElement(Components[icon as keyof typeof Components], {
    size: size,
  })
}

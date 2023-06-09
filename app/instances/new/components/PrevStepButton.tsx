import { ArrowLeft2 } from 'iconsax-react'
import Link from 'next/link'
import React from 'react'

const PrevStepButton = ({ href }: { href: string }) => {
  return (
    <Link
      href={href}
      className={`flex h-full w-32 items-center justify-center rounded bg-yellow-primary`}
    >
      <ArrowLeft2 size={12} />
      <span className='ml-1'>Prev Step</span>
    </Link>
  )
}

export default PrevStepButton

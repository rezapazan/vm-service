'use client'

import { useInstance } from '@/context/instance/instanceContext'
import { ArrowRight2 } from 'iconsax-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const NextStepButton = ({ href }: { href: string }) => {
  const pathname = usePathname()
  const [instance] = useInstance()
  const [disabled, setDisabled] = useState<boolean>(true)

  useEffect(() => {
    if (
      (pathname.includes('location') && instance.location.id !== 0) ||
      (pathname.includes('type') && instance.type.id !== 0)
    ) {
      console.log('verified')
      setDisabled(false)
    } else {
      console.log('Unverified')
    }
  }, [instance.location, instance.type, pathname])

  return disabled ? (
    <button
      disabled
      className='flex h-full w-32 items-center justify-center rounded bg-gray-primary-border'
    >
      <span className='mr-1'>Next Step</span>
      <ArrowRight2 size={12} />
    </button>
  ) : (
    <Link
      href={href}
      className='flex h-full w-32 items-center justify-center rounded bg-yellow-primary hover:bg-blue-text hover:text-white'
    >
      <span className='mr-1'>Next Step</span>
      <ArrowRight2 size={12} />
    </Link>
  )
}

export default NextStepButton

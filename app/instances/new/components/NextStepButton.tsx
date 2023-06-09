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
    console.log(
      `%c instance =>`,
      'background: #2ecc71;border-radius: 0.5em;color: white;font-weight: bold;padding: 2px 0.5e',
      instance
    )
  }, [instance])

  useEffect(() => {
    if (pathname.includes('location') && instance.location.id !== 0) {
      console.log('verified')
      setDisabled(false)
    } else {
      console.log('Unverified')
    }
  }, [instance.location, instance.type, pathname])

  useEffect(() => {
    console.log(
      `%c disabled =>`,
      'background: #ffe900; border-radius: 0.5em;color: #000;font-weight: bold;padding: 2px 0.5em',
      disabled
    )
  }, [disabled])

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

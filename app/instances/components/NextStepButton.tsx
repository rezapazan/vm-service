'use client'

import { useInstance } from '@/context/instance/instanceContext'
import { nextStepValidator } from '@/utils'
import { ArrowRight2 } from 'iconsax-react'
import React from 'react'

const NextStepButton = () => {
  const [instance, dispatch] = useInstance()

  const nextStepHandler = (): void => {
    nextStepValidator(instance, dispatch)
  }

  return (
    <button
      onClick={nextStepHandler}
      className='flex h-full w-32 items-center justify-center rounded bg-yellow-primary hover:bg-blue-text hover:text-white'
    >
      <span className='mr-1'>Next Step</span>
      <ArrowRight2 size={12} />
    </button>
  )
}

export default NextStepButton

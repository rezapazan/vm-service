'use client'

import { useInstance } from '@/context/instance/instanceContext'
import { prevStepValidator } from '@/utils'
import { ArrowLeft2 } from 'iconsax-react'
import React from 'react'

const PrevStepButton = () => {
  const [instance, dispatch] = useInstance()

  const prevStepHandler = () => {
    prevStepValidator(instance, dispatch)
  }

  return (
    <button
      onClick={prevStepHandler}
      className={`flex h-full w-32 items-center justify-center rounded bg-yellow-primary hover:bg-blue-text hover:text-white`}
    >
      <ArrowLeft2 size={12} />
      <span className='ml-1'>Prev Step</span>
    </button>
  )
}

export default PrevStepButton

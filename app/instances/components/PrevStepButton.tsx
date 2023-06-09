'use client'

import { useInstance } from '@/context/instance/instanceContext'
import { ArrowLeft2 } from 'iconsax-react'
import React from 'react'

const PrevStepButton = () => {
  const [instance, dispatch] = useInstance()

  const prevStepHandler = () => {
    switch (instance.step) {
      case 2:
        dispatch({ type: 'SET_STEP', payload: 1 })
        return
      default:
        return
    }
  }

  return (
    <button
      onClick={prevStepHandler}
      className={`flex h-full w-32 items-center justify-center rounded bg-yellow-primary`}
    >
      <ArrowLeft2 size={12} />
      <span className='ml-1'>Prev Step</span>
    </button>
  )
}

export default PrevStepButton

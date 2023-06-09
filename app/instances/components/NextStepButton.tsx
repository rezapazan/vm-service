'use client'

import { useInstance } from '@/context/instance/instanceContext'
import { ArrowRight2 } from 'iconsax-react'
import React from 'react'
import { toast } from 'react-toastify'

const NextStepButton = () => {
  const [instance, dispatch] = useInstance()

  const nextStepHandler = (): void => {
    switch (instance.step) {
      case 1:
        // instance.location.id !== 0
        //   ? dispatch({ type: 'SET_STEP', payload: 2 })
        //   : toast.error('Please select a location.')
        dispatch({ type: 'SET_STEP', payload: 2 })
        return
      case 2:
        instance.type.id !== 0
          ? dispatch({ type: 'SET_STEP', payload: 3 })
          : toast.error('Please Select a type.')
        return
      default:
        return
    }
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

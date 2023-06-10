'use client'

import { useInstance } from '@/context/instance/instanceContext'
import { StepperStep } from '@/types/Stepper'
import React from 'react'

const Step = ({ step, title }: StepperStep) => {
  const [instance, dispatch] = useInstance()

  const onClickHandler = () => {
    dispatch({ type: 'SET_STEP', payload: step })
  }

  return (
    <button
      onClick={onClickHandler}
      className='flex w-[99px] flex-col items-center'
    >
      <div
        className={`mb-2 flex h-6 w-6 items-center justify-center rounded-full ${
          instance.step === step ? 'bg-yellow-primary' : 'bg-[#D1EFFE]'
        }`}
      >
        <div
          className={`h-[13px] w-[13px] rounded-full ${
            instance.step === step ? 'bg-white' : 'bg-[#52C7FC]'
          }`}
        >
          &nbsp;
        </div>
      </div>
      <span>{title}</span>
    </button>
  )
}

export default Step

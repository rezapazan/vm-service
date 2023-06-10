import React from 'react'
import Step from './Step'
import { StepperStep } from '@/types/Stepper'
import Separator from './Separator'

// Is this an API call?
const steps: StepperStep[] = [
  {
    step: 1,
    title: 'Instance Location',
  },
  {
    step: 2,
    title: 'Instance Type',
  },
  {
    step: 3,
    title: 'Instance Plan',
  },
  {
    step: 4,
    title: 'Authentication',
  },
  {
    step: 5,
    title: 'Finalize',
  },
]

const Stepper = () => {
  return (
    <div className='m-auto mb-12 flex h-[47px] w-3/4 items-start justify-between text-center font-grotesk text-xs font-bold text-[#747577]'>
      {steps.map(step => (
        <>
          {step.step === 1 ? <></> : <Separator />}
          <Step
            key={step.title}
            step={step.step}
            title={step.title}
          />
        </>
      ))}
    </div>
  )
}

export default Stepper

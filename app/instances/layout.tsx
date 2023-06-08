'use client'

import { ArrowLeft2, ArrowRight2 } from 'iconsax-react'
import React, { PropsWithChildren } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Stepper from './components/Stepper'

const InstancesLayout = ({ children }: PropsWithChildren) => {
  const nextStepHandler = (): void => {
    toast('Next')
  }

  const prevStepHandler = () => {
    toast('Prev')
  }

  return (
    <main className='w-full'>
      <div className='px-[70px] py-[50px]'>
        <Stepper />
        {children}
        <div
          className={`flex h-10 items-center justify-between font-plex text-sm font-medium`}
        >
          <button
            onClick={prevStepHandler}
            className={`flex h-full w-32 items-center justify-center rounded bg-[#FAC802]`}
          >
            <ArrowLeft2 size={12} />
            <span className='ml-1'>Prev Step</span>
          </button>
          <button
            onClick={nextStepHandler}
            className='flex h-full w-32 items-center justify-center rounded bg-[#FAC802]'
          >
            <span className='mr-1'>Next Step</span>
            <ArrowRight2 size={12} />
          </button>
        </div>
      </div>
    </main>
  )
}

export default InstancesLayout

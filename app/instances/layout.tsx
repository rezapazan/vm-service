'use client'

import { ArrowLeft2, ArrowRight2 } from 'iconsax-react'
import React, { PropsWithChildren } from 'react'
import { Bounce, Slide, ToastContainer, toast } from 'react-toastify'
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
      <div className='px-[70px] py-11'>
        <Stepper />
        {children}
        <div
          className={`flex h-10 items-center justify-between font-plex text-sm font-medium`}
        >
          <button
            onClick={prevStepHandler}
            className={`flex h-full w-32 items-center justify-center rounded bg-yellow-primary`}
          >
            <ArrowLeft2 size={12} />
            <span className='ml-1'>Prev Step</span>
          </button>
          <button
            onClick={nextStepHandler}
            className='flex h-full w-32 items-center justify-center rounded bg-yellow-primary'
          >
            <span className='mr-1'>Next Step</span>
            <ArrowRight2 size={12} />
          </button>
        </div>
      </div>
      <ToastContainer
        position='bottom-center'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
        transition={Slide}
      />
    </main>
  )
}

export default InstancesLayout

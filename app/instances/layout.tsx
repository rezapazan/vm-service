'use client'

import { ArrowLeft2, ArrowRight2 } from 'iconsax-react'
import React, { PropsWithChildren, useEffect } from 'react'
import { Slide, ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Stepper from './components/Stepper'
import { useInstance } from '@/context/instance/instanceContext'

const InstancesLayout = ({ children }: PropsWithChildren) => {
  const [instance, dispatch] = useInstance()

  useEffect(() => {
    console.log(
      `%c instance =>`,
      'background: #2ecc71;border-radius: 0.5em;color: white;font-weight: bold;padding: 2px 0.5e',
      instance
    )
  }, [instance])

  const nextStepHandler = (): void => {
    switch (instance.step) {
      case 0:
        // instance.location.id !== 0
        //   ? dispatch({ type: 'SET_STEP', payload: 1 })
        //   : toast.error('Please select a location.')
        dispatch({ type: 'SET_STEP', payload: 1 })
        return
      case 1:
        instance.type.id !== 0
          ? dispatch({ type: 'SET_STEP', payload: 2 })
          : toast.error('Please Select a type.')
        return
      default:
        return
    }
  }

  const prevStepHandler = () => {
    switch (instance.step) {
      case 1:
        dispatch({ type: 'SET_STEP', payload: 0 })
        return
      default:
        return
    }
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

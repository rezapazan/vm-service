'use client'

import { useInstance } from '@/context/instances/instancesContext'
import { ArrowLeft2, ArrowRight2 } from 'iconsax-react'
import React, { PropsWithChildren, useEffect } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Stepper from './components/Stepper'

const InstancesLayout = ({ children }: PropsWithChildren) => {
  const [instance, dispatch] = useInstance()

  useEffect(() => {
    console.log(instance)
  }, [instance])

  const nextStepHandler = (): void => {
    // switch (instance.step) {
    //   case 0:
    //     instance.location.name.length > 0
    //       ? dispatch({ type: 'SET_STEP', payload: { step: 1 } })
    //       : toast.error('Please Select a Location.')
    //     return
    //   case 1:
    //     instance.type.name.length > 0
    //       ? dispatch({ type: 'SET_STEP', payload: { step: 2 } })
    //       : toast.error('Please Select a Type.')
    //     return
    //   default:
    //     return
    // }
    dispatch({ type: 'SET_STEP', payload: { step: 1 } })
  }

  const prevStepHandler = () => {
    // switch (instance.step) {
    //   case 0:
    //     instance.location.name.length > 0
    //       ? dispatch({ type: 'SET_STEP', payload: { step: 1 } })
    //       : toast.error('Please Select a Location.')
    //     return
    //   case 1:
    //     instance.type.name.length > 0
    //       ? dispatch({ type: 'SET_STEP', payload: { step: 2 } })
    //       : toast.error('Please Select a Type.')
    //     return
    //   default:
    //     return
    // }
    dispatch({ type: 'SET_STEP', payload: { step: 0 } })
  }

  return (
    <main className='w-full'>
      <div className='px-[70px] py-[50px]'>
        <Stepper />
        {children}
        <div
          className={`${
            instance.step === 0 ? 'justify-end' : 'justify-between'
          } flex h-10 items-center font-plex text-sm font-medium`}
        >
          <button
            onClick={prevStepHandler}
            className={`${
              instance.step >= 1 ? 'flex' : 'hidden'
            } h-full w-32 items-center justify-center rounded bg-[#FAC802]`}
          >
            <ArrowLeft2 size={12} />
            <span className='ml-1'>Prev Step</span>
          </button>
          <button
            onClick={nextStepHandler}
            className='flex h-full w-32 items-center justify-center rounded bg-[#FAC802]'
          >
            <span className='mr-1'>
              {instance.step === 5 ? 'Deploy' : 'Next Step'}
            </span>
            <ArrowRight2 size={12} />
          </button>
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
        />
      </div>
    </main>
  )
}

export default InstancesLayout

'use client'

import { useInstance } from '@/context/instances/instancesContext'
import InstancesProvider from '@/context/instances/instancesProvider'
import { ArrowLeft2, ArrowRight2 } from 'iconsax-react'
import React, { PropsWithChildren } from 'react'
import { toast } from 'react-toastify'

const InstancesLayout = ({ children }: PropsWithChildren) => {
  const [instance, dispatch] = useInstance()

  // TODO: toast does not work
  const nextStepHandler = () => {
    switch (instance.step) {
      case 0:
        instance.location.name.length > 0
          ? dispatch({ type: 'SET_STEP', payload: { step: 1 } })
          : toast.error('Please Select a Location.')
      case 1:
        instance.type.name.length > 0
          ? dispatch({ type: 'SET_STEP', payload: { step: 2 } })
          : toast.error('Please Select a Type.')
      default:
        return
    }
  }

  return (
    <main className='w-full'>
      <div className='px-[70px] py-[50px]'>
        <InstancesProvider>
          {children}
          <div className='flex h-10 items-center justify-between font-plex text-sm font-medium'>
            <button
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
        </InstancesProvider>
      </div>
    </main>
  )
}

export default InstancesLayout

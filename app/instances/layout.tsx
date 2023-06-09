import React, { PropsWithChildren } from 'react'
import Stepper from './components/Stepper'
import PrevStepButton from './components/PrevStepButton'
import NextStepButton from './components/NextStepButton'
import InstanceProvider from '@/context/instance/instanceProvider'

const InstancesLayout = ({ children }: PropsWithChildren) => {
  return (
    <main className='w-full'>
      <div className='px-[70px] py-11'>
        <InstanceProvider>
          <Stepper />
          {children}
          <div
            className={`flex h-10 items-center justify-between font-plex text-sm font-medium`}
          >
            <PrevStepButton />
            <NextStepButton />
          </div>
        </InstanceProvider>
      </div>
    </main>
  )
}

export default InstancesLayout

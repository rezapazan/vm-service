import React, { PropsWithChildren } from 'react'
import Stepper from './components/Stepper'
import InstanceProvider from '@/context/instance/instanceProvider'

const InstancesLayout = ({ children }: PropsWithChildren) => {
  return (
    <main className='w-full'>
      <div className='px-[70px] py-11'>
        <InstanceProvider>
          <Stepper />
          {children}
        </InstanceProvider>
      </div>
    </main>
  )
}

export default InstancesLayout

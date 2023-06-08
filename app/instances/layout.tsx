import InstancesProvider from '@/context/instances/instancesProvider'
import React, { PropsWithChildren } from 'react'

export const metadata = {
  title: 'abrNOC VM Dashboard | Instances',
}

const InstancesLayout = ({ children }: PropsWithChildren) => {
  return (
    <main className='w-full'>
      <div className='px-[70px] py-[50px]'>
        {/* TODO: handle stepper -> 1.ui 2.context that completes an object by each step */}
        <InstancesProvider>{children}</InstancesProvider>
      </div>
    </main>
  )
}

export default InstancesLayout

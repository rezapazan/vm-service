import React from 'react'
import Type from './Type'
import { InstanceType } from '@/types'

const getInstanceTypes = async () => {
  const types = await fetch(
    'https://my-json-server.typicode.com/rezapazan/vm-service/types',
    { next: { revalidate: 10 } }
  )

  return types.json()
}

const Index = async () => {
  const instanceTypes: InstanceType[] = await getInstanceTypes()

  return (
    <>
      <h2 className='mb-5 font-grotesk text-[28px] font-bold text-blue-text'>
        Instance Type
      </h2>
      <div className='mb-28 grid h-[293px] grid-cols-4 gap-7 overflow-y-auto overflow-x-hidden pr-2 scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-200 scrollbar-thumb-rounded'>
        {instanceTypes.map(type => (
          <Type
            key={type.id}
            logo={type.logo}
            os={type.os}
            versions={type.versions}
            id={type.id}
          />
        ))}
      </div>
    </>
  )
}

export default Index

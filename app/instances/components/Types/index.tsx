import React from 'react'
import Type from './Type'
import { InstanceType } from '@/types'

const types: InstanceType[] = [
  {
    id: 1,
    name: 'Ubuntu',
    versions: ['22.04', '20.04', '23.04'],
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/54/Ubuntu-Logo_ohne_Schriftzug.svg',
  },
  {
    id: 2,
    name: 'Ubuntu',
    versions: ['22.04', '20.04', '23.04'],
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/54/Ubuntu-Logo_ohne_Schriftzug.svg',
  },
  {
    id: 3,
    name: 'Ubuntu',
    versions: ['22.04', '20.04', '23.04'],
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/54/Ubuntu-Logo_ohne_Schriftzug.svg',
  },
  {
    id: 4,
    name: 'Ubuntu',
    versions: ['22.04', '20.04', '23.04'],
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/54/Ubuntu-Logo_ohne_Schriftzug.svg',
  },
  {
    id: 5,
    name: 'Ubuntu',
    versions: ['22.04', '20.04', '23.04'],
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/54/Ubuntu-Logo_ohne_Schriftzug.svg',
  },
]

const Index = () => {
  return (
    <>
      <h2 className='mb-5 font-grotesk text-[28px] font-bold text-blue-text'>
        Instance Type
      </h2>
      <div className='mb-28 grid h-[293px] grid-cols-4 gap-7 overflow-y-auto overflow-x-hidden pr-2 scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-200 scrollbar-thumb-rounded'>
        {types.map(type => (
          <Type
            key={type.id}
            logo={type.logo}
            name={type.name}
            versions={type.versions}
            id={type.id}
          />
        ))}
      </div>
    </>
  )
}

export default Index

import React from 'react'
import Location from './Location'
import { ArrowRight2 } from 'iconsax-react'
import { Location as LocationType } from '@/types'

const getLocations = async () => {
  const locations = await fetch(
    'https://my-json-server.typicode.com/rezapazan/vm-service/locations'
  )

  return locations.json()
}

const Index = async () => {
  const locations: LocationType[] = await getLocations()

  return (
    <>
      <h2 className='mb-5 font-grotesk text-[28px] font-bold text-[#0D2D51]'>
        Instance Location
      </h2>
      <div className='mb-[118px] grid h-80 grid-cols-4 gap-7 overflow-y-auto overflow-x-hidden pr-2 scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-200 scrollbar-thumb-rounded'>
        {locations.map(location => (
          <Location
            key={location.name}
            name={location.name}
            imageURL={location.flag}
          />
        ))}
      </div>
      <div className='flex items-center justify-end'>
        <button className='flex h-10 w-28 items-center justify-around rounded bg-[#FAC802]'>
          <span className='mr-1'>Next Step</span>
          <ArrowRight2 size={17} />
        </button>
      </div>
    </>
  )
}

export default Index

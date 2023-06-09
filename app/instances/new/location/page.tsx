import React from 'react'
import { InstanceLocation } from '@/types'
import Location from './components/Location'
import NextStepButton from '../components/NextStepButton'

const getLocations = async () => {
  const locations = await fetch(
    'https://my-json-server.typicode.com/rezapazan/vm-service/locations',
    { next: { revalidate: 10 } }
  )
  return locations.json()
}

const InstanceLocation = async () => {
  const locations: InstanceLocation[] = await getLocations()

  return (
    <>
      <h2 className='mb-5 font-grotesk text-[28px] font-bold text-blue-text'>
        Instance Location
      </h2>
      <div className='mb-28 grid h-[293px] grid-cols-4 gap-7 overflow-y-auto overflow-x-hidden pr-2 scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-200 scrollbar-thumb-rounded'>
        {locations.map(location => (
          <Location
            key={location.id}
            name={location.name}
            flag={location.flag}
            id={location.id}
          />
        ))}
      </div>
      <div
        className={`flex h-10 items-center justify-end font-plex text-sm font-medium`}
      >
        <NextStepButton href='/instances/new/type' />
      </div>
    </>
  )
}

export default InstanceLocation

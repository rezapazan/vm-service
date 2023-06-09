import React from 'react'
import Location from './Location'
import { InstanceLocation } from '@/types'

// TODO: Make Client-Side API Calss using react-query & axios
const getLocations = async () => {
  const locations = await fetch(
    'https://my-json-server.typicode.com/rezapazan/vm-service/locations',
    { next: { revalidate: 10 } }
  )

  return locations.json()
}

const Index = async () => {
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
    </>
  )
}

export default Index

'use client'

import React from 'react'
import Location from './Location'
import { useInstanceLocationsQuery } from '@/hooks/useInstanceLocationsQuery'

const Index = () => {
  const { data, isLoading, isFetching, error } = useInstanceLocationsQuery()

  return (
    <>
      <h2 className='mb-5 font-grotesk text-[28px] font-bold text-blue-text'>
        Instance Location
      </h2>
      <div className='mb-28 grid h-[293px] grid-cols-4 gap-7 overflow-y-auto overflow-x-hidden pr-2 scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-200 scrollbar-thumb-rounded'>
        {isLoading || isFetching ? (
          <p className='font-grotesk text-lg font-bold'>Loading...</p>
        ) : data ? (
          data.map(location => (
            <Location
              key={location.id}
              name={location.name}
              flag={location.flag}
              id={location.id}
            />
          ))
        ) : error ? (
          <p>There was an error!!</p>
        ) : (
          <></>
        )}
      </div>
    </>
  )
}

export default Index

'use client'

import React from 'react'
import Type from './Type'
import { useInstanceTypesQuery } from '@/hooks/useInstanceTypesQuery'

const Index = () => {
  const { data, isLoading, isFetching, error } = useInstanceTypesQuery()

  return (
    <>
      <h2 className='mb-5 font-grotesk text-[28px] font-bold text-blue-text'>
        Instance Type
      </h2>
      <div className='mb-28 grid h-[293px] grid-cols-4 gap-7 overflow-y-auto overflow-x-hidden pr-2 scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-200 scrollbar-thumb-rounded'>
        {isLoading || isFetching ? (
          <p className='font-grotesk text-lg font-bold'>Loading...</p>
        ) : data ? (
          data.map(type => (
            <Type
              key={type.id}
              logo={type.logo}
              os={type.os}
              versions={type.versions}
              id={type.id}
            />
          ))
        ) : error ? (
          <p>Something went wrong!!</p>
        ) : (
          <></>
        )}
      </div>
    </>
  )
}

export default Index

'use client'

import { useInstance } from '@/context/instances/instancesContext'
import { Location } from '@/types'
import Image from 'next/image'
import React from 'react'

const Location = ({ name, flag, id }: Location) => {
  const [instance, dispatch] = useInstance()

  const selectHandler = () => {
    console.log('CLICKED')

    dispatch({
      type: 'SET_LOCATION',
      payload: { flag, id, name },
    })
  }

  return (
    <button
      onClick={selectHandler}
      className={`${
        instance.location.id === id ? 'border-4 border-[#2C5EFF]' : ''
      } flex h-32 w-60 flex-col items-center justify-center rounded-xl bg-white hover:border-4 hover:border-[#2C5EFF]`}
    >
      {/* TODO: make images round */}
      <div className='w-14 rounded-full'>
        <Image
          src={flag}
          alt={name}
          width={64}
          height={64}
        />
      </div>
      <span className='font-grotesk text-sm font-bold'>{name}</span>
    </button>
  )
}

export default Location

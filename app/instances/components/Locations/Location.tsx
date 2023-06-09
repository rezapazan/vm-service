'use client'

import { InstanceLocation } from '@/types'
import Image from 'next/image'
import React from 'react'

const Location = ({ name, flag, id }: InstanceLocation) => {
  const selectHandler = () => {
    console.log('CLICKED')
  }

  return (
    <button
      onClick={selectHandler}
      className={`flex h-32 w-60 flex-col items-center justify-center rounded-xl bg-white`}
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
      <h4 className='font-grotesk text-sm font-bold'>{name}</h4>
    </button>
  )
}

export default Location

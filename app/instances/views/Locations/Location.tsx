'use client'

import { useInstance } from '@/context/instance/instanceContext'
import { InstanceLocation } from '@/types'
import Image from 'next/image'
import React from 'react'

const Location = ({ name, flag, id }: InstanceLocation) => {
  const [instance, dispatch] = useInstance()

  const selectHandler = () => {
    dispatch({ type: 'SET_LOCATION', payload: { name, flag, id } })
  }

  return (
    <button
      onClick={selectHandler}
      className={`${
        instance.location.id === id ? 'border-4 border-blue-primary' : ''
      } flex h-32 w-60 flex-col items-center justify-center rounded-xl bg-white`}
    >
      <div className='relative h-16 w-16 rounded-full'>
        <Image
          alt={name}
          src={flag}
          width={4000}
          height={3000}
          className='absolute left-0 top-0 h-full w-full rounded-full object-cover'
          loading='lazy'
        />
      </div>
      <h4 className='font-grotesk text-sm font-bold'>{name}</h4>
    </button>
  )
}

export default Location

'use client'

import { Location } from '@/types'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const Location = ({ name, flag, id }: Location) => {
  const [selected, setSelected] = useState<number>(0)

  useEffect(() => {
    console.log(
      `%c selected =>`,
      'background: #ffe900; border-radius: 0.5em;color: #000;font-weight: bold;padding: 2px 0.5em',
      selected
    )
  }, [selected])

  useEffect(() => {
    console.log(
      `%c id =>`,
      'background: #e70000;border-radius: 0.5em;color: white;font-weight: bold;padding: 2px 0.5em',
      id
    )
  }, [id])

  const clickHandler = (id: number) => {
    id === selected ? setSelected(0) : setSelected(id)
  }

  return (
    <button
      onClick={() => clickHandler(id as number)}
      className={`${
        id === selected ? 'border-4 border-[#2C5EFF]' : ''
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

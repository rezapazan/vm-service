'use client'

import Image from 'next/image'
import React, { useState, useTransition } from 'react'

const Location = ({ name, imageURL }: { name: string; imageURL: string }) => {
  const [selectedClassName, setSelectedClassName] = useState<string>('')
  const [, startTransition] = useTransition()

  const clickHandler = () => {
    startTransition(() => {
      setSelectedClassName('border-[#2C5EFF] border-4')
    })
  }

  return (
    <button
      onClick={clickHandler}
      className={`${selectedClassName} flex h-32 w-60 flex-col items-center justify-center rounded-xl bg-white hover:border-4 hover:border-[#2C5EFF]`}
    >
      {/* TODO: make images round */}
      <div className='w-14 rounded-full'>
        <Image
          src={imageURL}
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

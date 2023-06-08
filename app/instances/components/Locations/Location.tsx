import Image from 'next/image'
import React from 'react'

const Location = ({ name, imageURL }: { name: string; imageURL: string }) => {
  return (
    <div className='flex h-32 w-60 flex-col items-center justify-center rounded-[7px] bg-white'>
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
    </div>
  )
}

export default Location

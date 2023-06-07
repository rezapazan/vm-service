import Image from 'next/image'
import React from 'react'

const Location = ({ name, imageURL }: { name: string; imageURL: string }) => {
  return (
    <div className='flex h-32 w-60 flex-col items-center justify-center rounded-[7px] bg-white'>
      <Image
        alt={name}
        src={imageURL}
        width={56}
        height={56}
        className='mb-[14px] rounded-full'
      />
      <span className='font-grotesk text-sm font-bold'>{name}</span>
    </div>
  )
}

export default Location

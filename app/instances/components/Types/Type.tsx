import { InstanceType } from '@/types'
import Image from 'next/image'
import React from 'react'
import UbuntuLogo from '@/assets/images/Ubuntu.png'
import { TickCircle } from 'iconsax-react'

const Type = ({ name, logo = UbuntuLogo, versions }: InstanceType) => {
  return (
    <button className='flex h-44 w-60 flex-col items-center rounded-xl bg-white py-4'>
      <Image
        alt={name}
        src={logo}
        width={36}
        height={36}
        className='mb-2'
      />
      <h4 className='mb-3 font-grotesk text-sm font-bold'>{name}</h4>
      <div className='mb-4 flex items-center font-plex text-[10px]'>
        <TickCircle
          size='20'
          className='mr-1 text-blue-primary'
          variant='Bulk'
        />
        <span className='mr-1 font-bold'>All x64</span>
        <span className='font-normal text-gray-text'>System Type</span>
      </div>
      <select
        defaultValue={'default'}
        className='h-8 w-36 rounded border border-gray-disabled font-plex text-xs text-blue-text focus:border-blue-primary'
      >
        <option value='default'>Choose a Type</option>
        <option value='US'>United States</option>
        <option value='CA'>Canada</option>
        <option value='FR'>France</option>
        <option value='DE'>Germany</option>
      </select>
    </button>
  )
}

export default Type

import { InstanceType } from '@/types'
import Image from 'next/image'
import React from 'react'
import UbuntuLogo from '@/assets/images/Ubuntu.png'
import { TickCircle } from 'iconsax-react'

const Type = ({ os, logo = UbuntuLogo, versions }: InstanceType) => {
  return (
    <button className='flex h-44 w-60 flex-col items-center rounded-xl bg-white py-4'>
      <Image
        alt={os}
        src={logo}
        width={36}
        height={36}
        className='mb-2'
      />
      <h4 className='mb-3 font-grotesk text-sm font-bold'>{os}</h4>
      <div className='mb-4 flex items-center font-plex text-[10px]'>
        <TickCircle
          size='20'
          className='mr-1 text-blue-primary'
          variant='Bulk'
        />
        <span className='mr-1 font-bold'>All x64</span>
        <span className='font-normal text-gray-text'>System Type</span>
      </div>
      {/* TODO: Complete Styles */}
      <select
        defaultValue={'default'}
        className='h-8 w-36 rounded border border-gray-disabled px-5 font-plex text-xs text-blue-text focus:border-2 focus:border-blue-primary'
      >
        <option value='default'>Choose a Type</option>
        {versions.map(version => (
          <option key={version.id}>{version.version}</option>
        ))}
      </select>
    </button>
  )
}

export default Type

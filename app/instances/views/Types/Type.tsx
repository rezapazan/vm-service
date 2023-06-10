'use client'

import { InstanceType } from '@/types'
import Image from 'next/image'
import React, { useState } from 'react'
import UbuntuLogo from '@/assets/images/Ubuntu.png'
import { TickCircle } from 'iconsax-react'
import { useInstance } from '@/context/instance/instanceContext'

const Type = ({ os, logo = UbuntuLogo, versions, id }: InstanceType) => {
  const [instance, dispatch] = useInstance()
  const [selectedVersion, setSelectedVersion] = useState<string>('')

  const onClickHandler = () => {
    dispatch({
      type: 'SET_TYPE',
      payload: { os, logo, version: selectedVersion, id },
    })
  }

  const onVersionSelectHandler = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedVersion(event.target.value)
  }

  return (
    <button
      onClick={onClickHandler}
      className={`${
        instance.type.id === id ? 'border-blue-primary' : 'border-white'
      } flex h-44 w-60 flex-col items-center justify-between rounded-xl border-4 bg-white py-4`}
    >
      <Image
        alt={os}
        src={logo}
        width={36}
        height={36}
      />
      <h4 className='font-grotesk text-sm font-bold'>{os}</h4>
      <div className='flex items-center font-plex text-[10px]'>
        <TickCircle
          size='20'
          className='mr-1 text-blue-primary'
          variant='Bulk'
        />
        <span className='mr-1 font-bold'>All x64</span>
        <span className='font-normal text-gray-text'>System Type</span>
      </div>
      <select
        value={selectedVersion}
        onChange={event => onVersionSelectHandler(event)}
        className='h-8 w-36 rounded border border-gray-disabled px-5 font-plex text-xs font-bold text-gray-placeholder focus:border-2 focus:border-blue-primary focus:text-blue-text'
      >
        <option>Select Version</option>
        {versions.map(version => (
          <option key={version.id}>{version.version}</option>
        ))}
      </select>
    </button>
  )
}

export default Type

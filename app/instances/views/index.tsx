'use client'

import { useInstance } from '@/context/instance/instanceContext'
import React, { useEffect } from 'react'
import Locations from './Locations'
import Types from './Types'

const ViewChanger = () => {
  const [instance] = useInstance()

  return instance.step === 1 ? (
    <Locations />
  ) : instance.step === 2 ? (
    <Types />
  ) : (
    <p>New Views Are on The Way!!</p>
  )
}

export default ViewChanger

'use client'

import { useInstance } from '@/context/instance/instanceContext'
import React, { useEffect } from 'react'
import Locations from './Locations'
import Types from './Types'
import Plan from './Plan'

const ViewChanger = () => {
  const [instance] = useInstance()

  return instance.step === 1 ? (
    <Locations />
  ) : instance.step === 2 ? (
    <Types />
  ) : instance.step === 3 ? (
    <Plan />
  ) : (
    <></>
  )
}

export default ViewChanger

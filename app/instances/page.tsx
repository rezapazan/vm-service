import React from 'react'
import Locations from './components/Locations'
import { useInstance } from '@/context/instances/instancesContext'
import Type from './components/Types/Type'

const Page = () => {
  const [instance] = useInstance()

  return instance.step === 0 ? (
    <Locations />
  ) : instance.step === 1 ? (
    <Type />
  ) : (
    <></>
  )
}

export default Page

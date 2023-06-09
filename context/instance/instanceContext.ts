'use client'

import { Instance, InstanceActions } from '@/types'
import { Dispatch, createContext, useContext } from 'react'

export const instanceInitialState: Instance = {
  step: 1,
  type: {
    id: 0,
    logo: '',
    os: '',
    versions: [],
  },
  location: {
    flag: '',
    id: 0,
    name: '',
  },
}

export const InstanceContext = createContext<
  [Instance, Dispatch<InstanceActions>]
>([instanceInitialState, () => {}])

export const useInstance = () => useContext(InstanceContext)

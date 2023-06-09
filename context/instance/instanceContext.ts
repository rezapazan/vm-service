'use client'

import { InstanceActions } from '@/types'
import { InstanceState } from '@/types/instances'
import { Dispatch, createContext, useContext } from 'react'

export const instanceInitialState: InstanceState = {
  step: 1,
  type: {
    id: 0,
    logo: '',
    os: '',
    version: '',
  },
  location: {
    flag: '',
    id: 0,
    name: '',
  },
}

export const InstanceContext = createContext<
  [InstanceState, Dispatch<InstanceActions>]
>([instanceInitialState, () => {}])

export const useInstance = () => useContext(InstanceContext)

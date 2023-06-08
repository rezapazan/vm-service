import { Instance, InstanceActions } from '@/types'
import { Dispatch, createContext, useContext } from 'react'

export const instanceInitialState: Instance = {
  location: {
    name: '',
    flag: '',
  },
  type: {
    logo: '',
    name: '',
    version: '',
  },
  step: 0,
}

export const InstancesContext = createContext<
  [Instance, Dispatch<InstanceActions>]
>([
  instanceInitialState,
  () => {
    return
  },
])
export const useInstance = () => useContext(InstancesContext)

import { Instance, InstanceActions } from '@/types'
import React from 'react'

export const InstanceReducer: React.Reducer<Instance, InstanceActions> = (
  state,
  action
): Instance => {
  switch (action.type) {
    case 'SET_STEP':
      return { ...state, step: action.payload.step }
    case 'SET_Location':
      return {
        ...state,
        location: { flag: action.payload.flag, name: action.payload.name },
      }
    case 'SET_TYPE':
      return {
        ...state,
        type: {
          logo: action.payload.logo,
          name: action.payload.name,
          version: action.payload.version,
        },
      }
    case 'RESET':
      return {
        type: { logo: '', name: '', version: '' },
        location: { flag: '', name: '' },
        step: 0,
      }
    default:
      return state
  }
}

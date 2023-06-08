import { Instance, InstanceActions } from '@/types'
import React from 'react'

export const InstanceReducer: React.Reducer<Instance, InstanceActions> = (
  state,
  action
): Instance => {
  switch (action.type) {
    case 'SET_STEP':
      console.log('This is the SET_STEP')
      return { ...state, step: action.payload.step }
    case 'SET_LOCATION':
      return {
        ...state,
        location: {
          flag: action.payload.flag,
          name: action.payload.name,
          id: action.payload.id,
        },
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
        location: { flag: '', name: '', id: 0 },
        step: 0,
      }
    default:
      return state
  }
}

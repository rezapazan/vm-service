import { Instance, InstanceActions } from '@/types'
import { InstanceLocation, InstanceType, Step } from '@/types/instances'
import React from 'react'

export const InstanceReducer: React.Reducer<Instance, InstanceActions> = (
  state,
  action
): Instance => {
  switch (action.type) {
    case 'SET_STEP':
      return { ...state, step: action.payload as Step }
    case 'SET_LOCATION':
      return { ...state, location: action.payload as InstanceLocation }
    case 'SET_TYPE':
      return { ...state, type: action.payload as InstanceType }
    default:
      return state
  }
}

import { Instance, InstanceActions } from '@/types'
import { InstanceLocation, InstanceType } from '@/types/instances'
import React from 'react'

export const InstanceReducer: React.Reducer<Instance, InstanceActions> = (
  state,
  action
): Instance => {
  switch (action.type) {
    case 'SET_LOCATION':
      return { ...state, location: action.payload as InstanceLocation }
    case 'SET_TYPE':
      return { ...state, type: action.payload as InstanceType }
    default:
      return state
  }
}

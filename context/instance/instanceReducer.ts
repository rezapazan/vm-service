import { InstanceActions } from '@/types'
import {
  InstanceLocation,
  InstanceSelectedType,
  InstanceState,
  Step,
} from '@/types/instances'
import React from 'react'

export const InstanceReducer: React.Reducer<InstanceState, InstanceActions> = (
  state,
  action
): InstanceState => {
  switch (action.type) {
    case 'SET_STEP':
      return { ...state, step: action.payload as Step }
    case 'SET_LOCATION':
      return { ...state, location: action.payload as InstanceLocation }
    case 'SET_TYPE':
      return { ...state, type: action.payload as InstanceSelectedType }
    default:
      return state
  }
}

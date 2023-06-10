import { InstanceActions, InstanceState, Step } from '@/types/instances'
import { Dispatch } from 'react'
import { toast } from 'react-toastify'

export const nextStepValidator = (
  instance: InstanceState,
  dispatch: Dispatch<InstanceActions>
) => {
  switch (instance.step) {
    case 1:
      instance.location.id !== 0
        ? dispatch({ type: 'SET_STEP', payload: 2 })
        : toast.error('Please select a location.')
      return
    case 2:
      if (instance.type.id !== 0) {
        if (instance.type.version.length > 0) {
          dispatch({ type: 'SET_STEP', payload: 3 })
        } else {
          toast.error('Please select a version.')
        }
      } else {
        toast.error('Please Select a type.')
      }
      return
    default:
      return
  }
}

export const prevStepValidator = (
  instance: InstanceState,
  dispatch: Dispatch<InstanceActions>
) => {
  switch (instance.step) {
    case 2:
      dispatch({ type: 'SET_STEP', payload: 1 })
      return
    case 3:
      dispatch({ type: 'SET_STEP', payload: 2 })
    default:
      return
  }
}

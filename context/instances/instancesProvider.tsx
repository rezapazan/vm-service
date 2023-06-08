'use client'

import React, { PropsWithChildren, useReducer } from 'react'
import { InstancesContext, instanceInitialState } from './instancesContext'
import { InstanceReducer } from './instancesReducer'

const InstancesProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(InstanceReducer, instanceInitialState)

  return (
    <InstancesContext.Provider value={[state, dispatch]}>
      {children}
    </InstancesContext.Provider>
  )
}

export default InstancesProvider

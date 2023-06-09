'use client'

import React, { PropsWithChildren, useReducer } from 'react'
import { InstanceContext, instanceInitialState } from './instanceContext'
import { InstanceReducer } from './instanceReducer'

const InstanceProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(InstanceReducer, instanceInitialState)

  return (
    <InstanceContext.Provider value={[state, dispatch]}>
      {children}
    </InstanceContext.Provider>
  )
}

export default InstanceProvider

import { StaticImageData } from 'next/image'

export type InstanceLocation = {
  id: number
  name: string
  flag: string
}

export type InstanceType = {
  id: number
  os: string
  logo: string | StaticImageData
  versions: { id: number; version: string }[]
}

export type Step = 0 | 1 | 2 | 3 | 4 | 5

export type Instance = {
  location: InstanceLocation
  type: InstanceType
  step: Step
}

export type InstanceActions = {
  type: 'SET_TYPE' | 'SET_LOCATION' | 'SET_STEP'
  payload: Step | InstanceLocation | InstanceType
}

// | {
//     type: 'SET_TYPE'
//     payload: InstanceType
//   }
// | {
//     type: 'SET_LOCATION'
//     payload: InstanceLocation
//   }
// | { type: 'SET_STEP'; payload: { step: Step } }
// | {
//     type: 'RESET'
//   }

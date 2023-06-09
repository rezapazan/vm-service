import { StaticImageData } from 'next/image'

export type InstanceLocation = {
  id: number
  name: string
  flag: string
}

export type InstanceType = {
  id: number
  name: string
  logo: string | StaticImageData
  versions: string[]
}

type Step = 0 | 1 | 2 | 3 | 4 | 5

export type Instance = {
  location: InstanceLocation
  type: InstanceType
  step: Step
}

export type InstanceActions =
  | {
      type: 'SET_TYPE'
      payload: InstanceType
    }
  | {
      type: 'SET_LOCATION'
      payload: InstanceLocation
    }
  | { type: 'SET_STEP'; payload: { step: Step } }
  | {
      type: 'RESET'
    }

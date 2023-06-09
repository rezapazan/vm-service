import { StaticImageData } from 'next/image'

type Logo = string | StaticImageData

export type InstanceLocation = {
  id: number
  name: string
  flag: string
}

export type InstanceType = {
  id: number
  os: string
  logo: Logo
  versions: { id: number; version: string }[]
}

export type InstanceSelectedType = {
  id: number
  os: string
  logo: Logo
  version: string
}

export type Step = 1 | 2 | 3 | 4 | 5

export type Instance = {
  location: InstanceLocation
  type: InstanceType
  step: Step
}

export type InstanceState = {
  location: InstanceLocation
  type: InstanceSelectedType
  step: Step
}

export type InstanceActions = {
  type: 'SET_TYPE' | 'SET_LOCATION' | 'SET_STEP'
  payload: Step | InstanceLocation | InstanceSelectedType
}

export type Location = {
  id?: number
  name: string
  flag: string
}

export type Type = {
  name: string
  logo: string
  version: string
}

type Step = 0 | 1 | 2 | 3 | 4 | 5

export type Instance = {
  location: Location
  type: Type
  step: Step
}

export type InstanceActions =
  | {
      type: 'SET_TYPE'
      payload: Type
    }
  | {
      type: 'SET_Location'
      payload: Location
    }
  | { type: 'SET_STEP'; payload: { step: Step } }
  | {
      type: 'RESET'
    }

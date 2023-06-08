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

export type Instance = {
  location: Location
  type: Type
  step: 0 | 1 | 2 | 3 | 4 | 5
}

export type InstanceActions =
  | {
      type: 'SET_TYPE'
      payload: Type & { step: 2 }
    }
  | {
      type: 'SET_Location'
      payload: Location & { step: 1 }
    }
  | {
      type: 'RESET'
    }

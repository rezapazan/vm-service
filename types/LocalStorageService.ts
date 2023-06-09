import { InstanceLocation, InstanceType, Step } from './instances'

export interface ILSService {
  setInstance: (instance: InstanceType) => void
  clearInstance: () => void

  setInstanceLocation: (location: InstanceLocation) => void
  getInstanceLocation: () => InstanceLocation
  clearInstanceLocation: () => void

  setInstanceType: (instanceType: InstanceType) => void
  getInstanceType: () => InstanceType
  clearInstanceType: () => void

  setInstanceStep: (step: Step) => void
  getInstanceStep: () => Step
  clearInstanceStep: () => void
}

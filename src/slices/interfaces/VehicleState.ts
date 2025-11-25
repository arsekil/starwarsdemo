import { Vehicle } from '../../interfaces/Vehicle.ts'

export interface VehicleState {
  vehicles: {
    entities: Vehicle[]
    loading: boolean
    error: null | string
  }
}

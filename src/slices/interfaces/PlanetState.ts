import { Planet } from '../../interfaces/Planet.ts'

export interface PlanetState {
  planets: {
    entities: Planet[]
    loading: boolean
    error: null | string
  }
}

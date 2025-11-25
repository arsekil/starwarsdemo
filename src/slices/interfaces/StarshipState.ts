import { Starship } from '../../interfaces/Starship.ts'

export interface StarshipState {
  starships: {
    entities: Starship[]
    loading: boolean
    error: null | string
  }
}

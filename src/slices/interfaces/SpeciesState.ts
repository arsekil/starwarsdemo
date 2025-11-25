import { Species } from '../../interfaces/Species.ts'

export interface SpeciesState {
  species: {
    entities: Species[]
    loading: boolean
    error: null | string
  }
}

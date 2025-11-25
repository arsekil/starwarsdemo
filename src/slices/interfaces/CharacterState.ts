import { Character } from '../../interfaces/Character.ts'

export interface CharacterState {
  characters: {
    entities: Character[]
    loading: boolean
    error: null | string
  }
}

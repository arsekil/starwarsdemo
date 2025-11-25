import { Film } from '../../interfaces/Film.ts'

export interface FilmState {
  films: {
    entities: Film[]
    loading: boolean
    error: null | string
  }
}

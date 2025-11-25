import { Planet, Character, Film } from './index.ts'

export interface Species {
  id: number
  name: string
  classification: string
  designation: string
  average_height: string
  skin_colors: string
  hair_colors: string
  eye_colors: string
  average_lifespan: string
  src: string
  homeworld: Pick<Planet, 'id' | 'name'>[]
  language: string
  people: Pick<Character, 'id' | 'name'>[]
  films: Pick<Film, 'id' | 'name'>[]
  created: Date
  edited: Date
}

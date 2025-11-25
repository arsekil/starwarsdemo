import { Character, Film } from './index.ts'

export interface Planet {
  id: number
  name: string
  rotation_period: string
  orbital_period: string
  diameter: string
  climate: string
  gravity: string
  terrain: string
  surface_water: string
  src: string
  population: string
  residents: Pick<Character, 'id' | 'name'>[]
  films: Pick<Film, 'id' | 'name'>[]
  created: Date
  edited: Date
}

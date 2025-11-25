import { Planet, Film, Starship } from './index.ts'

export interface Character {
  id: number
  name: string
  height: string
  mass: string
  hair_color: string
  skin_color: string
  eye_color: string
  birth_year: string
  gender: string
  src: string
  homeworld: Pick<Planet, 'id' | 'name'>[]
  films: Pick<Film, 'id' | 'name'>[]
  species: []
  vehicles: { id: number; name: string }[]
  starships: Pick<Starship, 'id' | 'name'>[]
  created: Date
  edited: Date
}

import { Character, Planet, Starship, Species } from './index.ts'

export interface Film {
  id: number
  name: string
  src: string
  opening_crawl: string
  director: string
  producer: string
  release_date: string
  characters: Pick<Character, 'id' | 'name'>[]
  planets: Pick<Planet, 'id' | 'name'>[]
  starships: Pick<Starship, 'id' | 'name'>[]
  vehicles: { id: number; name: string }[]
  species: Pick<Species, 'id' | 'name'>[]
  created: Date
  edited: Date
}

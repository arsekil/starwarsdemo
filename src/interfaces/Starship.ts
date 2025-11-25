import { Film, Character } from './index.ts'

export interface Starship {
  id: number
  name: string
  model: string
  manufacturer: string
  cost_in_credits: number | null
  length: string
  max_atmosphering_speed: string
  crew: string
  passengers: string
  cargo_capacity: string
  consumables: string
  hyperdrive_rating: string
  MGLT: string
  starship_class: string
  src: string
  pilots: Pick<Character, 'id' | 'name'>[] | []
  films: Pick<Film, 'id' | 'name'>[]
  created: Date
  edited: Date
}

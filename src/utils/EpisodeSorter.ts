/* eslint-disable @typescript-eslint/no-explicit-any */

import { Film } from '../interfaces/index.ts'

export const episodeSorter = (toBeSorted: any, sortType: string, sortOrder: string) => {
  if (!toBeSorted) return toBeSorted

  const sortedEntities = [...toBeSorted]

  switch (sortType) {
    case 'Date':
      return sortedEntities.sort(
        (a: Film, b: Film) => new Date(a.release_date).getTime() - new Date(b.release_date).getTime()
      )
    case 'Name':
      return sortedEntities.sort((a: Film, b: Film) => a.name.localeCompare(b.name))
    case 'Episode':
      return sortedEntities.sort((a: Film, b: Film) => a.id - b.id)
    default:
      return sortedEntities
  }
}

/* eslint-enable @typescript-eslint/no-explicit-any */

/* eslint-disable @typescript-eslint/no-explicit-any */

export const vehicleSorter = (toBeSorted: any, sortType: string, sortOrder: string) => {
  if (!toBeSorted) return toBeSorted

  const sortedEntities = [...toBeSorted]

  if (sortOrder === 'vehicles') {
    switch (sortType) {
      case 'Cost in Credits':
        return sortedEntities.sort((a, b) => a.cost_in_credits - b.cost_in_credits)
      case 'Name':
        return sortedEntities.sort((a, b) => a.vehicle_name.localeCompare(b.vehicle_name))
      default:
        return sortedEntities
    }
  }

  if (sortOrder === 'starships') {
    switch (sortType) {
      case 'Cost in Credits':
        return sortedEntities.sort((a, b) => a.cost_in_credits - b.cost_in_credits)
      case 'Name':
        return sortedEntities.sort((a, b) => a.name.localeCompare(b.name))
      default:
        return sortedEntities
    }
  }
}

/* eslint-enable @typescript-eslint/no-explicit-any */

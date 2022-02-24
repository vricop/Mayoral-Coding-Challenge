export function toggleNumbersArray(array: number[], value: number): number[] {
  const numberSet = new Set(array)
  const action = numberSet.has(value) ? 'delete' : 'add'
  numberSet[action](value)

  return Array.from(numberSet.values())
}

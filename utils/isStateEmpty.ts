export function isStateEmpty(state: {}) {
  return [...Object.keys(state)].length === 0
}

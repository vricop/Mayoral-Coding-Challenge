export function setSlotInLocalStorage(key: string, state: {}) {
  localStorage.setItem(key, JSON.stringify(state))
}

export default function getSlotFromLocalStorage(key: string) {
  return JSON.parse(localStorage.getItem(key)!)
}

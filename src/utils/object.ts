export const isEmpty = (obj: object) => {
  for (const key in obj) return false
  return true
}

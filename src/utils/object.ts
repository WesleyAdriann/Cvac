export const isEmpty = (obj: object) => {
  // eslint-disable-next-line no-unreachable-loop
  for (const key in obj) return false
  return true
}

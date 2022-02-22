export const isEmpty = (obj: object | null) => {
  if (!obj) return true
  // eslint-disable-next-line no-unreachable-loop
  for (const key in obj) return false
  return true
}

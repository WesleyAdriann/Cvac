export const formatDate = (value: string) => {
  const clearDate = value.replace(/\D/g, '')

  if (clearDate.length === 8) return value

  const day = clearDate.slice(0, 2)
  const month = clearDate.slice(2, 4)
  const year = clearDate.slice(4, 8)

  if (!month) return day
  if (!year) return `${day}/${month}`
  return `${day}/${month}/${year}`
}

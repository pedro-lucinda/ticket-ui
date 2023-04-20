export function utcToMDY(inputDate: string): string {
  const date = new Date(inputDate)
  const day = String(date.getUTCDate()).padStart(2, '0')
  const month = String(date.getUTCMonth() + 1).padStart(2, '0')
  const year = String(date.getUTCFullYear()).slice(-2)
  return `${month}/${day}/${year}`
}

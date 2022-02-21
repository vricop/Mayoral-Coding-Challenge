type MonthsConfig = (
  language?: string,
  format?: 'long' | 'numeric' | '2-digit' | 'short' | 'narrow' | undefined
) => string[]

export const generateMonths: MonthsConfig = (
  language = 'en-US',
  format = 'long'
) => {
  const months = Array.from({ length: 12 }, (item, i) => {
    return new Date(0, i).toLocaleString(language, { month: format })
  })

  return months
}

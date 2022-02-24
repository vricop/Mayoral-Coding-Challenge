import { CalendarItem, DayColor, DayOfMonth, DayType, DayTypeID } from '@types'

export function groupInMounts(
  months: CalendarItem[] | undefined
): [string, DayOfMonth[]][] {
  if (months === undefined) return []

  let monthName: string, day: number, date: Date
  let dayObject: { day: number; type: DayType; id: DayTypeID; color: DayColor }
  const dateRegex = /(\d{4})(\d{2})(\d{2})/

  const groupedMonths = months?.reduce(
    (result, { fecha, tipoDs: type, tipoId: id, color }: CalendarItem) => {
      date = new Date(fecha.toString().replace(dateRegex, '$1-$2-$3'))
      monthName = date.toLocaleString('default', { month: 'long' })
      day = date.getDate()

      dayObject = {
        day,
        type,
        id,
        color,
      }

      if (result.has(monthName)) {
        result?.get(monthName)?.push(dayObject)
      } else {
        result.set(monthName, [dayObject])
      }

      return result
    },
    new Map<string, DayOfMonth[]>()
  )

  return Array.from(groupedMonths?.entries())
}

import { HolidaysCalendar } from '@/components/HolidaysCalendar'
import { groupInMounts } from '@/utils/groupInMonths'
import { CalendarItem, EmployeeDetails } from '@types'
import { useFetch } from 'hooks/fetchData'
import type { NextPage } from 'next'

type CalendarData = CalendarItem[]
type EmployeeData = EmployeeDetails[]

const Home: NextPage = () => {
  const { data: employees, loading: loadingEmployees } =
    useFetch<EmployeeData>(`/api/employees`)

  const { data: calendar, loading: loadingCalendar } =
    useFetch<CalendarData>(`/api/calendar`)

  // Leave only 2022 data
  const filteredCalendar = calendar.filter(({ fecha }) =>
    /2021\d{2}\d{2}/.test(fecha.toString())
  )

  const groupedCalendar = groupInMounts(filteredCalendar)

  return (
    <main className="container">
      {loadingEmployees && loadingCalendar ? (
        'Loading...'
      ) : (
        <HolidaysCalendar employees={employees} calendar={groupedCalendar} />
      )}
    </main>
  )
}

export default Home

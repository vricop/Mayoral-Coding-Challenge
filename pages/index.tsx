import { HolidaysCalendar } from '@/components/HolidaysCalendar'
import { Icon } from '@/components/Icon'
import { CalendarItem, Employee, EmployeeDetails } from '@types'
import { useFetch } from 'hooks/fetchData'
import type { NextPage } from 'next'

type CalendarData = CalendarItem[] | null
type EmployeeData = EmployeeDetails[] | null

const Home: NextPage = () => {
  const { data: employees, loading: loadingEmployees } =
    useFetch<EmployeeData>(`/api/employees`)

  const { data: calendar, loading: loadingCalendar } =
    useFetch<CalendarData>(`/api/calendar`)
  const filteredCalendar = calendar?.filter(({ fecha }) =>
    /2021\d{2}\d{2}/.test(fecha.toString())
  )

  return (
    <main className="container">
      {loadingEmployees ? (
        'Loading'
      ) : (
        <HolidaysCalendar employees={employees} />
      )}
    </main>
  )
}

export default Home

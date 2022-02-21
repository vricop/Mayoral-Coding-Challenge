import HolidaysCalendar from '@/components/HolidaysCalendar'
import { EmployeeDetails } from '@types'
import { useFetch } from 'hooks/fetchData'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  const {
    data,
    loading,
  }: {
    data: EmployeeDetails[] | null
    loading: boolean
  } = useFetch(`/api/employees`)

  return (
    <main className="container">
      {loading ? 'Loading' : <HolidaysCalendar employees={data} />}
    </main>
  )
}

export default Home

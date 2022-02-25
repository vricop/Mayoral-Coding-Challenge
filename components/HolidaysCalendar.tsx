import { Icon } from '@/components/Icon'
import { isDaySelected } from '@/utils/isDaySelected'
import { isStateEmpty } from '@/utils/isStateEmpty'
import getSlotFromLocalStorage, {
  setSlotInLocalStorage,
} from '@/utils/manageLocalStorage'
import { toggleNumbersArray } from '@/utils/toggleNumbersArray'
import {
  DayOfMonth,
  EmployeeDetails,
  VacationsLeft,
  VacationsTaken,
} from '@types'
import { MouseEvent, useEffect, useRef, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'

// Pastel colors
const colors = [
  'honeydew',
  'ivory',
  'lavender',
  'lavenderblush',
  'lemonchiffon',
  'lightcyan',
  'lightgoldenrodyellow',
  'mintcream',
  'mistyrose',
  'moccasin',
  'oldlace',
  'peachpuff',
]

export function HolidaysCalendar({
  employees,
  calendar,
}: {
  employees: EmployeeDetails[] | null
  calendar: [string, DayOfMonth[]][]
}) {
  const months = calendar?.map(month => month[0])
  const [offset, setOffset] = useState(0)
  const [vacationsLeft, setVacationsLeft] = useState<VacationsLeft>({})
  const [vacationsTaken, setVacationsTaken] = useState<VacationsTaken>({})

  const employeesHeader = useRef<HTMLTableCellElement | null>(null)

  useEffect(() => {
    if (employees === null) return

    let vacationsLeftTemp: VacationsLeft = {}

    employees.forEach(employee => {
      vacationsLeftTemp[employee.id] = 22
    })

    setVacationsLeft(vacationsLeftTemp)
  }, [employees])

  useEffect(() => {
    if ('vacationsLeft' in localStorage) {
      setVacationsLeft(getSlotFromLocalStorage('vacationsLeft'))
    }
    if ('vacationsTaken' in localStorage) {
      setVacationsTaken(getSlotFromLocalStorage('vacationsTaken'))
    }
  }, [])

  useEffect(() => {
    if (isStateEmpty(vacationsLeft)) return
    setSlotInLocalStorage('vacationsLeft', vacationsLeft)
  }, [vacationsLeft])

  useEffect(() => {
    if (isStateEmpty(vacationsTaken)) return
    setSlotInLocalStorage('vacationsTaken', vacationsTaken)
  }, [vacationsTaken])

  useEffect(() => {
    if (!employeesHeader?.current) return
    setOffset(employeesHeader.current.offsetWidth)
  }, [employeesHeader.current])

  function updateEmployeeVacationDetails(daySlot: HTMLSpanElement) {
    const userId: number = +daySlot.dataset.userId!
    const month: string = daySlot.dataset.month!
    const incomingDay = +daySlot.innerText

    setVacationsLeft(oldState => {
      // Toggle vacation days counter
      const value = vacationsTaken?.[userId]?.[month]?.includes(incomingDay)
        ? oldState[userId] + 1
        : oldState[userId] - 1

      return {
        ...oldState,
        [userId]: value,
      }
    })

    setVacationsTaken(oldState => {
      const oldValues = oldState?.[userId]?.[month]
      const isMonthPresent = oldValues ? true : false

      const value = isMonthPresent
        ? toggleNumbersArray(oldValues, incomingDay)
        : [incomingDay]

      return {
        ...oldState,
        [userId]: {
          ...oldState[userId],
          [month]: value,
        },
      }
    })
  }

  function handleClick(event: MouseEvent<HTMLSpanElement>) {
    const daySlot = event.currentTarget
    const userId = +daySlot.dataset.userId!

    // Stop if it's not a working day
    if (daySlot.id !== '') return

    // Stop if user has 0 vacation days remaining
    if (
      daySlot.getAttribute('aria-selected') === 'false' &&
      vacationsLeft[userId] === 0
    ) {
      const employee = employees?.find(employee => employee.id === userId)
      toast.warn(
        `${employee?.first_name} ${employee?.last_name}: ran out of vacation days`
      )
      return
    }

    updateEmployeeVacationDetails(daySlot)
  }

  return (
    <>
      <table className="calendar__table">
        <thead className="calendar__table-header">
          <tr>
            <th ref={employeesHeader} className="calendar__employees">
              Employees
            </th>
            {months?.map((month, index) => (
              <th
                key={month}
                style={{ backgroundColor: colors[index], left: offset }}
                className="calendar__month">
                {month}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {employees?.map(employee => (
            <tr key={employee.id} className="calendar__row">
              <th className="calendar__cell calendar__employee">
                <span className="calendar__employee-info">
                  <Icon className="calendar__employee-icon" name="user" />
                  <span
                    title={`${employee.first_name} ${employee.last_name}`}
                    className="calendar__employee-full-name">
                    {`${employee.first_name} ${employee.last_name}`}
                  </span>
                  <span
                    className="calendar__employee-chip"
                    data-reached={
                      vacationsLeft[employee.id] === 0 ? true : null
                    }>
                    {vacationsLeft[employee.id]}
                    /22
                  </span>
                </span>
              </th>
              {calendar.map(([month, days], index) => (
                <td key={`${month}-${index}`} className="calendar__cell">
                  <div className="calendar__month-days">
                    {days.map((day, index) => (
                      <span
                        aria-selected={isDaySelected(
                          vacationsTaken[employee.id]?.[month],
                          day.day
                        )}
                        className="calendar__month-day"
                        data-color={day.color}
                        data-user-id={employee.id}
                        data-month={month}
                        id={day.id}
                        key={`${day.id}${index}`}
                        onClick={handleClick}>
                        {day.day}
                      </span>
                    ))}
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <ToastContainer
        position="bottom-center"
        hideProgressBar={true}
        theme="dark"
        limit={1}
      />
    </>
  )
}

import { Icon } from '@/components/Icon'
import { DayOfMonth, EmployeeDetails } from '@types'
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

interface EmployeeVacation {
  [index: number]: { days: number }
}

export function HolidaysCalendar({
  employees,
  calendar,
}: {
  employees: EmployeeDetails[] | null
  calendar: [string, DayOfMonth[]][]
}) {
  const months = calendar?.map(month => month[0])
  const [offset, setOffset] = useState(0)
  const [employeeVacations, setEmployeeVacations] = useState<EmployeeVacation>(
    {}
  )
  const employeesHeader = useRef<HTMLTableCellElement | null>(null)

  useEffect(() => {
    if (employees === null) return
    const employeeVacationsTemp: EmployeeVacation = {}

    employees.forEach(({ id, total_holidays }) => {
      employeeVacationsTemp[id] = { days: total_holidays }
    })

    setEmployeeVacations(employeeVacationsTemp)
  }, [employees])

  useEffect(() => {
    if (!employeesHeader?.current) return
    setOffset(employeesHeader.current.offsetWidth)
  }, [employeesHeader.current])

  function toggleAriaSelected(node: HTMLSpanElement) {
    const ariaSelectedAttribute = node.getAttribute('aria-selected')
    const isSelected = ariaSelectedAttribute === 'true' ? 'false' : 'true'
    node.setAttribute('aria-selected', isSelected)
  }

  function toggleEmployeeVacationDaysCounter(node: HTMLSpanElement) {
    const userId: number = +node.dataset.userId!
    const isSelected = node.getAttribute('aria-selected') === 'true'

    setEmployeeVacations(oldState => {
      const valueTemp = oldState[userId].days
      // Toggle vacation days counter
      let value = isSelected ? valueTemp + -1 : valueTemp + 1

      return {
        ...oldState,
        [userId]: {
          days: value,
        },
      }
    })
  }

  function handleClick(event: MouseEvent<HTMLSpanElement>) {
    const node = event.currentTarget
    const userId = +node.dataset.userId!

    // Stop if it's not a working day
    if (node.id !== '') return

    // Stop if user has 0 vacation days remaining
    if (
      node.getAttribute('aria-selected') === 'false' &&
      employeeVacations[userId].days === 0
    ) {
      toast.warn(
        `${employees[userId].first_name} ${employees[userId].last_name}: ran out of vacation days`
      )
      return
    }

    toggleAriaSelected(node)
    toggleEmployeeVacationDaysCounter(node)
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
                      employeeVacations?.[employee?.id]?.days === 0
                        ? true
                        : null
                    }>
                    {employeeVacations?.[employee?.id]?.days}/22
                  </span>
                </span>
              </th>
              {calendar.map(([month, days], index) => (
                <td key={`${month}-${index}`} className="calendar__cell">
                  <div className="calendar__month-days">
                    {days.map((day, index) => (
                      <span
                        aria-selected="false"
                        className="calendar__month-day"
                        data-color={day.color}
                        data-user-id={employee.id}
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

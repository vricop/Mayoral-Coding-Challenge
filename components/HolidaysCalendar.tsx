import { Icon } from '@/components/Icon'
import { DayOfMonth, EmployeeDetails } from '@types'
import { MouseEvent, useEffect, useRef, useState } from 'react'

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
  const employeesHeader = useRef<HTMLTableCellElement | null>(null)

  console.dir({ months })

  useEffect(() => {
    if (!employeesHeader?.current) return
    setOffset(employeesHeader.current.offsetWidth)
  }, [employeesHeader.current])

  return (
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
                <span className="calendar__employee-chip">
                  0/{total_holidays}
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
  )
}

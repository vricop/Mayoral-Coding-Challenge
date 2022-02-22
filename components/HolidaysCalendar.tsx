import { generateMonths } from '@/utils/getMonths'
import { EmployeeDetails } from '@types'
import { useEffect, useRef, useState } from 'react'
import { Icon } from '@/components/Icon'

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
}: {
  employees: EmployeeDetails[] | null
}) {
  const months = generateMonths()
  const [offset, setOffset] = useState(0)
  const employeesHeader = useRef<HTMLTableCellElement | null>(null)

  useEffect(() => {
    if (!employeesHeader?.current) return
    setOffset(employeesHeader.current.offsetWidth)
  }, [])

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
        {employees?.map(({ first_name, last_name, id, total_holidays }) => (
          <tr key={id} className="calendar__row">
            <th className="calendar__cell calendar__employee">
              <span className="calendar__employee-info">
                <Icon className="calendar__employee-icon" name="user" />
                <span
                  title={`${first_name} ${last_name}`}
                  className="calendar__employee-full-name">
                  {`${first_name} ${last_name}`}
                </span>
                <span className="calendar__employee-chip">
                  0/{total_holidays}
                </span>
              </span>
            </th>
            <td className="calendar__cell">
              <div className="calendar__month-days">
                <span className="calendar__month-day">1</span>
                <span className="calendar__month-day">2</span>
                <span className="calendar__month-day">3</span>
                <span className="calendar__month-day">4</span>
                <span className="calendar__month-day">5</span>
                <span className="calendar__month-day">6</span>
                <span className="calendar__month-day">7</span>
                <span className="calendar__month-day">8</span>
                <span className="calendar__month-day">9</span>
                <span className="calendar__month-day">10</span>
                <span className="calendar__month-day">11</span>
                <span className="calendar__month-day">12</span>
                <span className="calendar__month-day">13</span>
                <span className="calendar__month-day">14</span>
                <span className="calendar__month-day">15</span>
                <span className="calendar__month-day">16</span>
                <span className="calendar__month-day">17</span>
                <span className="calendar__month-day">18</span>
                <span className="calendar__month-day">19</span>
                <span className="calendar__month-day">20</span>
                <span className="calendar__month-day">21</span>
                <span className="calendar__month-day">22</span>
                <span className="calendar__month-day">23</span>
                <span className="calendar__month-day">24</span>
                <span className="calendar__month-day">25</span>
                <span className="calendar__month-day">26</span>
                <span className="calendar__month-day">27</span>
                <span className="calendar__month-day">28</span>
                <span className="calendar__month-day">29</span>
                <span className="calendar__month-day">30</span>
                <span className="calendar__month-day">31</span>
              </div>
            </td>
            <td className="calendar__cell">
              <div className="calendar__month-days">
                <span className="calendar__month-day">1</span>
                <span className="calendar__month-day">2</span>
                <span className="calendar__month-day">3</span>
                <span className="calendar__month-day">4</span>
                <span className="calendar__month-day">5</span>
                <span className="calendar__month-day">6</span>
                <span className="calendar__month-day">7</span>
                <span className="calendar__month-day">8</span>
                <span className="calendar__month-day">9</span>
                <span className="calendar__month-day">10</span>
                <span className="calendar__month-day">11</span>
                <span className="calendar__month-day">12</span>
                <span className="calendar__month-day">13</span>
                <span className="calendar__month-day">14</span>
                <span className="calendar__month-day">15</span>
                <span className="calendar__month-day">16</span>
                <span className="calendar__month-day">17</span>
                <span className="calendar__month-day">18</span>
                <span className="calendar__month-day">19</span>
                <span className="calendar__month-day">20</span>
                <span className="calendar__month-day">21</span>
                <span className="calendar__month-day">22</span>
                <span className="calendar__month-day">23</span>
                <span className="calendar__month-day">24</span>
                <span className="calendar__month-day">25</span>
                <span className="calendar__month-day">26</span>
                <span className="calendar__month-day">27</span>
                <span className="calendar__month-day">28</span>
                <span className="calendar__month-day">29</span>
                <span className="calendar__month-day">30</span>
                <span className="calendar__month-day">31</span>
              </div>
            </td>
            <td className="calendar__cell">
              <div className="calendar__month-days">
                <span className="calendar__month-day">1</span>
                <span className="calendar__month-day">2</span>
                <span className="calendar__month-day">3</span>
                <span className="calendar__month-day">4</span>
                <span className="calendar__month-day">5</span>
                <span className="calendar__month-day">6</span>
                <span className="calendar__month-day">7</span>
                <span className="calendar__month-day">8</span>
                <span className="calendar__month-day">9</span>
                <span className="calendar__month-day">10</span>
                <span className="calendar__month-day">11</span>
                <span className="calendar__month-day">12</span>
                <span className="calendar__month-day">13</span>
                <span className="calendar__month-day">14</span>
                <span className="calendar__month-day">15</span>
                <span className="calendar__month-day">16</span>
                <span className="calendar__month-day">17</span>
                <span className="calendar__month-day">18</span>
                <span className="calendar__month-day">19</span>
                <span className="calendar__month-day">20</span>
                <span className="calendar__month-day">21</span>
                <span className="calendar__month-day">22</span>
                <span className="calendar__month-day">23</span>
                <span className="calendar__month-day">24</span>
                <span className="calendar__month-day">25</span>
                <span className="calendar__month-day">26</span>
                <span className="calendar__month-day">27</span>
                <span className="calendar__month-day">28</span>
                <span className="calendar__month-day">29</span>
                <span className="calendar__month-day">30</span>
                <span className="calendar__month-day">31</span>
              </div>
            </td>
            <td className="calendar__cell">
              <div className="calendar__month-days">
                <span className="calendar__month-day">1</span>
                <span className="calendar__month-day">2</span>
                <span className="calendar__month-day">3</span>
                <span className="calendar__month-day">4</span>
                <span className="calendar__month-day">5</span>
                <span className="calendar__month-day">6</span>
                <span className="calendar__month-day">7</span>
                <span className="calendar__month-day">8</span>
                <span className="calendar__month-day">9</span>
                <span className="calendar__month-day">10</span>
                <span className="calendar__month-day">11</span>
                <span className="calendar__month-day">12</span>
                <span className="calendar__month-day">13</span>
                <span className="calendar__month-day">14</span>
                <span className="calendar__month-day">15</span>
                <span className="calendar__month-day">16</span>
                <span className="calendar__month-day">17</span>
                <span className="calendar__month-day">18</span>
                <span className="calendar__month-day">19</span>
                <span className="calendar__month-day">20</span>
                <span className="calendar__month-day">21</span>
                <span className="calendar__month-day">22</span>
                <span className="calendar__month-day">23</span>
                <span className="calendar__month-day">24</span>
                <span className="calendar__month-day">25</span>
                <span className="calendar__month-day">26</span>
                <span className="calendar__month-day">27</span>
                <span className="calendar__month-day">28</span>
                <span className="calendar__month-day">29</span>
                <span className="calendar__month-day">30</span>
                <span className="calendar__month-day">31</span>
              </div>
            </td>
            <td className="calendar__cell">
              <div className="calendar__month-days">
                <span className="calendar__month-day">1</span>
                <span className="calendar__month-day">2</span>
                <span className="calendar__month-day">3</span>
                <span className="calendar__month-day">4</span>
                <span className="calendar__month-day">5</span>
                <span className="calendar__month-day">6</span>
                <span className="calendar__month-day">7</span>
                <span className="calendar__month-day">8</span>
                <span className="calendar__month-day">9</span>
                <span className="calendar__month-day">10</span>
                <span className="calendar__month-day">11</span>
                <span className="calendar__month-day">12</span>
                <span className="calendar__month-day">13</span>
                <span className="calendar__month-day">14</span>
                <span className="calendar__month-day">15</span>
                <span className="calendar__month-day">16</span>
                <span className="calendar__month-day">17</span>
                <span className="calendar__month-day">18</span>
                <span className="calendar__month-day">19</span>
                <span className="calendar__month-day">20</span>
                <span className="calendar__month-day">21</span>
                <span className="calendar__month-day">22</span>
                <span className="calendar__month-day">23</span>
                <span className="calendar__month-day">24</span>
                <span className="calendar__month-day">25</span>
                <span className="calendar__month-day">26</span>
                <span className="calendar__month-day">27</span>
                <span className="calendar__month-day">28</span>
                <span className="calendar__month-day">29</span>
                <span className="calendar__month-day">30</span>
                <span className="calendar__month-day">31</span>
              </div>
            </td>
            <td className="calendar__cell">
              <div className="calendar__month-days">
                <span className="calendar__month-day">1</span>
                <span className="calendar__month-day">2</span>
                <span className="calendar__month-day">3</span>
                <span className="calendar__month-day">4</span>
                <span className="calendar__month-day">5</span>
                <span className="calendar__month-day">6</span>
                <span className="calendar__month-day">7</span>
                <span className="calendar__month-day">8</span>
                <span className="calendar__month-day">9</span>
                <span className="calendar__month-day">10</span>
                <span className="calendar__month-day">11</span>
                <span className="calendar__month-day">12</span>
                <span className="calendar__month-day">13</span>
                <span className="calendar__month-day">14</span>
                <span className="calendar__month-day">15</span>
                <span className="calendar__month-day">16</span>
                <span className="calendar__month-day">17</span>
                <span className="calendar__month-day">18</span>
                <span className="calendar__month-day">19</span>
                <span className="calendar__month-day">20</span>
                <span className="calendar__month-day">21</span>
                <span className="calendar__month-day">22</span>
                <span className="calendar__month-day">23</span>
                <span className="calendar__month-day">24</span>
                <span className="calendar__month-day">25</span>
                <span className="calendar__month-day">26</span>
                <span className="calendar__month-day">27</span>
                <span className="calendar__month-day">28</span>
                <span className="calendar__month-day">29</span>
                <span className="calendar__month-day">30</span>
                <span className="calendar__month-day">31</span>
              </div>
            </td>
            <td className="calendar__cell">
              <div className="calendar__month-days">
                <span className="calendar__month-day">1</span>
                <span className="calendar__month-day">2</span>
                <span className="calendar__month-day">3</span>
                <span className="calendar__month-day">4</span>
                <span className="calendar__month-day">5</span>
                <span className="calendar__month-day">6</span>
                <span className="calendar__month-day">7</span>
                <span className="calendar__month-day">8</span>
                <span className="calendar__month-day">9</span>
                <span className="calendar__month-day">10</span>
                <span className="calendar__month-day">11</span>
                <span className="calendar__month-day">12</span>
                <span className="calendar__month-day">13</span>
                <span className="calendar__month-day">14</span>
                <span className="calendar__month-day">15</span>
                <span className="calendar__month-day">16</span>
                <span className="calendar__month-day">17</span>
                <span className="calendar__month-day">18</span>
                <span className="calendar__month-day">19</span>
                <span className="calendar__month-day">20</span>
                <span className="calendar__month-day">21</span>
                <span className="calendar__month-day">22</span>
                <span className="calendar__month-day">23</span>
                <span className="calendar__month-day">24</span>
                <span className="calendar__month-day">25</span>
                <span className="calendar__month-day">26</span>
                <span className="calendar__month-day">27</span>
                <span className="calendar__month-day">28</span>
                <span className="calendar__month-day">29</span>
                <span className="calendar__month-day">30</span>
                <span className="calendar__month-day">31</span>
              </div>
            </td>
            <td className="calendar__cell">
              <div className="calendar__month-days">
                <span className="calendar__month-day">1</span>
                <span className="calendar__month-day">2</span>
                <span className="calendar__month-day">3</span>
                <span className="calendar__month-day">4</span>
                <span className="calendar__month-day">5</span>
                <span className="calendar__month-day">6</span>
                <span className="calendar__month-day">7</span>
                <span className="calendar__month-day">8</span>
                <span className="calendar__month-day">9</span>
                <span className="calendar__month-day">10</span>
                <span className="calendar__month-day">11</span>
                <span className="calendar__month-day">12</span>
                <span className="calendar__month-day">13</span>
                <span className="calendar__month-day">14</span>
                <span className="calendar__month-day">15</span>
                <span className="calendar__month-day">16</span>
                <span className="calendar__month-day">17</span>
                <span className="calendar__month-day">18</span>
                <span className="calendar__month-day">19</span>
                <span className="calendar__month-day">20</span>
                <span className="calendar__month-day">21</span>
                <span className="calendar__month-day">22</span>
                <span className="calendar__month-day">23</span>
                <span className="calendar__month-day">24</span>
                <span className="calendar__month-day">25</span>
                <span className="calendar__month-day">26</span>
                <span className="calendar__month-day">27</span>
                <span className="calendar__month-day">28</span>
                <span className="calendar__month-day">29</span>
                <span className="calendar__month-day">30</span>
                <span className="calendar__month-day">31</span>
              </div>
            </td>
            <td className="calendar__cell">
              <div className="calendar__month-days">
                <span className="calendar__month-day">1</span>
                <span className="calendar__month-day">2</span>
                <span className="calendar__month-day">3</span>
                <span className="calendar__month-day">4</span>
                <span className="calendar__month-day">5</span>
                <span className="calendar__month-day">6</span>
                <span className="calendar__month-day">7</span>
                <span className="calendar__month-day">8</span>
                <span className="calendar__month-day">9</span>
                <span className="calendar__month-day">10</span>
                <span className="calendar__month-day">11</span>
                <span className="calendar__month-day">12</span>
                <span className="calendar__month-day">13</span>
                <span className="calendar__month-day">14</span>
                <span className="calendar__month-day">15</span>
                <span className="calendar__month-day">16</span>
                <span className="calendar__month-day">17</span>
                <span className="calendar__month-day">18</span>
                <span className="calendar__month-day">19</span>
                <span className="calendar__month-day">20</span>
                <span className="calendar__month-day">21</span>
                <span className="calendar__month-day">22</span>
                <span className="calendar__month-day">23</span>
                <span className="calendar__month-day">24</span>
                <span className="calendar__month-day">25</span>
                <span className="calendar__month-day">26</span>
                <span className="calendar__month-day">27</span>
                <span className="calendar__month-day">28</span>
                <span className="calendar__month-day">29</span>
                <span className="calendar__month-day">30</span>
                <span className="calendar__month-day">31</span>
              </div>
            </td>
            <td className="calendar__cell">
              <div className="calendar__month-days">
                <span className="calendar__month-day">1</span>
                <span className="calendar__month-day">2</span>
                <span className="calendar__month-day">3</span>
                <span className="calendar__month-day">4</span>
                <span className="calendar__month-day">5</span>
                <span className="calendar__month-day">6</span>
                <span className="calendar__month-day">7</span>
                <span className="calendar__month-day">8</span>
                <span className="calendar__month-day">9</span>
                <span className="calendar__month-day">10</span>
                <span className="calendar__month-day">11</span>
                <span className="calendar__month-day">12</span>
                <span className="calendar__month-day">13</span>
                <span className="calendar__month-day">14</span>
                <span className="calendar__month-day">15</span>
                <span className="calendar__month-day">16</span>
                <span className="calendar__month-day">17</span>
                <span className="calendar__month-day">18</span>
                <span className="calendar__month-day">19</span>
                <span className="calendar__month-day">20</span>
                <span className="calendar__month-day">21</span>
                <span className="calendar__month-day">22</span>
                <span className="calendar__month-day">23</span>
                <span className="calendar__month-day">24</span>
                <span className="calendar__month-day">25</span>
                <span className="calendar__month-day">26</span>
                <span className="calendar__month-day">27</span>
                <span className="calendar__month-day">28</span>
                <span className="calendar__month-day">29</span>
                <span className="calendar__month-day">30</span>
                <span className="calendar__month-day">31</span>
              </div>
            </td>
            <td className="calendar__cell">
              <div className="calendar__month-days">
                <span className="calendar__month-day">1</span>
                <span className="calendar__month-day">2</span>
                <span className="calendar__month-day">3</span>
                <span className="calendar__month-day">4</span>
                <span className="calendar__month-day">5</span>
                <span className="calendar__month-day">6</span>
                <span className="calendar__month-day">7</span>
                <span className="calendar__month-day">8</span>
                <span className="calendar__month-day">9</span>
                <span className="calendar__month-day">10</span>
                <span className="calendar__month-day">11</span>
                <span className="calendar__month-day">12</span>
                <span className="calendar__month-day">13</span>
                <span className="calendar__month-day">14</span>
                <span className="calendar__month-day">15</span>
                <span className="calendar__month-day">16</span>
                <span className="calendar__month-day">17</span>
                <span className="calendar__month-day">18</span>
                <span className="calendar__month-day">19</span>
                <span className="calendar__month-day">20</span>
                <span className="calendar__month-day">21</span>
                <span className="calendar__month-day">22</span>
                <span className="calendar__month-day">23</span>
                <span className="calendar__month-day">24</span>
                <span className="calendar__month-day">25</span>
                <span className="calendar__month-day">26</span>
                <span className="calendar__month-day">27</span>
                <span className="calendar__month-day">28</span>
                <span className="calendar__month-day">29</span>
                <span className="calendar__month-day">30</span>
                <span className="calendar__month-day">31</span>
              </div>
            </td>
            <td className="calendar__cell">
              <div className="calendar__month-days">
                <span className="calendar__month-day">1</span>
                <span className="calendar__month-day">2</span>
                <span className="calendar__month-day">3</span>
                <span className="calendar__month-day">4</span>
                <span className="calendar__month-day">5</span>
                <span className="calendar__month-day">6</span>
                <span className="calendar__month-day">7</span>
                <span className="calendar__month-day">8</span>
                <span className="calendar__month-day">9</span>
                <span className="calendar__month-day">10</span>
                <span className="calendar__month-day">11</span>
                <span className="calendar__month-day">12</span>
                <span className="calendar__month-day">13</span>
                <span className="calendar__month-day">14</span>
                <span className="calendar__month-day">15</span>
                <span className="calendar__month-day">16</span>
                <span className="calendar__month-day">17</span>
                <span className="calendar__month-day">18</span>
                <span className="calendar__month-day">19</span>
                <span className="calendar__month-day">20</span>
                <span className="calendar__month-day">21</span>
                <span className="calendar__month-day">22</span>
                <span className="calendar__month-day">23</span>
                <span className="calendar__month-day">24</span>
                <span className="calendar__month-day">25</span>
                <span className="calendar__month-day">26</span>
                <span className="calendar__month-day">27</span>
                <span className="calendar__month-day">28</span>
                <span className="calendar__month-day">29</span>
                <span className="calendar__month-day">30</span>
                <span className="calendar__month-day">31</span>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

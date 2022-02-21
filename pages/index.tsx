import { generateMonths } from '@/utils/getMonths'
import type { NextPage } from 'next'
import { useEffect, useRef, useState } from 'react'

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

const Home: NextPage = () => {
  const months = generateMonths()
  const [offset, setOffset] = useState(0)
  const employeesHeader = useRef<HTMLTableCellElement | null>(null)

  useEffect(() => {
    if (!employeesHeader?.current) return
    setOffset(employeesHeader.current.offsetWidth)
  }, [])

  return (
    <main className="container">
      <table className="calendar__table">
        <thead className="calendar__table-header">
          <tr>
            <th ref={employeesHeader} className="calendar__employees">
              Employees
            </th>
            {months?.map((month, index) => (
              <th
                style={{ backgroundColor: colors[index], left: offset }}
                className="calendar__month">
                {month}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {['Dave', 'Jack', 'Joe', 'Angelina'].map(name => (
            <tr className="calendar__row">
              <th className="calendar__cell calendar__employee">{name}</th>
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
    </main>
  )
}

export default Home

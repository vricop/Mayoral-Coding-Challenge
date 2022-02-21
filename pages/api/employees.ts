// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import employees from '../../__mocks__/employees.json'

interface EmployeeDetails {
  id: number
  first_name: string
  last_name: string
  total_holidays: number
}

interface Employee {
  '//': string
  data: EmployeeDetails[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Employee>
) {
  res.status(200).json(<Employee>employees)
}

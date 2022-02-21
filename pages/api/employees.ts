// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Employee } from '@types'
import type { NextApiRequest, NextApiResponse } from 'next'
import employees from '../../__mocks__/employees.json'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Employee>
) {
  res.status(200).json(<Employee>employees)
}

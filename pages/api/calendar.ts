// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Calendar } from '@types'
import type { NextApiRequest, NextApiResponse } from 'next'
import calendar from '../../__mocks__/calendar.json'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Calendar>
) {
  res.status(200).json(<Calendar>calendar)
}

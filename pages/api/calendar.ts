// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import calendar from '../../__mocks__/calendar.json'

interface CalendarItem {
  fecha: number
  tipoId: 'F' | 'S' | ''
  tipoDs:
    | 'Fin de Semana'
    | 'Dia Laborable'
    | 'Fin de Semana'
    | 'Festivo Laboral'
  color: 'AZUL' | 'ROJO' | 'BLANCO'
}

interface Calendar {
  errorCode: number
  errorMessage: null | string
  datos: CalendarItem[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Calendar>
) {
  res.status(200).json(<Calendar>calendar)
}

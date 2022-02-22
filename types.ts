import { HTMLAttributes } from 'react'

export type DayTypeID = 'F' | 'S' | ''

export type DayType =
  | 'Fin de Semana'
  | 'Dia Laborable'
  | 'Fin de Semana'
  | 'Festivo Laboral'

export interface CalendarItem {
  fecha: number
  tipoId: DayTypeID
  tipoDs: DayType
  color: 'AZUL' | 'ROJO' | 'BLANCO'
}

export interface Calendar {
  errorCode: number
  errorMessage: null | string
  data: CalendarItem[]
}

export interface DayOfMonth {
  day: number
  type: string
  id: DayTypeID
}

export interface EmployeeDetails {
  id: number
  first_name: string
  last_name: string
  total_holidays: number
}

export interface Employee {
  '//': string
  data: EmployeeDetails[]
}
export interface HolidaysCalendarProps {
  employees: EmployeeDetails[] | null
  // calendar: CalendarItem[] | null
}

export interface IconProps extends HTMLAttributes<SVGElement> {
  name: 'user'
  size?: string
  width?: string
  height?: string
  href?: string
}

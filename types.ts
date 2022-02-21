export interface CalendarItem {
  fecha: number
  tipoId: 'F' | 'S' | ''
  tipoDs:
    | 'Fin de Semana'
    | 'Dia Laborable'
    | 'Fin de Semana'
    | 'Festivo Laboral'
  color: 'AZUL' | 'ROJO' | 'BLANCO'
}

export interface Calendar {
  errorCode: number
  errorMessage: null | string
  data: CalendarItem[]
}

interface EmployeeDetails {
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
  employees: EmployeeDetails[]
  // calendar: Calendar
}

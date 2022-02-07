import * as yup from 'yup'
import { parse } from 'date-fns'

const minDiffDate = new Date(Date.UTC(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() - 1))

const parseDate = (_value: any, value: string) => {
  if (value.length === 10) return parse(value, 'dd/MM/yyyy', new Date())
  return value
}

const parseHour = (_value: any, value: string) => {
  if (value.length === 5) return parse(value, 'HH:mm', new Date())
  return value
}

export const validation = yup.object().shape({
  description: yup.string().required('Digite uma descrição'),
  date: yup.date().transform(parseDate).typeError('Informe uma data válida').max(minDiffDate, 'Informe uma data válida'),
  hour: yup.date().transform(parseHour).typeError('Informe um horário válido').max(minDiffDate, 'Informe um horário válido')
})

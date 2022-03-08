import * as yup from 'yup'
import { parse, differenceInMinutes, isFuture } from 'date-fns'

const minDiffDate = new Date(Date.UTC(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()) - 1)

const parseDate = (_value: any, value: string) => {
  if (value.length === 10) return parse(value, 'dd/MM/yyyy', new Date())
  return value
}

const parseHour = (_value: any, value: string) => {
  if (value.length === 5) return parse(value, "HH'h'mm", new Date())
  return value
}

export const validation = yup.object().shape({
  description: yup.string().required('Digite uma descrição'),
  date: yup.date().transform(parseDate).typeError('Informe uma data válida').min(minDiffDate, 'Informe uma data válida'),
  hour: yup.date().transform(parseHour).typeError('Informe um horário válido').test('invalidHour', 'Informe um horário válido', function () {
    if (typeof this.parent.date === 'string' || typeof this.parent.hour === 'string') return true
    const dateIsToday = !isFuture(this.parent.date)
    if (dateIsToday) {
      return differenceInMinutes(this.parent.hour, new Date()) > 1
    }
    return true
  })
})

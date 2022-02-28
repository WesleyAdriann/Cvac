import * as yup from 'yup'
import { parse } from 'date-fns'

const minDiffAge = new Date(Date.UTC(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 1))

const maxDiffAge = new Date(Date.UTC(new Date().getFullYear() - 120, new Date().getMonth(), new Date().getDate()))

const parseDate = (_value: any, value: string) => {
  if (value.length === 10) return parse(value, 'dd/MM/yyyy', new Date())
  return value
}

export const validation = yup.object().shape({
  name: yup.string().required('Digite um nome'),
  birthDate: yup
    .date()
    .transform(parseDate)
    .typeError('Informe uma data de nascimento válida')
    .max(minDiffAge, 'Informe uma data de nascimento válida')
    .min(maxDiffAge, 'Informe uma data de nascimento válida')
})

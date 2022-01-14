import * as yup from 'yup'

import { parse } from 'date-fns'

const minDiffAge = new Date(Date.UTC(new Date().getFullYear() - 18, new Date().getMonth(), new Date().getDate() + 1))

const maxDiffAge = new Date(Date.UTC(new Date().getFullYear() - 120, new Date().getMonth(), new Date().getDate()))

const parseDate = (_value: any, value: string) => {
  if (value.length === 10) return parse(value, 'dd/MM/yyyy', new Date())
  return value
}

const fullRegister = yup.object().shape({
  name: yup.string().required('Digite seu nome'),
  birthDate: yup.date().transform(parseDate).typeError('Informe uma data de nascimento válida').max(minDiffAge, 'Você não possui idade suficiente').min(maxDiffAge, 'Informe uma data de nascimento válida'),
  email: yup.string().required('Digite um e-mail').email('Digite um e-mail válido'),
  password: yup.string().required('Digite uma senha')
})

const socialRegister = yup.object().shape({
  name: yup.string().required('Digite seu nome'),
  birthDate: yup.date().transform(parseDate).typeError('Informe uma data de nascimento válida').max(minDiffAge, 'Você não possui idade suficiente').min(maxDiffAge, 'Informe uma data de nascimento válida')
})

export const validation = (isSocialRegister: boolean) => isSocialRegister ? socialRegister : fullRegister

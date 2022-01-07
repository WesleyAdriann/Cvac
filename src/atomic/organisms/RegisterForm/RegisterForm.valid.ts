import * as yup from 'yup'

import { parse } from 'date-fns'

const parseDate = (date: string) => parse(date, 'dd/MM/yyyy', new Date())

const fullRegister = yup.object().shape({
  name: yup.string().required('Digite seu nome'),
  birthDate: yup.date().transform(parseDate).typeError('Informe uma data de nascimento válida'),
  email: yup.string().required('Digite um e-mail').email('Digite um e-mail válido'),
  password: yup.string().required('Digite uma senha')
})

const socialRegister = yup.object().shape({
  name: yup.string().required('Digite seu nome'),
  birthDate: yup.date().transform(parseDate).typeError('Informe uma data de nascimento válida')
})

export const validation = (isSocialRegister: boolean) => isSocialRegister ? socialRegister : fullRegister

import * as yup from 'yup'

export const validation = yup.object().shape({
  email: yup.string().required('Digite um e-mail').email('Digite um e-mail válido'),
  password: yup.string().required('Digite uma senha')
})

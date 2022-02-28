import React, { useState } from 'react'

import { RegisterDependentsTemplate } from '~/atomic'
import { IRegisterDependentFormInputs } from '~/atomic/organisms'

export const RegisterDependents: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false)

  const onRegister = (form: IRegisterDependentFormInputs) => {
    setIsLoading(true)
  }

  return <RegisterDependentsTemplate form={{ onSubmit: onRegister, isLoading }}/>
}

import React from 'react'

import { AppPage } from '../../molecules'

import { RegisterDependentForm, IRegisterDependentForm } from '../../organisms'

export interface IRegisterDependentsTemplate {
  testID?: string
  form: IRegisterDependentForm
}

export const RegisterDependentsTemplate: React.FC<IRegisterDependentsTemplate> = ({
  testID = 'RegisterDependentsTemplate',
  form,
  ...props
}) => {
  return (
    <AppPage {...props}>
      <RegisterDependentForm {...form} />
    </AppPage>
  )
}

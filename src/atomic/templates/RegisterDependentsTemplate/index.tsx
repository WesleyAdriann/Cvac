import React from 'react'

import { AppPage, IAppPage } from '../../molecules'

import { RegisterDependentForm, IRegisterDependentForm } from '../../organisms'

export interface IRegisterDependentsTemplate extends Omit<IAppPage, 'children' | 'scroll'> {
  testID?: string
  form: IRegisterDependentForm
}

export const RegisterDependentsTemplate: React.FC<IRegisterDependentsTemplate> = ({
  testID = 'RegisterDependentsTemplate',
  form,
  ...props
}) => {
  return (
    <AppPage {...props} testID={testID} >
      <RegisterDependentForm {...form} />
    </AppPage>
  )
}

import React from 'react'

import { LoginTemplate } from '../../atomic/templates'

export const Login: React.FC = () => {
  const handleSubmitLoginEmail = () => {

  }

  const handleSubmitLoginSocial = (social: string) => {

  }

  return (
    <LoginTemplate
      form={{
        onSubmit: handleSubmitLoginEmail
      }}
      onPressSocial={handleSubmitLoginSocial}
      onPressRegister={() => console.log('foo')}
    />
  )
}

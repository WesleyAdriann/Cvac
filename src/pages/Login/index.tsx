import React from 'react'
import { Flex, TextInput } from '../../atomic/'

export const Login: React.FC = () => {
  return (
    <Flex safeAreaView>
      <TextInput label='Email'/>
      <TextInput label='Senha' type='password'/>
      <TextInput label='Distância máxima' affix='km'/>

    </Flex>
  )
}

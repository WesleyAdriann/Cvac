import React from 'react'
import { Flex, TextInput, Button, Text } from '../../atomic/'

export const Login: React.FC = () => {
  return (
    <Flex safeAreaView>
        <Flex padding={16}>
        <TextInput label='Email'/>
        <TextInput label='Senha' type='password'/>
        <TextInput label='Distância máxima' affix='km'/>
        <Button text='entrar' onPress={() => console.log('>>')}/>
        <Button text='entrar' mode='outlined' onPress={() => console.log('>>')}/>
        <Text >ou continue com</Text>
      </Flex>
    </Flex>
  )
}

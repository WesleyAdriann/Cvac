import React from 'react'
import { Image } from 'react-native'

import { Flex, Button, Text } from '../../atoms'
import { AppPage, HomeItem } from '../../molecules'

import Logotipo from '../../../assets/logotipo/logotipo.png'

export type TAuthItem = 'login' | 'logout' | 'register'
export type TMenuItem = 'calendar' | 'wallet' | 'local' | 'notification'

export interface IHomeTemplate {
  testID?: string
  isAuthenticated?: boolean
  username?: string
  onPressAuthItem: (item: TAuthItem) => void
  onPressMenuItem: (item: TMenuItem) => void
}

export const HomeTemplate: React.FC<IHomeTemplate> = ({
  testID = 'HomeTemplate',
  isAuthenticated = false,
  username = '',
  onPressAuthItem,
  onPressMenuItem,
  ...props
}) => {
  return (
    <AppPage testID={testID} {...props}>
      <Flex flexGrow={2} alignItems='center' justifyContent='center'>
        <Image source={Logotipo} />
      </Flex>
      <Flex flexGrow={1}>
        <Flex marginStyle='0 0 16px'>
          {
            isAuthenticated
              ? (
                <Flex flexDirection='row'>
                  <Text>Bem Vindo {username}</Text>
                  <Button text='sair' onPress={() => onPressAuthItem('logout')}/>
                </Flex>
                )
              : (
                <Flex flexDirection='row'>
                  <Button flex={1} text='login' onPress={() => onPressAuthItem('login')} marginStyle='0 16px 0 0' />
                  <Button flex={1} text='cadastrar' mode='outlined' onPress={() => onPressAuthItem('register')} />
                </Flex>
                )
          }
        </Flex>
        <Flex flexDirection='row' paddingStyle='0 0 16px'>
          <HomeItem icon='calendar' text='calendarios de vacinação' onPress={() => onPressMenuItem('calendar')} />
          <HomeItem icon='badge-account-horizontal-outline' text='carteira de vacinação' onPress={() => onPressMenuItem('wallet')} />
        </Flex>
        <Flex flexDirection='row'>
          <HomeItem icon='bell' text='lembretes de vacina' onPress={() => onPressMenuItem('notification')} />
          <HomeItem icon='map-marker' text='locais de vacinação' onPress={() => onPressMenuItem('local')} />

        </Flex>
      </Flex>
    </AppPage>
  )
}

import React from 'react'

import {AppPage} from '../../molecules'

import {Button, Flex} from '../../atoms'
import { ScrollView } from 'react-native'

export interface IWalletsTemplate {
  testID?: string
}

export const WalletsTemplate: React.FC<IWalletsTemplate> = ({
  testID = 'WalletTemplate',

  ...props
}) => {
  return(
    <AppPage testID={testID} {...props} scroll padding={16}>
      <Flex flex={1} justifyContent='center'>
        <ScrollView>
          <Button
            onPress={() => null}
            text='Pessoa X'
            mode='outlined'
            marginStyle='0 0 16px'    
        />
          <Button
            onPress={() => null}
            text='Pessoa Y'
            mode='outlined'
            marginStyle='0 0 16px'
          />
          <Button
            onPress={() => null}
            text='Pessoa Z'
            mode='outlined'
            marginStyle='0 0 16px'
          />        
        </ScrollView>
      </Flex>


      <Flex>
        <Button
          onPress={() => null}
          text='Cadastrar Dependente'
          mode='contained'
        />
      </Flex>

    </AppPage>
  )
}

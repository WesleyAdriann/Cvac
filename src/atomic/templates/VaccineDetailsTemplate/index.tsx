import React from 'react'

import { AppPage } from '../../molecules'
import { Text, Flex } from '../../atoms'


export interface IVaccineDetailsTemplate {
  testID?: string
}

export const VaccineDetailsTemplate: React.FC<IVaccineDetailsTemplate> = ({
  testID = 'VaccineDetails',

  ...props
}) => {
    return(
      <AppPage testID={testID} {...props} scroll padding={16}>
        <Text align='center' size={30}>
          Vacina X
        </Text>

        <Flex  marginStyle={20}>
          <Flex flexDirection='row'>
            <Flex>
              <Text>
                Idade: 
              </Text>
            </Flex>
            <Flex marginStart={10}>
              <Text>
                ao nascer 
              </Text>
            </Flex>
          </Flex>

          <Flex flexDirection='row'>
            <Flex>
              <Text>
                Dose: 
              </Text>
            </Flex>
            <Flex marginStart={10}>
              <Text>
                única
              </Text>
            </Flex>
          </Flex>

          <Flex flexDirection='row'>
            <Flex>
              <Text>
                Reações adversas: 
              </Text>
            </Flex>
            <Flex marginStart={11}>
              <Text>
                Y
              </Text>
            </Flex>
          </Flex>

          <Flex flexDirection='row'>
            <Flex>
              <Text>
                Contraindicação: 
              </Text>
            </Flex>
            <Flex marginStart={11}>
              <Text>
                X
              </Text>
            </Flex>
          </Flex>

          <Flex flexDirection='row'>
            <Flex>
              <Text>
                Prevenção: 
              </Text>
            </Flex>
            <Flex marginStart={11}>
              <Text>
                Z
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </AppPage>
    )
}

import React, { useState, useMemo } from 'react'

import { HelperText, TextInput as PaperTextInput } from 'react-native-paper'
import { TextInputProps } from 'react-native-paper/lib/typescript/components/TextInput/TextInput'
import { useTheme } from 'styled-components/native'

import { Flex } from '../../atoms'

import { assignTestId } from '../../../utils'

export interface ITextInput extends Omit<TextInputProps, 'error' | 'theme' | 'mode'> {
  testID?: string,
  description?: string,
  withError?: boolean
  type?: 'text' | 'password' | 'email'
  affix?: string
}

export const TextInput: React.FC<ITextInput> = ({
  testID = 'TextInput',
  description,
  withError,
  type = 'text',
  affix,
  ...props
}) => {
  const theme = useTheme()

  const [secureTextEntry, setSecureTextEntry] = useState<boolean>(type === 'password')

  const onChangeText = (text: string) => {
    const formatedText = text
    props?.onChangeText?.(formatedText)
  }

  const renderRightIcon = useMemo(() => {
    if (type === 'password') {
      return (
        <PaperTextInput.Icon
          name={secureTextEntry ? 'eye' : 'eye-off'}
          size={24}
          onPress={() => setSecureTextEntry(!secureTextEntry)}
          color={theme.colors.black60}
        />
      )
    }

    if (affix) {
      return (
        <PaperTextInput.Affix text={affix} />
      )
    }
    return null
  }, [secureTextEntry])

  return (
    <Flex testID={testID}>
      <PaperTextInput
        onChangeText={onChangeText}
        error={withError}
        {...assignTestId('TextInput', testID)}
        {...props}
        mode='outlined'
        secureTextEntry={secureTextEntry}
        right={renderRightIcon}
        autoCapitalize='none'
        keyboardType={type === 'email' ? 'email-address' : 'default'}
        outlineColor={theme.palette.outline}
      />
      <HelperText visible={!!description} type={withError ? 'error' : 'info'} {...assignTestId('Text', `${testID}_helper`)}>{description}</HelperText>
    </Flex>
  )
}

import React, { useState, useMemo } from 'react'
import { HelperText, TextInput as PaperTextInput } from 'react-native-paper'
import { TextInputProps } from 'react-native-paper/lib/typescript/components/TextInput/TextInput'
import { useTheme } from 'styled-components/native'

import { Flex } from '../../atoms'

import { assignTestId, formatDate, formatHour } from '~/utils'

export interface ITextInput extends Omit<TextInputProps, 'error' | 'theme' | 'mode'> {
  testID?: string,
  description?: string,
  withError?: boolean
  type?: 'text' | 'password' | 'email' | 'date' | 'number' | 'hour'
  affix?: string
}

const Component: React.FC<ITextInput> = ({
  testID = 'TextInput',
  description,
  withError,
  type = 'text',
  affix,
  ...props
}) => {
  const theme = useTheme()

  const [secureTextEntry, setSecureTextEntry] = useState<boolean>(type === 'password')

  const formatText = (value: string) => {
    if (type === 'date') return formatDate(value)
    if (type === 'email') return value.toLowerCase()
    if (type === 'number') return value.replace(/\D/g, '')
    if (type === 'hour') return formatHour(value)
    return value
  }

  const onChangeText = (text: string) => {
    const formatedText = formatText(text)
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

  const keyboardType = useMemo(() => {
    if (type === 'email') return 'email-address'
    if (type === 'number') return 'number-pad'
    return 'default'
  }, [type])

  return (
    <Flex testID={testID}>
      <PaperTextInput
        error={withError}
        {...assignTestId('TextInput', testID)}
        {...props}
        onChangeText={onChangeText}
        mode='outlined'
        secureTextEntry={secureTextEntry}
        right={renderRightIcon}
        keyboardType={keyboardType}
        outlineColor={theme.palette.outline}
        autoCapitalize={type === 'email' ? 'none' : 'sentences'}
        autoCorrect={type !== 'email'}
      />
      <HelperText visible={!!description} type={withError ? 'error' : 'info'} {...assignTestId('Text', `${testID}_helper`)}>{description}</HelperText>
    </Flex>
  )
}

export const TextInput = React.memo(Component)

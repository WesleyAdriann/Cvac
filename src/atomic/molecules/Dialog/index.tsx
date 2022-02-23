import React from 'react'
import { Modal } from 'react-native'
import { Dialog as PaperDialog } from 'react-native-paper'

import { assignTestId } from '~/utils'

import { Text, Button } from '../../atoms'

export interface IDialog {
  testID?: string
  visible: boolean
  title?: string
  content?: string
  onClose?: () => void
  onPressOk?: () => void
  btnOkText?: string
  onPressClose?: () => void
  btnCloseText?: string
}

const Component: React.FC<IDialog> = ({
  testID = 'Dialog',
  visible = false,
  title,
  content,
  onClose,
  onPressOk = () => null,
  btnOkText = 'Ok',
  onPressClose,
  btnCloseText = 'Fechar',
  ...props
}) => (
  <Modal visible={visible} transparent animationType='fade' {...assignTestId('Modal', testID)}>
    <PaperDialog {...props} visible onDismiss={onClose} >
      {!!title &&
        <PaperDialog.Title>{title}</PaperDialog.Title>
      }
      <PaperDialog.Content>
        <Text>{content}</Text>
      </PaperDialog.Content>
      <PaperDialog.Actions>
        {!!onPressClose &&
          <Button
            mode='text'
            text={btnCloseText}
            fontSize={16}
            onPress={() => {
              onClose?.()
              onPressClose?.()
            }}
          />}
        <Button
          mode='text'
          text={btnOkText}
          fontSize={16}
          onPress={() => {
            onClose?.()
            onPressOk?.()
          }}
        />
      </PaperDialog.Actions>
    </PaperDialog>
  </Modal>
)

export const Dialog = React.memo(Component)

import React from 'react'
import { Modal } from 'react-native'
import { Button, Dialog as PaperDialog } from 'react-native-paper'

import { assignTestId } from '../../../utils'

import { Text } from '../../atoms'

export interface IDialog {
  testID?: string
  visible: boolean
  title?: string
  content?: string
  onClose?: () => void
  onPressOk?: () => void
  onPressClose?: () => void
}

const Component: React.FC<IDialog> = ({
  testID = 'Dialog',
  visible = false,
  title,
  content,
  onClose,
  onPressOk,
  onPressClose,
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
        {!!onPressClose && <Button onPress={onPressClose}>Fechar</Button>}
        <Button onPress={onPressOk ?? onClose}>Ok</Button>
      </PaperDialog.Actions>
    </PaperDialog>
  </Modal>
)

export const Dialog = React.memo(Component)

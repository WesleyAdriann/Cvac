import { Platform } from 'react-native'

interface ITestID {
  accessible?: boolean
  testID: string
  accessibilityLabel?: string
}

type TComponentType =
  | 'View'
  | 'ScrollView'
  | 'TextInput'
  | 'Text'
  | 'SafeAreaView'
  | 'Pressable'
  | 'Modal'

export const assignTestId = (
  componentType: TComponentType,
  componentId: string
): ITestID => {
  const id = `${componentType}_${componentId}`
  return Platform.OS === 'android'
    ? {
        testID: id,
        accessible: true,
        accessibilityLabel: id
      }
    : {
        testID: id,
        accessible: false
      }
}
export const mockTestID = (
  componentType: TComponentType,
  componentId: string
): ITestID => assignTestId(componentType, componentId)

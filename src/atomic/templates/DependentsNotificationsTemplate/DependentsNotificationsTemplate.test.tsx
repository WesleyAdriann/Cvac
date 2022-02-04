import React from 'react'
import { render, cleanup } from '@testing-library/react-native'

import { AllTheProviders as wrapper, mockTestID } from '../../../utils'

import { DependentsNotificationsTemplate, IDependentsNotificationsTemplate } from './index'

describe('Templates/DependentsNotificationsTemplate', () => {
  const props: IDependentsNotificationsTemplate = {
    testID: 'DependentsNotificationsTemplate',
    onPress: jest.fn()
  }

  const elContainer = mockTestID('SafeAreaView', props.testID!).testID

  const renderComponent = () => render(<DependentsNotificationsTemplate {...props} />, { wrapper })
  let component = renderComponent()

  beforeEach(() => {
    jest.clearAllMocks()
    cleanup()
    component = renderComponent()
  })

  it(`should render component #${elContainer}`, async () => {
    const sut = await component.findByTestId(elContainer)
    expect(sut).toBeTruthy()
  })

  it('should render snapshot', () => {
    expect(component.toJSON()).toMatchSnapshot()
  })
})

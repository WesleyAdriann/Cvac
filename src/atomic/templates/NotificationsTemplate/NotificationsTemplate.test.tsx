import React from 'react'
import { render, cleanup } from '@testing-library/react-native'

import { AllTheProviders as wrapper, mockTestID } from '~/utils'

import { NotificationsTemplate, INotificationsTemplate } from './index'

describe('Templates/NotificationsTemplate', () => {
  const props: INotificationsTemplate = {
    testID: 'NotificationsTemplate',
    onPressCreate: jest.fn(),
    onPressNotification: jest.fn(),
    defaultNotifications: [],
    customNotifications: []
  }

  const elContainer = mockTestID('SafeAreaView', props.testID!).testID

  const renderComponent = () => render(<NotificationsTemplate {...props} />, { wrapper })
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

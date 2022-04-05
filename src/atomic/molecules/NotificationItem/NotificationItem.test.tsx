import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react-native'

import { AllTheProviders as wrapper, mockTestID } from '~/utils'

import { NotificationItem, INotificationItem } from './index'

describe('Molecules/NotificationItem', () => {
  const props: INotificationItem = {
    testID: 'NotificationItem',
    onPress: jest.fn(),
    day: '25',
    month: 'Janeiro',
    descriptions: [],
    title: 'Vaccina',
    year: '2022'
  }

  const elContainer = mockTestID('Pressable', props.testID!).testID

  const renderComponent = () => render(<NotificationItem {...props} />, { wrapper })
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

  it(`should call onPress prop when press #${elContainer}`, async () => {
    const sut = await component.findByTestId(elContainer)
    expect(props.onPress).not.toBeCalled()
    fireEvent(sut, 'press')
    expect(props.onPress).toBeCalled()
  })

  it('should render snapshot', () => {
    expect(component.toJSON()).toMatchSnapshot()
  })
})

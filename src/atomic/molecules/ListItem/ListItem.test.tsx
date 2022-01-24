import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react-native'

import { AllTheProviders as wrapper, mockTestID } from '../../../utils'

import { ListItem, IListItem } from './index'

describe('Molecules/ListItem', () => {
  const props: IListItem = {
    testID: 'HomeItem',
    onPress: jest.fn(),
    text: 'Sample'
  }

  const elContainer = mockTestID('View', props.testID!).testID

  const renderComponent = () => render(<ListItem {...props} />, { wrapper })
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

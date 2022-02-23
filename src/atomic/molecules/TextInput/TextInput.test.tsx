import React from 'react'
import { render, cleanup } from '@testing-library/react-native'

import { AllTheProviders as wrapper, mockTestID } from '~/utils'

import { TextInput, ITextInput } from './index'

describe('Molecules/TextInput', () => {
  const props: ITextInput = {
    testID: 'TextInput'
  }

  const elContainer = mockTestID('TextInput', props.testID!).testID

  const renderComponent = () => render(<TextInput {...props} />, { wrapper })
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

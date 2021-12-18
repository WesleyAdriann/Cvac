import React from 'react'
import { render, cleanup } from '@testing-library/react-native'

import { AllTheProviders as wrapper, mockTestID } from '../../../utils'

import { LoginForm, ILoginForm } from './index'

describe('Organisms/LoginForm', () => {
  const props: ILoginForm = {
    testID: 'LoginForm',
    onSubmit: jest.fn()
  }

  const elContainer = mockTestID('View', props.testID!).testID

  const renderComponent = () => render(<LoginForm {...props} />, { wrapper })
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

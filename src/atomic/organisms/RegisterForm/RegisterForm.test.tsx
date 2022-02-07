import React from 'react'
import { render, cleanup } from '@testing-library/react-native'

import { AllTheProviders as wrapper, mockTestID } from '../../../utils'

import { RegisterForm, IRegisterForm } from './index'

describe('Organisms/RegisterForm', () => {
  const props: IRegisterForm = {
    testID: 'RegisterForm',
    isSocialRegister: false,
    onSubmit: jest.fn()
  }

  const elContainer = mockTestID('View', props.testID!).testID

  const renderComponent = () => render(<RegisterForm {...props} />, { wrapper })
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

import React from 'react'
import { render, cleanup } from '@testing-library/react-native'

import { AllTheProviders as wrapper, mockTestID } from '~/utils'

import { RegisterNotificationsForm, IRegisterNotificationsForm } from './index'

describe('Organisms/RegisterNotificationsForm', () => {
  const props: IRegisterNotificationsForm = {
    testID: 'RegisterNotificationsForm',
    onSubmit: jest.fn()
  }

  const elContainer = mockTestID('View', props.testID!).testID

  const renderComponent = () => render(<RegisterNotificationsForm {...props} />, { wrapper })
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

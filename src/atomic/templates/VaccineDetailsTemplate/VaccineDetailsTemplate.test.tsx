import React from 'react'
import { render, cleanup } from '@testing-library/react-native'

import { AllTheProviders as wrapper, mockTestID } from '../../../utils'

import { VaccineDetailsTemplate, IVaccineDetailsTemplate } from './index'

describe('Templates/VaccineDetailsTemplate', () => {
  const props: IVaccineDetailsTemplate = {
    testID: 'VaccineDetailsTemplate'
  }

  const elContainer = mockTestID('SafeAreaView', props.testID!).testID

  const renderComponent = () => render(<VaccineDetailsTemplate {...props} />, { wrapper })
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

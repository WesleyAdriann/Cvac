import React from 'react'
import { render, cleanup } from '@testing-library/react-native'

import { AllTheProviders as wrapper, mockTestID } from '~/utils'

import { VaccineCertificatesTemplate, IVaccineCertificatesTemplate } from './index'

describe('Templates/VaccineCertificatesTemplate', () => {
  const props: IVaccineCertificatesTemplate = {
    testID: 'VaccineCertificatesTemplate',
    onPressSave: jest.fn(),
    onPressVaccine: jest.fn()
  }

  const elContainer = mockTestID('SafeAreaView', props.testID!).testID

  const renderComponent = () => render(<VaccineCertificatesTemplate {...props} />, { wrapper })
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

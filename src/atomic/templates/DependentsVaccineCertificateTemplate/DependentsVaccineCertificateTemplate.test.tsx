
import React from 'react'
import { render, cleanup } from '@testing-library/react-native'

import { AllTheProviders as wrapper, mockTestID } from '../../../utils'

import { DependentsVaccineCertificateTemplate, IDependentsVaccineCertificateTemplate } from './index'

describe('Templates/DependentsVaccineCertificateTemplate', () => {
  const props: IDependentsVaccineCertificateTemplate = {
    testID: 'DependentsVaccineCertificateTemplate',
    onPressDependent: jest.fn(),
    onPressRegister: jest.fn()
  }

  const elContainer = mockTestID('SafeAreaView', props.testID!).testID

  const renderComponent = () => render(<DependentsVaccineCertificateTemplate {...props} />, { wrapper })
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

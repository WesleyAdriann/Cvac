import React from 'react'
import { render, cleanup } from '@testing-library/react-native'

import { AllTheProviders as wrapper, mockTestID } from '~/utils'

import { VaccineDose, IVaccineDose } from './index'

describe('Molecules/VaccineDose', () => {
  const props: IVaccineDose = {
    testID: 'VaccineDose',
    onPress: jest.fn(),
    text: '1 dose'
  }

  const elContainer = mockTestID('Pressable', props.testID!).testID

  const renderComponent = () => render(<VaccineDose {...props} />, { wrapper })
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

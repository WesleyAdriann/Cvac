import React from 'react'
import { View } from 'react-native'
import { render, cleanup } from '@testing-library/react-native'

import { AllTheProviders as wrapper, mockTestID } from '~/utils'

import { Accordion, IAccordion } from './index'

describe('Molecules/Accordion', () => {
  const props: IAccordion = {
    testID: 'Accordion',
    text: 'Sample',
    children: <View />
  }

  const elContainer = mockTestID('View', props.testID!).testID

  const renderComponent = () => render(<Accordion {...props} />, { wrapper })
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

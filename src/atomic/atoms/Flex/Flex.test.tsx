import React from 'react'
import { View } from 'react-native'
import { render, cleanup } from '@testing-library/react-native'

import { AllTheProviders as wrapper, mockTestID } from '~/utils'

import { Flex, IFlex } from './index'

describe('Atoms/Flex', () => {
  const props: IFlex = {
    testID: 'Flex',
    children: <View/>
  }

  const elContainer = mockTestID('View', props.testID!).testID

  const renderComponent = () => render(<Flex {...props} />, { wrapper })
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

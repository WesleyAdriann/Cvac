import React from 'react'
import { View } from 'react-native'
import { render, cleanup } from '@testing-library/react-native'

import { AllTheProviders as wrapper, mockTestID } from '~/utils'

import { Pressable, IPressable } from './index'

describe('Atoms/Pressable', () => {
  const props: IPressable = {
    testID: 'Pressable',
    children: <View/>
  }

  const elContainer = mockTestID('Pressable', props.testID!).testID

  const renderComponent = () => render(<Pressable {...props} />, { wrapper })
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

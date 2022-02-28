
import React from 'react'
import { render, cleanup } from '@testing-library/react-native'

import { AllTheProviders as wrapper, mockTestID } from '~/utils'

import { HomeTemplate, IHomeTemplate } from './index'

describe('Templates/HomeTemplate', () => {
  const props: IHomeTemplate = {
    testID: 'HomeTemplate',
    onPressAuthItem: jest.fn(),
    onPressMenuItem: jest.fn(),
    authIsLoading: false
  }

  const elContainer = mockTestID('SafeAreaView', props.testID!).testID

  const renderComponent = () => render(<HomeTemplate {...props} />, { wrapper })
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

import React from 'react'
import { render, cleanup } from '@testing-library/react-native'

import { TestsProviders as wrapper, mockTestID } from '../../../utils'

import { AppHeader, IAppHeader } from './index'

describe('Molecules/AppHeader', () => {
  const props: IAppHeader = {
    testID: 'AppHeader',
    options: {
      title: 'AppHeader'
    }
  }

  const elContainer = mockTestID('View', props.testID!).testID

  const renderComponent = () => render(<AppHeader {...props} />, { wrapper })
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

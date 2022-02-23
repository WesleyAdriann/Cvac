import React from 'react'
import { render, cleanup } from '@testing-library/react-native'

import { AllTheProviders as wrapper, mockTestID } from '~/utils'

import { Dialog, IDialog } from './index'

describe('Molecules/Dialog', () => {
  const props: IDialog = {
    testID: 'Dialog',
    visible: true,
    content: 'Title',
    onClose: jest.fn()
  }

  const elContainer = mockTestID('Modal', props.testID!).testID

  const renderComponent = () => render(<Dialog {...props} />, { wrapper })
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

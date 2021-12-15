import styled, { css } from 'styled-components/native'

import { ICustomStyle } from './index'

export const style = css<ICustomStyle>`
  margin: ${({ margin }) => (typeof margin === 'number') ? `${margin}px` : (margin ?? 0)};
  padding: ${({ padding }) => (typeof padding === 'number') ? `${padding}px` : (padding ?? 0)}
`

export const StyledView = styled.View`
  ${style}
`

export const StyledSafeAreaView = styled.SafeAreaView`
 ${style}
`

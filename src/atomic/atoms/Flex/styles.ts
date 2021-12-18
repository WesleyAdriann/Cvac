import styled, { css } from 'styled-components/native'

import { ICustomStyle } from './index'

export const style = css<ICustomStyle>`
  margin: ${({ marginStyle }) => (typeof marginStyle === 'number') ? `${marginStyle}px` : (marginStyle ?? 0)};
  padding: ${({ paddingStyle }) => (typeof paddingStyle === 'number') ? `${paddingStyle}px` : (paddingStyle ?? 0)};
`

export const StyledView = styled.View`
  ${style}
`

export const StyledSafeAreaView = styled.SafeAreaView`
 ${style}
`

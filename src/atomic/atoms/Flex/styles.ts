import styled, { css } from 'styled-components/native'

import { IFlexCustomStyle } from './index'

export const style = css<IFlexCustomStyle>`
  margin: ${({ marginStyle }) => (typeof marginStyle === 'number') ? `${marginStyle}px` : (marginStyle ?? 0)};
  padding: ${({ paddingStyle }) => (typeof paddingStyle === 'number') ? `${paddingStyle}px` : (paddingStyle ?? 0)};

  ${({ flexGrow }) => flexGrow && css`
    flexGrow: ${flexGrow};
  `}
`

export const StyledView = styled.View`
  ${style}
`

export const StyledSafeAreaView = styled.SafeAreaView`
 ${style}
`

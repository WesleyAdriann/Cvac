import styled, { css } from 'styled-components/native'

import { IFlexCustomStyle } from './index'

const style = css<IFlexCustomStyle>`
  margin: ${({ marginStyle }) => (typeof marginStyle === 'number') ? `${marginStyle}px` : (marginStyle ?? 0)};
  padding: ${({ paddingStyle }) => (typeof paddingStyle === 'number') ? `${paddingStyle}px` : (paddingStyle ?? 0)};
  flex-direction: ${({ flexDirection }) => flexDirection ?? 'column'};

  ${({ flex }) => flex && css`
    flex: ${flex};
  `}
`

export const StyledView = styled.View`
  ${style}
`

export const StyledSafeAreaView = styled.SafeAreaView`
 ${style}
`

export const StyledScroll = styled.ScrollView.attrs<IFlexCustomStyle>((props) => ({
  contentContainerStyle: {
    padding: props.paddingStyle,
    flexGrow: 1,
    ...props.contentContainerStyle
  }
}))`
 ${style}
 padding: 0px;
`

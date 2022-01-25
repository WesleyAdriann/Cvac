import styled from 'styled-components/native'

import MapView from 'react-native-maps'

export const StyledMap = styled(MapView).attrs(() => ({
  showsUserLocation: true
}))`
  flex: 1;
`

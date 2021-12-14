import React from 'react'
import { Provider as PaperProvider } from 'react-native-paper'
import { ThemeProvider } from 'styled-components'

import { theme, paperTheme } from '../tokens'

export const TestsProviders: React.FC = ({ children }) => (
  <PaperProvider theme={paperTheme} >
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  </PaperProvider>
)

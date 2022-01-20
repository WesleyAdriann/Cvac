import React from 'react'
import { Provider as PaperProvider } from 'react-native-paper'
import { Provider as ReduxProvider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { ThemeProvider } from 'styled-components/native'

import { store, persistor } from './store'
import { theme, paperTheme } from './tokens'

import { Pages } from './pages'

export const App: React.FC = () => (
  <ReduxProvider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <PaperProvider theme={paperTheme}>
        <ThemeProvider theme={theme}>
          <Pages />
        </ThemeProvider>
      </PaperProvider>
    </PersistGate>
  </ReduxProvider>
)

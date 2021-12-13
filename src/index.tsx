import React from 'react'
import { Provider as PaperProvider, DefaultTheme as PaperTheme } from 'react-native-paper'
import { Provider as ReduxProvider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { ThemeProvider } from 'styled-components/native'

import { store, persistor } from './store'
import { useSessionControl } from './hooks/useSessionControl'
import { theme } from './tokens'

import { Pages } from './pages'

export const App: React.FC = () => {
  useSessionControl()

  const paperTheme = {
    ...PaperTheme,
    colors: {
      ...PaperTheme.colors,
      primary: '#3498db',
      accent: '#f1c40f'
    }
  }

  return (
    <ReduxProvider store={store} >
      <PersistGate loading={null} persistor={persistor}>
        <PaperProvider theme={paperTheme}>
          <ThemeProvider theme={theme}>
          <Pages />
          </ThemeProvider>
        </PaperProvider>
      </PersistGate>
    </ReduxProvider>
  )
}

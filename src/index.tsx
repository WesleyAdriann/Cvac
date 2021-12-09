import React from 'react'

import { Provider as PaperProvider } from 'react-native-paper'

import { Pages } from './pages'

export const App: React.FC = () => {
  return (
    <PaperProvider>
      <Pages />
    </PaperProvider>
  )
}

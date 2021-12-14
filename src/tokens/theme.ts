import { DefaultTheme as PaperTheme } from 'react-native-paper'

export const theme = {
  fontColor: '#424242',
  fontColorInvert: '#fff',
  backgroundColor: '#fff',

  palette: {
    primary: '#00C9D2',
    secondary: '#F1FAFC',
    complementary1: '#27525C',
    complementary2: '#C24023',
    complementary3: '#00A3C9'
  },
  colors: {
    white: '#fff'
  }
}
export type TTheme = typeof theme

export const paperTheme = {
  ...PaperTheme,
  colors: {
    ...PaperTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f'
  }
}

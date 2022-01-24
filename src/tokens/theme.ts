import { DefaultTheme as PaperTheme } from 'react-native-paper'

export const theme = {
  fontColor: '#424242',
  fontColorInvert: '#fff',
  backgroundColor: '#fff',
  fontSize: 16,

  palette: {
    primary: '#00C9D2',
    secondary: '#F1FAFC',
    complementary1: '#27525C',
    complementary2: '#C24023',
    complementary3: '#00A3C9',
    outline: '#0000001f',
    surface: '#212121cc'
  },
  colors: {
    black60: '#00000099',
    white: '#fff',
    black: '#000'
  }
}

export const paperTheme: typeof PaperTheme = {
  ...PaperTheme,
  colors: {
    ...PaperTheme.colors,
    primary: theme.palette.primary,
    accent: theme.palette.complementary1,
    text: theme.fontColor,
    background: theme.backgroundColor
  }
}

export type TTheme = typeof theme

import 'styled-components'
import { TTheme } from '.'

declare module 'styled-components' {
  export interface DefaultTheme extends TTheme {}
}

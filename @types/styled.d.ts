import 'styled-components'
import { TTheme } from '../src/tokens'

declare module 'styled-components' {
  export interface DefaultTheme extends TTheme {}
}

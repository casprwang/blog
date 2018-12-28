import { createGlobalStyle } from 'styled-components'
import { resets } from 'theme/reset.js'
import { typography } from 'theme/typography.js'

export default createGlobalStyle`
  @font-face {
    font-family: 'Source Code Pro', monospace;
    src: url('https://fonts.googleapis.com/css?family=Source+Code+Pro');
  }
  ${resets}
  ${typography}
`

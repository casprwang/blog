import styled, { injectGlobal } from 'styled-components'
import { resets } from './reset.js'
import { typography } from './typography.js'

injectGlobal`
  @font-face {
    font-family: 'Source Code Pro';
    src: url('https://fonts.googleapis.com/css?family=Source+Code+Pro');
  }
  ${resets}
  ${typography}
`

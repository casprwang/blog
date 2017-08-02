import styled ,{ injectGlobal } from 'styled-components'
import { resets } from './reset.js'
import { typography } from './typography.js'

injectGlobal`
  ${resets}
  ${typography}
`

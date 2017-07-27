import { injectGlobal } from 'styled-components'
import { resets } from './reset.js'
import { Colors } from './variables.js'

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Muli');
  @import url('https://fonts.googleapis.com/css?family=Work+Sans');

  ${resets}

  html,
  body {
    font-family: 'Muli', sans-serif;
    background-color: ${Colors.background};
    font-size: 16px;
    line-height: 1.5;
  }

  h1 {
    font-weight: 400;
    font-size: 3.8em;
    line-height: 75px;
  }

  p {
    font-family: 'Work Sans', sans-serif;
    color: ${Colors.p};
  }

  header {
    display: block;
  }
`

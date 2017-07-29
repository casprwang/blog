import styled from 'styled-components'
import { Colors } from './variables.js'

export const typography = `
  @import url('https://fonts.googleapis.com/css?family=Muli');
  @import url('https://fonts.googleapis.com/css?family=Work+Sans');

  html,
  body {
    font-family: 'Muli', sans-serif;
    font-size: 16px;
    line-height: 1.5;
  }

  h1 {
    font-size: 2.027em;
  }

  h2 {
    font-size: 1.62em;
  }

  h3 {
    font-size: 1.424em;
  }

  h4 {
    font-size: 1.266em;
  }

  h5 {
    font-size: 1em;
  }

  h6 {
    font-size: 0.72em;
  }

  p {
    font-family: 'Work Sans', sans-serif;
    color: ${Colors.p};
  }
`

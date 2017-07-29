import styled from 'styled-components'

export const Footer = styled.footer`
  float: right;
  ul {
    li {
      display: inline-block;
      padding: .2em;
      a {
        position: relative;
    }
    li:after {
      content: " \\ ";
      }
    }
  }
`

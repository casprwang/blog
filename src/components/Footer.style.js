import styled from 'styled-components'

export const Footer = styled.footer`
  margin-top: 2em;
  margin-bottom: 2em;
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

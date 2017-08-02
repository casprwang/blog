import styled from 'styled-components'
import { media } from 'theme/utils/media'

export const Footer = styled.footer`
  font-size: .9em;
  margin-top: 4em;
  margin-bottom: 2em;
  overflow: auto;
  ul {
    float: right;
    ${media.tablet`
      width: 100%;
      text-align: center;
    `}
    li {
      display: inline-block;
      padding: .2em;
      a {
        position: relative;
    }
    li::after {
      content: " \\ ";
      }
    }
  }
`

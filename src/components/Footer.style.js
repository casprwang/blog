import styled from 'styled-components'
import { media } from 'theme/utils/media'

export const Footer = styled.footer`
  font-size: .9em;
  margin-top: 2em;
  margin-bottom: 2em;
  float: right;
  ${media.tablet`
    float: none;
    text-align: center;
  `}
  ul {
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

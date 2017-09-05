import styled from "styled-components"
import { media } from "theme/utils/media"

export const Footer = styled.footer`
  font-size: .9em;
  margin-top: 3em;
  margin-bottom: 0;
  overflow: hide;
  ul {
    overflow: hide;
    ${media.tablet`
      // text-align: center;
      // padding-left: 2em;
    `} li {
      display: inline-block;
      text-decoration: underline;
      font-size: 1.1em;
      :first-letter {
        text-transform: uppercase;
      }
      :first-child {
        padding-left: 0;
      }
      padding: 2em;
      a {
        position: relative;
      }
      li::after {
        content: " \\ ";
      }
    }
  }
`

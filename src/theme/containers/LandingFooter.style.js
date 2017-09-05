import styled from 'styled-components'
import { media } from 'theme/utils/media'
import { Colors } from 'theme/variables'

export default styled.footer`
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
        background-image: linear-gradient(
          transparent,
          transparent calc(1.1em),
          ${Colors.p} 5px,
          ${Colors.p}
        );
        ${media.phone`
          font-weight: 500;
          background-image: none;
        `}
        :hover {
          background-image: linear-gradient(
            transparent,
            transparent calc(1.04em),
            ${Colors.p} 4px,
            ${Colors.p}
          );
        }
      }
      li::after {
        content: " \\ ";
      }
    }
  }
`

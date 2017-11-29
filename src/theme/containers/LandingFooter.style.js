import styled from "styled-components"
import { media } from "theme/utils/media"
import { Colors } from "theme/variables"

export default styled.footer`
  bottom: 11%;
  ${media.phone`
    bottom: 22%;
  `} font-size: .9em;
  overflow: hide;
  ul {
    overflow: hide;
    ${media.tablet`
      // text-align: center;
      // padding-left: 2em;
    `} li {
      display: inline-block;
      font-size: 1.2em;
      :first-letter {
        text-transform: uppercase;
      }
      :first-child {
        padding-left: 0;
      }
      :last-child {
        padding-right: 0;
      }
      padding: 2em;
      ${media.tiny`
      padding: 1.3em;
    `} a {
        position: relative;
        background-image: linear-gradient(
          transparent,
          transparent calc(1.1em),
          ${Colors.p} 5px,
          ${Colors.p}
        );
        :hover {
          background-image: linear-gradient(
            transparent,
            transparent calc(1.04em),
            ${Colors.p} 4px,
            ${Colors.p}
          );
        }
        ${media.phone`
          background-image: none;
          border-bottom: 1px solid ${Colors.p};
        `};
      }
      li::after {
        content: " \\ ";
      }
    }
  }
`

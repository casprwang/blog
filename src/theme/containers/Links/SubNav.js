import styled from 'styled-components'
import { Colors } from 'theme/variables'
import { media } from 'theme/utils/media.js'

export default styled.section`
  margin-bottom: 1.8em;
  .down {
    color: ${Colors.h};
    filter: blur(0);
  }
  button {
    filter: blur(.02em);
    letter-spacing: .02em;
    :hover {
      text-decoration: underline;
    }
    :first-child {
      margin-left: 0;
    }
    :last-child {
      margin-right: 0;
    }
    display: inline-block;
    font-size: 1.8rem;
    display: inline-block;
    margin-top: 2em;
    color: ${Colors.code};
    line-height: 1.25;
    font-weight: 500;
    text-rendering: optimizeLegibility;
    margin-left: 1em;
    margin-right: 1em;
    ${media.phone`
      margin-left: .7em;
      margin-right: .7em;
    `}
    ${media.phone`
      margin-left: .7em;
      margin-right: .7em;
    `}
    ${media.none`
      margin-left: .65em;
      margin-right: .65em;
    `}
  }
`

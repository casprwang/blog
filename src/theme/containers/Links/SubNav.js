import styled from "styled-components"
import { Colors } from "theme/variables"
import { media } from "theme/utils/media.js"

export default styled.section`
  margin-bottom: 1.8em;
  .down {
    color: ${Colors.h};
    position: relative;
  }
  .down:after{
    position: absolute;
    height: 2px;
    margin: 0 auto;
    content: '';
    left: 0;
    right: 0;
    background-color: black;
  }
  .down:hover:after{
    position: absolute;
    height: 2px;
    margin: 0 auto;
    content: '';
    left: 0;
    right: 0;
    background-color: black;
  }
  button {
    letter-spacing: 0.02em;
    :first-child {
      margin-left: 0;
    }
    :last-child {
      margin-right: 0;
    }
    :hover {
      position: relative;
    }
    :hover:after {
      position: absolute;
      height: 2px;
      margin: 0 auto;
      content: '';
      left: 0;
      right: 0;
      background-color: ${Colors.link};
    }
    display: inline-block;
    font-size: 1.8rem;
    display: inline-block;
    margin-top: 2em;
    // color: ${Colors.subNav};
    line-height: 1.25;
    font-weight: 600;
    text-rendering: optimizeLegibility;
    margin-left: 1em;
    margin-right: 1em;
    ${media.phone`
      margin-left: .7em;
      margin-right: .7em;
    `} ${media.phone`
      margin-left: .7em;
      margin-right: .7em;
    `} ${media.none`
      margin-left: .65em;
      margin-right: .65em;
    `};
  }
`

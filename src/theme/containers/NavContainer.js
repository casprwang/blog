import styled from 'styled-components'
import { Colors } from 'theme/variables.js'

export default styled.div`
  display: block;
  font-size: 0.8em;
  font-weight: 600;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  ul {
    overflow: auto;
    li:first-child {
      float: left;
    }
    li {
      float: right;
      display: block;
      vertical-align: middle;
      line-height: 1;
      list-style: none;

      a {
        text-transform: uppercase;
        color: ${Colors.h};
        text-decoration: none;
        display: block;
        padding: 0.2em;
        margin: 0.7em;
        // line-height: 1.9;
        transition: opacity 0.5s ease-in;
        :hover,
        :active,
        :focus {
          filter: invert(40%);
        }

        &.${props => props.activeClassName} {
        }
        &.home {
        }
      }
    }
  }
`
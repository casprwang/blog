import styled from 'styled-components';
import { Colors } from 'theme/variables';


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
      padding-left: 0em;
    }
    li:nth-child(2) {
      padding-right: 0em;
    }
    li {
      float: right;
      display: block;
      vertical-align: middle;
      line-height: 1;
      list-style: none;
      padding: 0.7em;
      margin: 0em;

      a {
        text-transform: uppercase;
        color: ${Colors.h};
        text-decoration: none;
        display: block;
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
`;

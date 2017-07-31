import styled from 'styled-components'
import Link from 'gatsby-link'
import { Colors } from 'theme/variables.js'

export const Nav = styled.div`

  font-size: 0.8em;
  font-weight: 600;
  letter-spacing: .35em;
  text-transform: uppercase;
  ul {
    display: block;
    li {
      display: inline-block;
      vertical-align: middle;
      line-height: 1;
      list-style: none;
    }
  }
`

export const NavItem = styled(Link)`
  text-transform: uppercase;
  color: ${Colors.h};
  text-decoration: none;
  display: block;
  padding: .2em;
  margin: .4em;
  // line-height: 1.9;
  transition: opacity .1s ease-in;
  :hover,
  :active,
  :focus {
    color: ${Colors.p};
    transition: opacity .1s ease-in;
  }


  &.${props => props.activeClassName} {
  }
  &.home {
  }
`

NavItem.defaultProps = {
  activeClassName: 'active'
}

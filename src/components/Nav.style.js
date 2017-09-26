import styled from 'styled-components'
import Link from 'gatsby-link'
import { Colors } from 'theme/variables.js'

export const Nav = styled.div`
  display: block;
  font-size: 0.8em;
  font-weight: 600;
  letter-spacing: .35em;
  text-transform: uppercase;
  ul {
    overflow: auto;
    li {
      display: block;
      vertical-align: middle;
      line-height: 1;
      list-style: none;
    }
  }
`

export const NavItem = styled(Link)`
  text-transform: uppercase;
  color: ${Colors.border};
  text-decoration: none;
  display: block;
  padding: .2em;
  margin: .4em;
  // line-height: 1.9;
  filter: blur(.04em);
  transition: color .075s ease-in;
  :hover,
  :active,
  :focus {
    color: ${Colors.h};
    filter: blur(0);
    // filter: invert(10%);
  }


  &.${props => props.activeClassName} {
  }
  &.home {
  }
`

NavItem.defaultProps = {
  activeClassName: 'active'
}

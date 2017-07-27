import styled from 'styled-components'
import Link from 'gatsby-link'

export const Nav = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: .35rem;
  text-transform: uppercase;
  float: right;
  ul {
    li {
      display: inline-block;
      line-height: 1;
      list-style: none;
    }
  }
`

export const A = styled.a`
  padding: .5rem .5rem;
  $:hover,
  $:focus {
    color: gray;
    text-decoration: none;
  }
`

export const NavItem = styled(Link)`
  text-transform: uppercase;
  color: black;
  text-decoration: none;
  position: relative;
  display: block;
  padding: .2em;
  margin: .2em;

  &::before,
  &::after {
    content: '';
    border-bottom: solid 1px black;
    position: absolute;
    bottom: 0;
    width: 0;
  }

  &::before { left: 0; }
  &::after { right: 0; }

  &:hover::before,
  &:hover::after {
    width: 50%;
    }

  &::before,
  &::after {
    transition: all .2s ease;
    }


  &:focus::before,
  &:focus::after {
    width: 50%;
    }

  &.${(props) => props.activeClassName} {
    &::before,
    &::after {
      content: '';
      border-bottom: solid 1px black;
      position: absolute;
      width: 0;
      width: 50%;
    }
  }
`

NavItem.defaultProps = {
  activeClassName: 'active'
}

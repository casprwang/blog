import React from 'react'
import Link from 'gatsby-link'
import { Nav, A, NavItem } from './Nav.style.js'
import styled from 'styled-components'

const paths = ['/', '/blog/', '/about/', '/hire/']

class Li extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return this.props.location.slice(1, this.props.location.length - 1)
      ? <li>
          <NavItem activeClassName="active" to={`${this.props.location}`}>
            {this.props.location.slice(1, this.props.location.length - 1)}
          </NavItem>
        </li>
      : <li>
          <NavItem activeClassName="active" exact to={`${this.props.location}`}>
            {'Home'}
          </NavItem>
        </li>
  }
}

export default props => {
  let links = paths.map(path =>
    <Li location={path} current={props.location.pathname} />
  )

  return (
    <Nav>
      <ul>
        {links}
      </ul>
    </Nav>
  )
}

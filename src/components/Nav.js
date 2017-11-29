import React from 'react'
import Link from 'gatsby-link'
import { Nav, NavItem } from './Nav.style.js'
import styled from 'styled-components'

const paths = ['/', '/search/', '/about/']

class Li extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return this.props.location.slice(
      1,
      this.props.location.length - 1
    )
      ? <li
          style={{
            float: 'right'
          }}
        >
          <NavItem
            activeClassName="active"
            to={`${this.props.location}`}
          >
            {this.props.location.slice(
              1,
              this.props.location.length - 1
            )}
          </NavItem>
        </li>
      : <li
          style={{
            float: 'left'
          }}
        >
          <NavItem
            activeClassName="home"
            exact
            to={`${this.props.location}`}
          >
            {'Song'}
          </NavItem>
        </li>
  }
}

export default props => {
  let links = paths.map(path =>
    <Li location={path}  />
  )

  return (
    <Nav>
      <ul>
        {links}
      </ul>
    </Nav>
  )
}

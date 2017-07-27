import React from 'react'
import Link from 'gatsby-link'
import { Nav, A } from './Nav.style.js'

const paths = ['/', '/blog/', '/about/', '/hire/']

class Li extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <li>
        <Link
          exact
          to={`${this.props.location}`}
          activeStyle={{
            fontWeight: 'bold',
            color: 'red'
          }}
        >
          {this.props.location.slice(1, this.props.location.length - 1) ||
            'Home'}
        </Link>
      </li>
    )
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

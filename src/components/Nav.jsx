import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const paths = ['/', '/blog/', '/about/', '/hire/']

const Li = props => {
  if (props.location.length > 1) {
    return (
      <li>
        <Link to={`${props.location}`}>
          {props.location.slice(1, props.location.length - 1)}
        </Link>
      </li>
    )
  } else {
    return (
      <li>
        <Link to={`${props.location}`}>
          {'Home'}
        </Link>
      </li>
    )
  }
}

export default props => {
  let links = paths.map(path =>
    <Li location={path} current={props.location.pathname} />,
  )

  return (
    <nav>
      <ul>
        {links}
      </ul>
    </nav>
  )
}

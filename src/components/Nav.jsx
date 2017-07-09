import React from 'react'
import Link from 'gatsby-link'

const paths = ['/', '/blog/', '/about/', '/hire/']

const Li = props => {
  let style
  if (
    props.current.split('/')[1] ===
    props.location.slice(1, props.location.length - 1)
  ) {
    style = { color: '#a212d1' }
  } else {
    style = { color: '#000' }
  }
  if (props.location.length > 1) {
    return (
      <li>
        <Link style={style} to={`${props.location}`}>
          {props.location.slice(1, props.location.length - 1)}
        </Link>
      </li>
    )
  } else {
    return (
      <li>
        <Link style={style} to={`${props.location}`}>
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

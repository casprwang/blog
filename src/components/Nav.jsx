import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const paths = ['/', '/blog/', '/about/', '/hire/']

class Li extends React.Component {
  constructor(props) {
    super()
  }

  render() {
    let style
    if (
      this.props.current.split('/')[1] ===
      this.props.location.slice(1, this.props.location.length - 1)
    ) {
      style = { color: '#a212d1' }
    } else {
      style = { color: '#000' }
    }
    if (this.props.location.length > 1) {
      return (
        <li>
          <Link style={style} to={`${this.props.location}`}>
            {this.props.location.slice(1, this.props.location.length - 1)}
          </Link>
        </li>
      )
    } else {
      return (
        <li>
          <Link style={style} to={`${this.props.location}`}>
            {'Home'}
          </Link>
        </li>
      )
    }
  }
}

// const Li = props => {
//   let style
//   if (
//     props.current.split('/')[1] ===
//     props.location.slice(1, props.location.length - 1)
//   ) {
//     style = { color: '#a212d1' }
//   } else {
//     style = { color: '#000' }
//   }
//   if (props.location.length > 1) {
//     return (
//       <li>
//         <Link style={style} to={`${props.location}`}>
//           {props.location.slice(1, props.location.length - 1)}
//         </Link>
//       </li>
//     )
//   } else {
//     return (
//       <li>
//         <Link style={style} to={`${props.location}`}>
//           {'Home'}
//         </Link>
//       </li>
//     )
//   }
// }

export default props => {
  let links = paths.map(path =>
    <Li location={path} current={props.location.pathname} />
  )

  return (
    <nav>
      <ul>
        {links}
      </ul>
    </nav>
  )
}

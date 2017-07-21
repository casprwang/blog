import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

const paths = ['/', '/blog/', '/about/', '/hire/']

class Li extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hovered: false
    }
  }

  onMouseOver() {
    this.setState({
      hovered: true
    })
  }

  onMouseOut() {
    this.setState({
      hovered: false
    })
  }

  render() {
    let finalColor
    if (this.props.current === this.props.location || this.state.hovered) {
      finalColor = '#a212d1'
    } else {
      finalColor = '#000'
    }

    return (
      <li>
        <Link
          to={`${this.props.location}`}
          onMouseOver={() => this.onMouseOver()}
          onMouseOut={() => this.onMouseOut()}
          style={{
            color: finalColor
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
    <nav>
      <ul>
        {links}
      </ul>
    </nav>
  )
}

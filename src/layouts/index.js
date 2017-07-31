import React from 'react'
import Link from 'gatsby-link'
import 'theme/global.js'
import Nav from 'components/Nav'
import Footer from 'components/Footer'
import { Background } from './index.style.js'
import { BodyContainer } from 'theme/containers/BodyContainer.js'

class Wrapper extends React.Component {
  render() {
    return (
      <div>
        <Background />
        <BodyContainer>
          <Nav location={this.props.location} />
          {this.props.children()}
          <Footer />
        </BodyContainer>
      </div>
    )
  }
}

export default Wrapper

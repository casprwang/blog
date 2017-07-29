import React from 'react'
import Link from 'gatsby-link'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import '../css/prism-coy.css'
import '../theme/global.js'
import { Container, Background } from './index.style.js'

class Wrapper extends React.Component {
  render() {
    return (
      <div>
        <Background />
        <Container>
          <Nav location={this.props.location} />
          {this.props.children()}
          <Footer />
        </Container>
      </div>
    )
  }
}

export default Wrapper

import React from 'react'
import Link from 'gatsby-link'
import '../css/main.scss'
import Nav from '../components/Nav.jsx'
import Footer from '../components/Footer.jsx'
import "../css/prism-coy.css"
import '../css/main.scss'

class Wrapper extends React.Component {
  render() {
    return (
      <div>
        <Nav />
        {this.props.children()}
        <Footer />
      </div>
    )
  }
}

export default Wrapper

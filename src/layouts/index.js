import React from "react"
import Link from "gatsby-link"
import Nav from "../components/Nav.jsx"
import Footer from "../components/Footer.jsx"
import "../css/prism-coy.css"
import '../theme/global.js'

class Wrapper extends React.Component {
  render() {
    return (
      <div>
        <Nav location={this.props.location} />
        {this.props.children()}
        <Footer />
      </div>
    )
  }
}

export default Wrapper

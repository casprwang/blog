import React from 'react'
import { Header } from 'theme/containers/Header.js'
import { Colors } from 'theme/variables'
// import Footer from '../index.style.js'
import Footer from 'components/LandingFooter'

const styledHeader = ({ bio }) =>
  <Header>
    <div>
      <h1>Song Wang</h1>
      <p
        style={{
          color: Colors.h
        }}
      >
        {bio}
      </p>
    </div>
    <Footer />
  </Header>

export default styledHeader

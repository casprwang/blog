import React from 'react'
import 'typeface-source-code-pro'
import GlobalStyle from 'theme/global.js'
import BodyContainer from 'theme/containers/BodyContainer.js'
import Nav from 'components/Nav'
import Footer from 'components/Footer'
import BackgroundContainer from 'theme/containers/BackgroundContainer'

export default ({ children }) => (
  <>
    <GlobalStyle />
    <BackgroundContainer />
    <BodyContainer>
      <Nav />
      {children}
      <Footer />
    </BodyContainer>
  </>
)

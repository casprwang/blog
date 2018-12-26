import React from 'react'

import styled from "styled-components"
import GlobalStyle from "theme/global.js"
import { Colors } from "theme/variables.js"
import BodyContainer from "theme/containers/BodyContainer.js"
import Nav from 'components/Nav'
import Footer from 'components/Footer'

const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: -1000;
  background-color: ${Colors.background};
`

export default ({ children }) => (
  <>
    <GlobalStyle />
    <Background />
    <BodyContainer>
      <Nav />
      {children}
      <Footer />
    </BodyContainer>
  </>
)

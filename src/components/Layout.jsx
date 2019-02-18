import React from 'react';
import 'typeface-source-code-pro';
import GlobalStyle from 'theme/global';
import BodyContainer from 'theme/containers/BodyContainer';
import Nav from 'components/Nav';
import Footer from 'components/Footer';


export default ({ children }) => (
  <>
    <GlobalStyle />
    <BodyContainer>
      <Nav />
      {children}
      <Footer />
    </BodyContainer>
  </>
);

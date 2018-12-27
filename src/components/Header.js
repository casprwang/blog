import React from 'react'
import HeaderContainer from 'theme/containers/HeaderContainer'

export default ({ title, subtitle }) =>
  <HeaderContainer>
    <div>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  </HeaderContainer>

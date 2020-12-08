import React from 'react';
import HeaderContainer from 'theme/containers/HeaderContainer';

const Header = ({ title, subtitle }) => (
  <HeaderContainer>
    <div>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  </HeaderContainer>
);

Header.defaultProps = {
  title: '',
  subtitle: '',
};



export default Header;

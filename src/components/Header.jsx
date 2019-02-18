import React from 'react';
import PropTypes from 'prop-types';
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


Header.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
};

export default Header;

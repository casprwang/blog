import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import NavContainer from 'theme/containers/NavContainer';


const PATHS = ['/', '/search/', '/about/', '/blog/'];
const getLinkName = locationSlug => (locationSlug.length === 1 ? 'Song' : locationSlug.split('/')[1]);


const Li = ({ location }) => (
  <li>
    <Link to={location}>{getLinkName(location)}</Link>
  </li>
);

Li.defaultProps = {
  location: '',
};

Li.propTypes = {
  location: PropTypes.string,
};

export default () => (
  <NavContainer>
    <ul>
      {PATHS.map(path => <Li key={path} location={path} />)}
    </ul>
  </NavContainer>
);

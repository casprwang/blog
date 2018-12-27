import React from 'react'
import { Link } from 'gatsby'
import NavContainer from 'theme/containers/NavContainer'

const PATHS = [`/`, `/search/`, `/about/`]

const getLinkName = locationSlug => locationSlug.length === 1 ? 'Song' : locationSlug.split('/')[1]

const Li = ({ location }) =>
  <li>
    <Link to={location}>{getLinkName(location)}</Link>
  </li>

export default () =>
  <NavContainer>
    <ul>
      {PATHS.map((path, i) => <Li key={i} location={path} />)}
    </ul>
  </NavContainer>

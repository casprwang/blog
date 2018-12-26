import React from "react"
import Link from "gatsby"
import { Nav, NavItem } from "./Nav.style.js"

const PATHS = [`/`, `/search/`, `/about/`]

const Li = ({ location }) =>
  location.slice(1, location.length - 1) ? (
    <li
      style={{
        float: `right`,
      }}
    >
      <NavItem activeClassName="active" to={`${location}`}>
        {location.slice(1, location.length - 1)}
      </NavItem>
    </li>
  ) : (
      <li
        style={{
          float: `left`,
        }}
      >
        <NavItem activeClassName="home" to={`${location}`}>
          {`Song`}
        </NavItem>
      </li>
    )

export default () =>
  <Nav>
    <ul>
      {PATHS.map((path, i) => <Li key={i} location={path} />)}
    </ul>
  </Nav>

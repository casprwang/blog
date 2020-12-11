import React from "react";
import { Link } from "gatsby";

const PATHS = ["/", "/search/", "/about/"];
const getLinkName = (locationSlug) =>
  locationSlug.length === 1 ? "Song" : locationSlug.split("/")[1];

const Li = ({ location }) => (
  <li>
    <Link to={location}>{getLinkName(location)}</Link>
  </li>
);


export default () => (
    <ul>
      {PATHS.map((path) => (
        <Li key={path} location={path} />
      ))}
    </ul>
);

import React from "react";
import { StaticQuery, graphql } from "gatsby";

const footerQuery = graphql`
  query {
    site {
      siteMetadata {
        social {
          twitter
        }
      }
    }
  }
`;

export default () => (
  <StaticQuery
    query={footerQuery}
    render={(data) => (
      <ul>
        {Object.entries(data.site.siteMetadata).map(([name, link]) => (
          <li key={name}>
            <a rel="noopener noreferrer" target="__blank" href={link}>
              {name}
            </a>
          </li>
        ))}
      </ul>
    )}
  />
);

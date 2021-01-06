import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const footerQuery = graphql`
  query {
    site {
      siteMetadata {
        social {
          github
          linkedin
          twitter
        }
      }
    }
  }
`;

const capitalize = (s) => s.charAt(0).toUpperCase() + s.slice(1);

export default () => {
  const data = useStaticQuery(footerQuery);

  return (
    <footer>
      <div className="footer-social">
        <ul>
          {Object.entries(data.site?.siteMetadata?.social ?? []).map(
            ([name, link]) => (
              <li key={name}>
                <a
                  key={name}
                  rel="noopener noreferrer"
                  target="__blank"
                  href={link}
                >
                  {capitalize(name)}
                </a>
              </li>
            )
          )}
        </ul>
      </div>
      <div className="footer-copyright">
        Copyright © {new Date().getFullYear()} Casper Wang
      </div>
    </footer>
  );
};

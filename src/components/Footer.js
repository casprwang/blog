import React from "react"
import FooterContainer from 'theme/containers/FooterContainer'

const accounts = {
  github: "https://github.com/wangsongiam",
  twitter: "https://twitter.com/supsupsong",
  linkedin: "https://www.linkedin.com/in/song-wang-279a2b126/",
}

export default () => (
  <FooterContainer>
    <ul>
      {Object.entries(accounts).map(([name, link]) =>
        <li key={name}>
          <a rel="noopener noreferrer" target="__blank" href={link}>
            {name}
          </a>
        </li>)}
    </ul>
  </FooterContainer>
)

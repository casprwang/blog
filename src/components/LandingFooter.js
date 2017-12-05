import React from "react"
import StyledFooter from "theme/containers/LandingFooter.style.js"

const accounts = {
  github: "https://github.com/wangsongiam",
  twitter: "https://twitter.com/supsupsong",
  linkedin: "https://www.linkedin.com/in/song-wang-279a2b126/",
}

export default () => {
  let row = []
  for (let name in accounts) {
    row.push(<li key={name}>
      <a rel="noopener noreferrer" target="__blank" href={accounts[name]}>
        {name}
      </a>
    </li>)
  }

  return (
    <StyledFooter>
      <ul>{row}</ul>
    </StyledFooter>
  )
}

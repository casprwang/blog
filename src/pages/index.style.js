import React from 'react'
import styled from 'styled-components'
import { media } from 'theme/utils/media'

export const BlogContent = styled.div`
  h2 {
    font-weight: 550;
    font-size: 1.8em;
  }
  h3 {
    font-size: 1.2em;
    font-weight: 450;
  }
`

const accounts = {
  github: 'https://github.com/wangsongiam',
  twitter: 'https://twitter.com/supsupsong',
  linkedin: 'https://www.linkedin.com/in/song-wang-279a2b126/'
}

export default () => {
  let row = []
  for (let name in accounts) {
    row.push(
      <li key={name}>
        <a rel="noopener noreferrer" target="__blank" href={accounts[name]}>
          {name}
        </a>
      </li>
    )
  }

  return (
    <Footer>
      <ul>
        {row}
      </ul>
    </Footer>
  )
}

const Footer = styled.footer`
  font-size: .9em;
  margin-top: 3em;
  margin-bottom: 2em;
  overflow: hide;
  ul {
    ${media.tablet`
      text-align: center;
      padding-left: 2em;
    `} li {
      display: inline-block;
      :first-child {
      padding-left: 0;
      }
      padding: 2em;
      a {
        position: relative;
      }
      li::after {
        content: " \\ ";
      }
    }
  }
`

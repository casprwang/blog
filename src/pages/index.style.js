import React from 'react'
import styled from 'styled-components'
import { media } from 'theme/utils/media'

export const BlogContent = styled.div`
  h2 {
    font-weight: 550;
    letter-spacing: .01em;
    font-size: 1.8em;
  }
  h3 {
    font-size: 1.2em;
    font-weight: 450;
  }
  h2 + h3 {
    margin-top: 0;
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
  margin-bottom: 0;
  overflow: hide;
  ul {
    overflow: hide;
    ${media.tablet`
      // text-align: center;
      // padding-left: 2em;
    `} li {
      display: inline-block;
      text-decoration:  underline;
      font-size: 1.1em;
      :first-letter {
        text-transform: uppercase;
      }
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

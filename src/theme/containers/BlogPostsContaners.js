import styled from 'styled-components'
import { media } from 'theme/utils/media'

export const TilContainer = styled.div`
  h2 {
    margin-top: .5em;
  }

  h3 {
    font-size: 1em;
    margin-top: .5em;
  }
  h3:nth-last-child(2) {
    margin-bottom: .8em;
  }
`

export const NoteContainer = styled.div`
  h2 {
    margin-top: 2em;
  }

  h3 {
    font-size: 1em;
    margin-top: .5em;
  }

  h3:nth-last-child(2) {
    margin-bottom: .8em;
  }
`

export const BlogContainer = styled.div`
  h2 {
    margin-top: 2em;
  }

  h3 {
    font-size: 1em;
    margin-top: .5em;
  }
  h3:nth-last-child(2) {
    margin-bottom: .8em;
  }
  p {
    cursor: default;
    ${media.tablet`
      text-align: center;
    `}
  }
`

export const LinkContainer = styled.div`
  h2 {
    margin-top: 2em;
  }

  h3 {
    // a {
    //   cursor: alias;
    // }
    font-size: 1em;
    margin-top: .5em;
  }
  h3:nth-last-child(2) {
    margin-bottom: .8em;
  }
`

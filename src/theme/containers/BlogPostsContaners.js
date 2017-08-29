import styled from 'styled-components'
import { media } from 'theme/utils/media'

const Base = styled.div`
  h2 {
    font-size: 1.3em;
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


export const NoteContainer = Base.extend`
`


export const BlogContainer = Base.extend`
  p {
    cursor: default;
    ${media.tablet`
      // text-align: center;
    `}
  }
`

export const LinkContainer = Base.extend`
`

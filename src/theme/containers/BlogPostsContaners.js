import styled from 'styled-components'
import { media } from 'theme/utils/media'

const Base = styled.div`
  h2 {
    font-size: 1.99rem;
    margin-top: 2em;
  }

  h3 {
    font-size: 1.524rem;
    margin-top: .5em;
  }

  h3:nth-last-child(2) {
    margin-bottom: .8em;
  }
`

const Wrapper = styled.div`
  background-color: red;
`

export const NoteContainer = Base.extend`
  section {
    display: flex;
    flex-wrap: wrap;

    h3 {
      width: 50%;
      font-size: 1.2em;
      ${media.tablet`
        width: 100%;
      `}
    }
  }
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
  h3 {
    font-size: .8em;
  }
`

export const ProjectContainer = Base.extend`
  width: 100%;
  section {
    display: flex;
    flex-wrap: wrap;

    h3 {
      width: 33.3%;
      font-size: 1.2em;
      ${media.tablet`
        width: 100%;
      `}
    }
  }
`


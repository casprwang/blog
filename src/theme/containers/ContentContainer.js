import styled from 'styled-components'
import { Colors } from 'theme/variables'
import { media } from 'theme/utils/media.js'

export const ContentContainer = styled.div`
  > *:first-child {
    margin-top: 0;
  }

  h2 + h3 {
    margin-top: 0;
  }

  // lists
  ul,
  ol {
    font-size: 1em;
    margin-bottom: 1.8em;
    margin-top: .4em;
    list-style: none;
    li {
      padding-left: .4em;
      line-height: 1.6;
    }
    li::before {
      content: '‧';
      opacity: 1;
      margin-right: .3em;
      margin-left: -.55em;
    }
  }

  pre {
    padding: 0 1em 0;
    font-size: 1em;
    border-left: 2px solid ${Colors.border};
    margin-bottom: 2em;
    overflow-x: auto;
  }

  a {
    font-weight: 500;
    background-image: linear-gradient(
      transparent,
      transparent .999em,
      #bbb 1.11em,
      #bbb
    );

    :hover {
      background-image: linear-gradient(
        transparent,
        transparent .99em,
        #0cf 1.11em,
        #0cf
      );
    }
  }

  .gatsby-resp-image-link {
    background-image: none;
    :hover {
      background-image: none;
    }
  }

  p {
    opacity: .99999;
  }
`

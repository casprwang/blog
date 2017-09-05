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
      padding-left: 1em;
      line-height: 1.6;
    }
    li::before {
      content: '•';
      opacity: 1;
      margin-right: .5em;
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
    background-image: linear-gradient(
      transparent,
      transparent calc(1.1em),
      ${Colors.border} 5px,
      ${Colors.border}
    );
    ${media.phone`
      font-weight: 500;
      background-image: none;
    `} :hover {
      background-image: linear-gradient(
        transparent,
        transparent calc(1.04em),
        ${Colors.link} 4px,
        ${Colors.link}
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

  blockquote {
    margin-top: 4em;
    font-size: 90%;
    padding: 1.5em 1em 1.5em .5em;
    margin-bottom: 0;
    font-size: 1em;
    border-top: 2px solid ${Colors.border};
    border-bottom: 2px solid ${Colors.border};
    position: relative;
    margin-bottom: 4em;
    p {
      margin-bottom: 0;
    }

    cite {
      float: right;
      font-weight: 400;
      padding: .3em;
    }
  }

  blockquote + p {
    margin-top: 2em;
  }
`

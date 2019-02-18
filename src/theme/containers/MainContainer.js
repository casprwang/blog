import styled from 'styled-components';
import { Colors, Fonts } from 'theme/variables';
import media from 'utils/media';


export default styled.main`
  p {
    max-width: 650px;
    margin-left: 0;
  }
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
    margin-top: 0.4em;
    list-style: none;
    li {
      padding-left: 1em;
      line-height: 1.6;
    }
    li::before {
      content: "•";
      opacity: 1;
      margin-right: 0.5em;
      margin-left: -.55em;
    }
  }

  a {
    background-image: linear-gradient(
      transparent,
      transparent calc(1.11em),
      ${Colors.link} 5px,
      ${Colors.link}
    );
    ${media.phone`
      font-weight: 500;
    `} :hover {
      background-image: linear-gradient(
        transparent,
        transparent calc(1.04em),
        ${Colors.linkHover} 4px,
        ${Colors.linkHover}
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
    opacity: 0.99999;
    code {
      padding-left: 0.2em;
      border: 1px solid ${Colors.code};
      padding-right: 0.2em;
    }
  }

  blockquote {
    margin-top: 4em;
    font-size: 90%;
    padding: 1.5em 1em 1.5em 0.5em;
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
      padding: 0.3em;
    }
  }

  blockquote + p {
    margin-top: 2em;
  }

  pre {
    font-size: 0.85em;
    color: ${Colors.p};
    padding: 0 1em 0;
    border-left: 2px solid ${Colors.border};
    margin-bottom: 2em;
    overflow-x: auto;
  }

  code {
    font-family: ${Fonts.basic};
    font-family: ${Fonts.code};
  }
`;

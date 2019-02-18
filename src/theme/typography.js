import { Colors } from './variables';


export default `
  html,
  body {
    font-size: 17px;
    @media screen and (max-width: 700px) {
      font-size: 15px;
    }
    @media screen and (min-width: 1600px) {
      font-size: 19px;
    }
  }

  h1,
  h2,
  h3,
  h4 {
    color: ${Colors.h};
    line-height: 1.25;
    font-weight: 600;
    text-rendering: optimizeLegibility;
    margin-top: 2.8em;
    margin-bottom: 1.2em;
    @media screen and (max-width: 700px) {
      // text-align: center;
    }
  }

  h4 {
    margin-top: 2.2em;
    font-size: .966em;
  }

  h5 {
    font-size: 1em;
  }

  h6 {
    font-size: 0.72em;
  }

  p,
  .message {
    color: ${Colors.p};
    margin: 0 auto 1.2em;
    line-height: 1.5;
    letter-spacing: normal;
  }

  .gatsby-resp-image-link,
  img,
  video,
  iframe,
  figure {
    display: block;
    margin: 1.1em 0;
  }

  table {
    margin-top: 2.8em;
    color: ${Colors.h};
    margin-bottom: 2.2em;
    max-width: 100%;
  }

  th, td {
    text-align: left;
    padding-bottom: 1em;
    padding-right: 1em;
  }

`;

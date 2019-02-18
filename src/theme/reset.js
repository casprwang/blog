import { Colors, Fonts } from 'theme/variables';


export default `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-family: ${Fonts.basic};
    font-size: 100%;
    text-size-adjust: none;
    text-rendering: optimizelegibility;
    image-rendering: optimizequality;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    transition: all .2s ease;
  }

  nav,
  header,
  footer,
  section {
    display: block;
  }

  del {
    text-decoration: line-through;
  }

  button,
  input,
  select[multiple],
  textarea {
    background-image: none;
  }

  img {
    border: 0;
  }

  button {
    appearance: none;
    cursor: pointer;
    background: none;
    border: none;
    outline: none;
    margin-top: .5em;
  }

  header {
    clear: both;
  }

  a {
    text-decoration: none;
    color: ${Colors.h};
  }

  .gatsby-resp-image-link,
  img {
    width: 100%;
  }

  .gatsby-resp-image-wrapper {
    z-index: 10;
    margin: 0!important;
  }

  input {
    background: ${Colors.background};
    font-size: 3em;
    display: block;
    width: 50%;
    border: none;
    border-bottom: 2px solid ${Colors.background}
  }

  input:focus,
  select:focus,
  textarea:focus,
  button:focus {
    outline: none;
    background: ${Colors.background};
    font-size: 3em;
    display: block;
    width: 50%;
    border: none;
    border-bottom: 2px solid ${Colors.background}
  }

  hr {
    border: none;
    display: block;
    margin: 2em 0 1em;
    font-size: .9rem;
    :before {
      display: block;
      content: '';
      width: 3px;
      height: 3px;
      margin: 2em 2em 2em;
      border-radius: 50%;
      background: black;
      box-shadow: calc(3px*8) 0 0 0 black, calc(3px*-8) 0 0 0 black;
    }
  }
`;

export const resets = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
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
    color: black;
  }

  img {
    width: 100%;
  }

  .gatsby-resp-image-wrapper {
    z-index: 10;
  }

  input:focus,
  select:focus,
  textarea:focus,
  button:focus {
      outline: none;
  }
`

import styled from 'styled-components'

export const Header = styled.header`
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  @media screen and (max-width: 700px) {
    text-align: center;
  }
  @media screen and (max-width: 540px) {
    min-height: 95vh;
  }
  div {
    float: left;
    clear: left;
    h1 {
      align-self: stretch;
      font-size: 3em;
      margin-bottom: 0;
      margin-top:0;
      span {
        opacity: .85;
        font-size: 80%;
      }
    }
    small {
      opacity: .5;
      margin-left: .3em;
      margin-top: .5em;
      }
    }
`

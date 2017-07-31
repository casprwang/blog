import styled from 'styled-components'

export const Header = styled.header`
  min-height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  div {
    h1 {
      align-self: stretch;
      font-size: 3em;
      margin-bottom: 0;
      margin-top:0;
      display: block;
      span {
        opacity: .85;
        font-size: 80%;
      }
    }
    small {
      float: left;
      opacity: .5;
      margin-top: 1em;
      }
    }
`

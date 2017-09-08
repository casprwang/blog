import styled from 'styled-components'
import { Colors } from 'theme/variables'
import { media } from 'theme/utils/media'

export const Header = styled.header`
  min-height: 50vh;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media screen and (min-width: 1600px) {
  }
  @media screen and (max-width: 700px) {
    // text-align: center;
  }
  @media screen and (max-width: 440px) {
    min-height: 92vh;
  }
  div {
    float: left;
    clear: left;
    h1 {
      letter-spacing: .01em;
      font-size: 2.8em;
      margin-top: 0;
      margin-bottom: 0;

      @media screen and (max-width: 440px) {
        font-size: 2em;
      }
      span {
        opacity: .85;
        font-size: 80%;
      }
    }
    small {
      display: block;
      color: ${Colors.p}
      margin-left: .3em;
      margin-top: .5em;
      }

    p {
      margin-top: 1em;
      font-size: 1.4em;
      @media screen and (max-width: 540px) {
        font-size: 1.3em;
      }
    }
  }
`

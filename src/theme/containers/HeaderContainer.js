import styled from 'styled-components';
import { Colors } from 'theme/variables';


export default styled.header`
  max-width: 700px;
  margin-top: 150px;
  margin-bottom: 150px;
  text-align: left;
  @media screen and (min-width: 1600px) {
    margin-top: 200px;
    margin-bottom: 200px;
  }
  @media screen and (max-width: 700px) {
    // text-align: center;
  }
  @media screen and (max-width: 440px) {
    display: flex;
    margin:0;
    flex-direction: column;
    justify-content: center;
    min-height: 92vh;
  }
  div {
    h1 {
      letter-spacing: .01em;
      font-size: 2.7em;
      margin-top: 0em;
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
      color: ${Colors.h};
      @media screen and (max-width: 540px) {
        font-size: 1.3em;
      }
    }
  }
`;

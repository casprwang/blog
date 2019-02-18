import styled from 'styled-components';
import media from 'utils/media';


export default styled.footer`
  font-size: .9em;
  margin-top: 4em;
  ul {
    overflow: auto;
    margin-bottom: 2em;
    float: right;
    ${media.tablet`
      width: 100%;
      text-align: center;
    `} li {
      display: inline-block;
      padding: 1em;
      a {
        position: relative;

      li::after {
        content: ' \\ ';
      }
    }
  }
`;

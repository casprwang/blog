import styled from 'styled-components';
import media from 'utils/media';


export default styled.div`
  margin-top: 2em;
  a {
    font-weight: 550;
    border-bottom: 1px dashed;
    margin-left: 0.3em;
    ${media.phone`
      display: inline-block;
      text-align: center;
      margin: 0 auto;
    `};
  }
`;

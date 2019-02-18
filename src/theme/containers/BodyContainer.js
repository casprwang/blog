import styled from 'styled-components';
import media from 'utils/media';


export default styled.div`
  width: 650px;
  height: 100%;
  margin: 0 auto;
  ${media.tablet`
    width: 88%;
  `} @media screen and (min-width: 1600px) {
    width: 900px;
  }
`;

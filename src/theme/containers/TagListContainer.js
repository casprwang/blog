import styled from 'styled-components';
import media from 'utils/media';


export default styled.div`
  display: flex;
  flex-wrap: wrap;
  font-weight: 600;
  a {
    width: 33.333%;
    ${media.tablet`
      width: 50%;
      text-align: left;
    `} ${media.phone`
      width: 50%;
      text-align: left;
      // text-align: center;
    `};
  }
`;

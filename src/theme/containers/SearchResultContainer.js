import styled from 'styled-components';
import { Colors } from 'theme/variables';


export default styled.div`
  text-align: left;
  padding-top: 0;
  margin-top: 0;
  padding-bottom: .8em;
  position: relative;

  h2 {
    margin-bottom: 1em;
    margin-top: 1em;
    width: 100%;
    a {
      color: ${Colors.h};
      text-decoration: none;
      :hover {
        text-decoration: underline;
      }
    }
  }

  p {
    max-width: 650px;
    margin-left: 0;
  }
`;

import styled from 'styled-components';
import { Colors } from 'theme/variables';


export default styled.div`
  a {
    position: relative;
    :hover {
      background-image: linear-gradient(
        transparent,
        transparent calc(1.1em),
        ${Colors.p} 4px,
        ${Colors.p}
      );
    }
  }

  p {
    max-width: 660px;
    margin: 0;
    margin-bottom: 1em;
  }

  h3 {
    margin-top: 0;
  }
`;

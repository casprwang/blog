import styled from 'styled-components';
import media from 'utils/media';
import { Colors, Fonts } from 'theme/variables';


export const Button = styled.div`
  font-family: ${Fonts.basic};
  font-weight: 500;
  letter-spacing: 0.1em;
  &:first-letter {
    text-transform: uppercase;
  }
  position: relative;
  cursor: pointer;
  background-image: linear-gradient(
    transparent,
    transparent calc(1.1em),
    ${Colors.link} 5px,
    ${Colors.link}
  );
  :hover {
    background-image: linear-gradient(
      transparent,
      transparent calc(1.02em),
      ${Colors.p} 4px,
      ${Colors.p}
    );
  }
  ${media.phone`
     border-bottom: 1px solid ${Colors.p};
  `} margin-top: 0;
  font-size: 92%;
  ${media.tablet`
    width: 100%;
    text-align: left;
  `};
`;

export default styled(Button)`
  display: ${props => (props.number >= props.length ? 'none' : 'inline')};
`;

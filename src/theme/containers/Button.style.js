import styled from 'styled-components'
import { media } from 'theme/utils/media.js'
import { Colors, Fonts } from 'theme/variables'

export const Button = styled.div`
  font-family: ${Fonts.basic};
  font-weight: 500;
  letter-spacing: .3em;
  position: relative;
  cursor: pointer;
  background-image: linear-gradient(
    transparent,
    transparent calc(1.1em),
    ${Colors.p} 5px,
    ${Colors.p}
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
  `}
  text-transform: uppercase;
  margin-top: 0;
  opacity: .7;
  font-size: 92%;
  ${media.tablet`
    width: 100%;
    text-align: left;
  `};
`

export const PullMoreButton = Button.extend`
  display: ${props =>
    props.number >= props.length ? 'none' : 'inline'};
`

import styled from 'styled-components'
import { media } from 'theme/utils/media.js'

export const Button = styled.button`
  margin-top: 0;
  display: ${props=> props.number>=props.length? 'none':'block'};
  opacity: .5;
  font-size: 92%;
  ${media.tablet`
    width: 100%;
    text-align: center;
  `}
`

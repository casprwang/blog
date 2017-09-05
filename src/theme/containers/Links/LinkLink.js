import styled from 'styled-components'
import { Colors } from 'theme/variables'
import { media } from 'theme/utils/media.js'

export const LinkLink = styled.a`
  position: relative;
  // ${media.phone`
  //   font-weight: 500;
  //   background-image: none;
  // `}
  :hover {
    border-bottom: 1px dashed ${Colors.p};
  }
`

import Link from 'gatsby-link'
import styled from 'styled-components'
import { Colors } from 'theme/variables'
import { media } from 'theme/utils/media.js'

export const PostLink = styled(Link)`
  position: relative;
  // ${media.phone`
  //   font-weight: 500;
  //   background-image: none;
  // `}
  :hover {
    background-image: linear-gradient(
      transparent,
      transparent calc(1.10em),
      ${Colors.p} 4px,
      ${Colors.p}
    );
  }
`

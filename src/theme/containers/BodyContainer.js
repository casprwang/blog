import styled from 'styled-components'
import { prism } from 'theme/prism-coy.js'
import { media } from 'theme/utils/media.js'

export const BodyContainer = styled.div`
  width: 650px;
  height: 100%;
  margin: 0 auto;
  height: 100%;
  ${prism} ${media.tablet`
    width: 88%;
  `} @media screen and (min-width: 1600px) {
    width: 700px;
  }
`

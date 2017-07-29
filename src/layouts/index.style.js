import styled from 'styled-components'
import { Colors } from '../theme/variables.js'

export const Container = styled.div`
  width: 750px;
  margin: 0 auto;
  height: 100%;
`

export const Background = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: -1000;
  background-color: ${Colors.background};
`

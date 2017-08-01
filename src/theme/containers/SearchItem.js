import styled from 'styled-components'
import { Colors } from 'theme/variables'

export const SearchItem = styled.div`
  h1 {
    text-align: center;
    margin-bottom: 1em;
  }
  h3 {
    font-size: 1.2em;
    opacity: .5;
    font-weight: 400;
    margin-top: 0;
    margin-bottom: .5em;
  }
  padding-top: 0;
  margin-top: 0;
  padding-bottom: 2em;
  border-bottom: 1px solid;
  border-color: ${Colors.border}
`

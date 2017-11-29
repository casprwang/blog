import styled from "styled-components"
import { Colors } from "theme/variables"

export const SearchResultWrapper = styled.div`
  h1 {
    // text-align: center;
    margin-bottom: 1em;
    margin-top: 1em;
    width: 100%;
  }

  h3 {
    font-size: 1.2em;
    opacity: 0.5;
    font-weight: 400;
    margin-top: 0;
    margin-bottom: 0.5em;
  }
  padding-top: 0;
  margin-top: 0;
  padding-bottom: 2em;
  border-top: 1px solid;
  border-color: ${Colors.border};
  :first-child {
    border-top: none;
  }
`

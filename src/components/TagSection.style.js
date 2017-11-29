import styled from "styled-components"

export const Em = styled.em`
  display: block;
  margin: 2em 0 1em;
  font-size: 0.9rem;
  :before {
    display: block;
    content: "";
    width: 3px;
    height: 3px;
    margin: 2em auto;
    border-radius: 50%;
    background: black;
    box-shadow: calc(3px*8) 0 0 0 black, calc(3px*-8) 0 0 0 black;
  }
`

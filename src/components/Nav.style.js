import styled from 'styled-components'

export const Nav = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  letter-spacing: .35rem;
  text-transform: uppercase;
  float: right;
  ul {
    li {
      display: inline-block;
      line-height: 1;
      list-style: none;
    }
  }
`

export const A = styled.a`
  padding: .5rem .5rem;
  $:hover,
  $:focus {
    color: gray;
    text-decoration: none;
  }
`

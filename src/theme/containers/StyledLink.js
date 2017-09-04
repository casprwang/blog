import Link from 'gatsby-link'
import styled from 'styled-components'

export const StyledLink = styled(Link)`
  :hover {
    color: ${props => props.color}
  }
`

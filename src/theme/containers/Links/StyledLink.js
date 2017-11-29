import Link from "gatsby-link"
import styled from "styled-components"

export const ProjectLink = styled(Link)`
  font-feature-settings: "case" 1, "ss01" 1, "ss02" 1;
  :hover {
    color: ${props => props.color};
    text-decoration: underline;
  }
`

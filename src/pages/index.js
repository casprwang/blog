import React from "react"
import Link from "gatsby-link"
import Helmet from "react-helmet"

export default props => {
  const title = props.data.site.siteMetadata.title
  return (
    <div>
      <Helmet title={`${title}`} />
      <div style={{ marginBottom: "10vmin" }} className="content">
        <header style={{ marginBottom: 0 }}>
          <h1>
            Song Wang
          </h1>
          <h2>self-driven developer</h2>
        </header>
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

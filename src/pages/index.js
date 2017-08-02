import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import { Header } from 'theme/containers/Header.js'

export default props => {
  const title = props.data.site.siteMetadata.title
  return (
    <div>
      <Helmet title={`${title}`} />
      <div>
        <Header>
          <div>
            <h1>SongWang<span>.io</span></h1>
            <small>self-driven developer</small>
          </div>
        </Header>
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

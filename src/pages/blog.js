import React from 'react'
import { graphql } from 'gatsby'

import Layout from 'components/Layout'
import NoteList from 'components/NoteList'
import Header from 'components/Header'
import SEO from 'components/SEO.js'

export default ({ data, location }) => {
  const { title, bio } = data.site.siteMetadata

  return (
    <Layout>
      <SEO title={title} keywords={[`blog`, `gatsby`, `javascript`, `react`]} />
      <Header title={'Blogs'} />
      <NoteList notes={data.allMarkdownRemark.edges} viewCount={15} step={5} />
    </Layout>
  )
}


export const blogpageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        bio
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { draft: { ne: true } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`

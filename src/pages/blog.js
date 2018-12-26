import React from 'react'
import { graphql } from 'gatsby'

import Layout from 'components/layout'
import NoteList from 'components/NoteList'
import Header from 'components/Header'

export default ({ data, location }) => {
  const { title, bio } = data.site.siteMetadata

  return (
    <Layout>
      <Header title={'Blogs'} />
      <NoteList notes={data.allMarkdownRemark.edges} viewCount={8}/>
    </Layout>
  )
}


export const pageQuery = graphql`
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

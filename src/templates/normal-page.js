import React from 'react'
import { graphql } from 'gatsby'
import Layout from 'components/Layout'
import Header from 'components/Header'
import ContentContainer from "theme/containers/ContentContainer.js"
import Comment from "components/Comment"
import SEO from 'components/SEO.js'

export default class extends React.Component {
  render() {
    const post = this.props.data.markdownRemark

    return (
      <Layout>
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        <Header title={post.frontmatter.title} subtitle={''} />
        <ContentContainer dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr />
        <Comment />
      </Layout>
    )
  }
}

// eslint-disable-next-line
export const blogpageQuery = graphql`
  query ($slug: String!) {
    site {
      siteMetadata {
        author
        homeCity
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      fields {
        slug
        tagSlugs
      }
      frontmatter {
        title
        layout
        tags
        description
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`

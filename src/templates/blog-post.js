import React from 'react'
import { graphql } from 'gatsby'
import Layout from 'components/Layout'
import HeaderContainer from "theme/containers/HeaderContainer"
import ContentContainer from "theme/containers/ContentContainer.js"
import Comment from "components/Comment"
import SEO from 'components/SEO.js'
import TagSection from 'components/TagSection'

export default class extends React.Component {
  render() {
    const post = this.props.data.markdownRemark

    return (
      <Layout>
        <SEO title={post.frontmatter.title} description={post.excerpt} />
        <HeaderContainer>
          <div>
            <h1>{post.frontmatter.title}</h1>
            {post.frontmatter.description ? (
              <p>{post.frontmatter.description}</p>
            ) : (
                <small>{post.frontmatter.date}</small>
              )}
          </div>
        </HeaderContainer>
        <ContentContainer dangerouslySetInnerHTML={{ __html: post.html }} />
        <hr />
        <TagSection data={this.props.data} />
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

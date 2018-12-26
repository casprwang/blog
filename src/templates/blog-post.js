import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from 'components/layout'
import HeaderContainer from "theme/containers/HeaderContainer"
import ContentContainer from "theme/containers/ContentContainer.js"
import Comment from "components/Comment"

export default class extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const { fields: { slug } } = post

    return (
      <Layout>
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
        <Comment />
      </Layout>
    )
  }
}

// eslint-disable-next-line
export const pageQuery = graphql`
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

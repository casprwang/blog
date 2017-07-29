import React from 'react'
import Helmet from 'react-helmet'
import { Content } from './blog-post.style.js'
import { TagSection } from '../components/TagSection.js'

class BlogPostRoute extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const { fields: { slug } } = post

    return (
      <div>
        <Helmet
          title={`${post.frontmatter.title}`}
          meta={[
            {
              name: 'description',
              content: post.excerpt || post.frontmatter.description
            }
          ]}
        />
        <div className="content">
          <header>
            {slug.slice(5, 12) === '/links/'
              ? <a
                  rel="noopener noreferrer"
                  target="__blank"
                  href={post.frontmatter.link}
                >
                  <h1>
                    {post.frontmatter.title}
                  </h1>
                </a>
              : <h1>
                  {post.frontmatter.title}
                </h1>}
            <small>
              {post.frontmatter.date}
            </small>
          </header>
          <Content dangerouslySetInnerHTML={{ __html: post.html }} />
          <hr />
          <TagSection {...this.props} />
        </div>
      </div>
    )
  }
}

export default BlogPostRoute

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
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
        tagSlugs
        slug
      }
      frontmatter {
        title
        layout
        tags
        link
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`

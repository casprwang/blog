import React from "react"
import Helmet from "react-helmet"
import Link from "gatsby-link"

class BlogPostRoute extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    //console.log(post)

    let tags
    let tagsSection
    if (this.props.data.markdownRemark.fields.tagSlugs) {
      const tagsArray = this.props.data.markdownRemark.fields.tagSlugs
      tags = tagsArray.map((tag, i) => {
        const divider =
          i < tagsArray.length - 1 &&
          <span>
            {" | "}
          </span>
        return (
          <span key={tag}>
            <Link to={tag}>
              {this.props.data.markdownRemark.frontmatter.tags[i]}
            </Link>
            {divider}
          </span>
        )
      })
      tagsSection = (
        <em>
          Tagged with {tags}
        </em>
      )
    }

    if (post.frontmatter.layout === "page") {
      return (
        <div>
          <Helmet
            title={`${post.frontmatter.title}`}
            meta={[{ name: "description", content: post.excerpt }]}
          />
          <div className="content">
            <header>
              <h1>
                {post.frontmatter.title}
              </h1>
            </header>
            <div dangerouslySetInnerHTML={{ __html: post.html }} />
            <hr />
            {tagsSection}
          </div>
        </div>
      )
    }

    return (
      <div>
        <Helmet
          title={`${post.frontmatter.title}`}
          meta={[{ name: "description", content: post.excerpt || post.frontmatter.description }]}
        />
        <div className="content">
          <header>
            <h1>
              {post.frontmatter.title}
            </h1>
            <small>
              {post.frontmatter.date}
            </small>
          </header>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
          <hr />
          {tagsSection}
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
      }
      frontmatter {
        title
        layout
        tags
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`

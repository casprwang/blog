import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

const isLink = url => url.slice(0, 7) === '/links/'
const isTIL = url => url.slice(0, 5) === '/til/'

export default props => {
  const posts = props.data.allMarkdownRemark.edges
  const siteTitle = props.data.site.siteMetadata.title
  const pathArray = props.data.allSitePage.edges
  const rows = []
  const linkRows = []
  const TILRows = []

  posts.forEach(post => {
    if (post.node.frontmatter.layout !== 'page') {
      if (!isLink(post.node.fields.slug)) {
        if (isTIL(post.node.fields.slug)) {
          TILRows.push(
            <section className="list" key={post.node.fields.slug}>
              <h1>
                <Link to={post.node.fields.slug}>
                  {post.node.frontmatter.title}
                </Link>
              </h1>
            </section>,
          )
        } else {
          rows.push(
            <section className="list" key={post.node.fields.slug}>
              <h1>
                <Link to={post.node.fields.slug}>
                  {post.node.frontmatter.title}
                </Link>
              </h1>
            </section>,
          )
        }
      } else if (isLink(post.node.fields.slug)) {
        linkRows.push(
          <section className="list" key={post.node.fields.slug}>
            <h1>
              <Link to={post.node.fields.slug}>
                {post.node.frontmatter.title}
              </Link>
            </h1>
          </section>,
        )
      }
    }
  })

  return (
    <div className="content">
      <Helmet
        title={`Writing`}
        meta={[{ name: 'description', content: "Song Wang's Writings" }]}
      />
      <header>
        <h1>Writing</h1>
        <h2>TL;DR</h2>
      </header>
      <div className="blog-content">
        <h3>Today I learned</h3>
        {TILRows}
        <h3>Blogs</h3>
        {rows}
        <h3>External Links</h3>
        {linkRows}
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query BlogQuery {
    allSitePage {
      edges {
        node {
          path
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            link
            tags
            date
            layout
          }
        }
      }
    }
  }
`

import React from 'react'
import Link from 'gatsby-link'

export default props => {
  const posts = props.data.allMarkdownRemark.edges
  const siteTitle = props.data.site.siteMetadata.title
  const pathArray = props.data.allSitePage.edges
  const rows = []

  posts.forEach(post => {
    if (post.node.frontmatter.layout !== 'page') {
      if (post.node.frontmatter.draft === false ) {
        rows.push(
          <section className='list' key={post.node.fields.slug}>
            <h1>
              <Link to={post.node.fields.slug}>
                {post.node.frontmatter.title}
              </Link>
            </h1>
          </section>
        )

      }
    }
  })


  return (
    <div className='content'>
      <header>
        <h1>Writing</h1>
        <small>TL;DR</small>
      </header>
      <div className="page-content">
        {rows}
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
  allMarkdownRemark (
    limit: 1000,
    sort: {
      fields: [frontmatter___date]
      order: DESC
    },
  )
  {
    edges {
      node {
        fields {
          slug
        }
        frontmatter {
          title
          date
          draft
          layout
        }
      }
    }
  }
}
`

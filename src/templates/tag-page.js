import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from 'components/Layout'
import Header from 'components/Header'
import SEO from 'components/SEO'
import NoteListContainer from 'theme/containers/NoteListContainer'

export default ({ pageContext, data }) => {
  if (!data.allMarkdownRemark) return null
  const { tag } = pageContext
  const { edges, totalCount } = data.allMarkdownRemark
  const tagHeader = `${totalCount} post${
    totalCount === 1 ? '' : 's'
    } tagged with "${tag}"`

  return (
    <Layout>
      <SEO title={tag} description={tagHeader} />
      <Header title={tag} subtitle={tagHeader} />
      {edges.map(({ node }) => {
        return (
          <NoteListContainer key={node.fields.slug}>
            <h3>
              <Link to={node.fields.slug}>
                {node.frontmatter.title}
              </Link>
            </h3>
          </NoteListContainer>
        )
      })}
      <Link to="/tags">All tags</Link>
    </Layout>
  )
}

// eslint-disable-next-line
export const tagpageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
            tagSlugs
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`

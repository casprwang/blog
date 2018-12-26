import React from 'react'
import { Link, graphql } from 'gatsby'
import Header from 'components/Header'
import TagList from 'theme/containers/TagList'
import Layout from 'components/Layout'


export default ({ data }) => {
  const { title, siteName } = data.site.siteMetadata
  const allTags = data.allMarkdownRemark.group

  let hashMap = {}
  allTags.forEach(({ fieldValue, totalCount }) => {
    if (hashMap[fieldValue.toLowerCase()]) {
      hashMap[fieldValue.toLowerCase()] += totalCount
    } else {
      hashMap[fieldValue.toLowerCase()] = totalCount
    }
  })
  let cleanTags =
    Object.entries(hashMap).map(([key, value]) => ({ fieldValue: key, totalCount: value }))

  return (
    <Layout>
      <Header title="Tags" subtitle={`All Tags from ${siteName}`} />
      <TagList>
        {cleanTags
          .sort((a, b) => b.totalCount - a.totalCount)
          .map(tag => (
            <Link to={`/tags/${tag.fieldValue}/`}>
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          ))}
      </TagList>
    </Layout>

  )
}


// eslint-disable-next-line
export const tagspageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        siteName
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`

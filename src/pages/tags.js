import React from "react"
import { Link } from "gatsby"
import HeaderContainer from "theme/containers/HeaderContainer"
import TagList from "theme/containers/TagList"


export default ({ data }) => {
  const title = data.site.siteMetadata.title
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
    <div>
      <HeaderContainer>
        <div>
          <h1>Tags</h1>
        </div>
      </HeaderContainer>
      <TagList>
        {cleanTags
          .sort((a, b) => b.totalCount - a.totalCount)
          .map(tag => (
            <Link to={`/tags/${tag.fieldValue}/`}>
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          ))}
      </TagList>
    </div>

  )
}


// eslint-disable-next-line
export const tagspageQuery = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
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

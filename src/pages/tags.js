import React from "react"
import Helmet from "react-helmet"
import Link from "gatsby-link"
import kebabCase from "lodash/kebabCase"
import { Header } from "theme/containers/Header.js"
import { TagsIndex } from "./tags.style.js"

const sortTag = tagArray => tagArray.sort((a, b) => b.totalCount - a.totalCount)

class TagsPageRoute extends React.Component {
  render() {
    const title = this.props.data.site.siteMetadata.title
    const allTags = this.props.data.allMarkdownRemark.group

    return (
      <div>
        <Helmet title={title} />
        <Header>
          <div>
            <h1>Tags</h1>
          </div>
        </Header>
        <TagsIndex>
          {sortTag(allTags).map(tag =>
            <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
              {tag.fieldValue} ({tag.totalCount})
            </Link>
          )}
        </TagsIndex>
      </div>
    )
  }
}

export default TagsPageRoute

export const pageQuery = graphql`
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

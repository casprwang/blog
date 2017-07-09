import React from "react"
import Helmet from "react-helmet"
import Link from "gatsby-link"
import kebabCase from "lodash/kebabCase"

class TagsPageRoute extends React.Component {
  render() {
    const title = this.props.data.site.siteMetadata.title
    const allTags = this.props.data.allMarkdownRemark.group

    return (
      <div className="content">
        <Helmet title={title} />
        <div>
          <header>
            <h1>Tags</h1>
          </header>
          <ul>
            {allTags.map(tag =>
              <li key={tag.fieldValue}>
                <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                  {tag.fieldValue} ({tag.totalCount})
                </Link>
              </li>
            )}
          </ul>
        </div>
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

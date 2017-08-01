import React, { Component } from 'react'
import Link from 'gatsby-link'
import { Header } from 'theme/containers/Header.js'

const searchingFor = term => {
  return function(x) {
    return (
      x.node.frontmatter.title.toLowerCase().includes(term.toLowerCase()) ||
      !term
    )
  }
}

class SearchPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pages: this.props.data.allMarkdownRemark.edges,
      term: ''
    }
    this.searchHandler = this.searchHandler.bind(this)
  }

  searchHandler(event) {
    this.setState({ term: event.target.value })
  }

  render() {
    return (
      <div>
        <Header>
        <h1>Search</h1>
        </Header>
        <form>
          <input type="text" onChange={this.searchHandler} />
          {this.state.pages.filter(searchingFor(this.state.term)).map(page =>
            <div>
              <h1>
                {page.node.frontmatter.title}
              </h1>
              <h3>
                {page.node.excerpt || "Link"}
              </h3>
              {page.node.frontmatter.tags}
            </div>
          )}
        </form>
      </div>
    )
  }
}

export default SearchPage

export const pageQuery = graphql`
  query SearchQuery {
    allMarkdownRemark(limit: 1000) {
      edges {
        node {
          id
          excerpt
          timeToRead
          internal {
            content
          }
          headings {
            value
          }
          excerpt
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

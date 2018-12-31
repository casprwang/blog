import React from 'react'
import { Link, graphql } from 'gatsby'
import SearchResultContainer from 'theme/containers/SearchResultContainer'
import SearchFormContainer from 'theme/containers/SearchFormContainer'
import Layout from 'components/Layout'


const searchingFor = term => x => (x.node.frontmatter.tags
  && x.node.frontmatter.tags.every(tag => tag.toLowerCase().includes(term.toLowerCase())))
  || x.node.frontmatter.title.toLowerCase().includes(term.toLowerCase())
  || x.node.excerpt.toLowerCase().includes(term.toLowerCase())
  || !term


const handleEnter = (event) => {
  if (event.keyCode === 13) {
    event.preventDefault()
  }
}

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      pages: this.props.data.allMarkdownRemark.edges,
      term: '',
    }
    this.searchHandler = this.searchHandler.bind(this)
    this.focus = this.focus.bind(this)
  }

  componentDidMount() {
    this.textInput.focus()
  }

  searchHandler(event) {
    this.setState({ term: event.target.value })
  }

  focus() {
    this.textInput.focus()
  }

  render() {
    return (
      <Layout>
        <SearchFormContainer>
          <input
            type="text"
            placeholder="search here"
            onChange={this.searchHandler}
            onKeyDown={handleEnter}
            ref={(input) => {
              this.textInput = input
            }}
          />
        </SearchFormContainer>
        <div>
          {this.state.pages
            .filter(searchingFor(this.state.term))
            .slice(0, 10)
            .map((page, i) => (
              <SearchResultContainer key={i}>
                <h2>
                  <Link to={page.node.fields.slug}>
                    {page.node.frontmatter.title}
                  </Link>
                </h2>
                <p>{page.node.excerpt}</p>
              </SearchResultContainer>
            ))
          }
        </div>
      </Layout>
    )
  }
}

// eslint-disable-next-line
export const searchpageQuery = graphql`
  query {
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {frontmatter: {draft: {ne: true } } }
    ) {
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
            tags
            date
          }
        }
      }
    }
  }
`

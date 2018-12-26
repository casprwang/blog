import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from 'components/Layout'
import SearchResultWrapper from 'theme/containers/Search.js'
import { SearchTagItem, TagIndex } from 'theme/containers/TagItem.js'

const formStyle = {
  display: 'flex',
  color: '#000',
  alignItems: 'left',
  justifyContent: 'left',
  flexDirection: 'column',
  marginTop: '3em',
}

const inputStyle = {
  fontSize: '3em',
  display: 'block',
  width: '50%',
  border: 'none',
  borderBottom: '2px solid gray',
}

const searchingFor = term => {
  return function (x) {
    return (
      (x.node.frontmatter.tags &&
        x.node.frontmatter.tags.every(tag =>
          tag.toLowerCase().includes(term.toLowerCase())
        )) ||
      x.node.frontmatter.title.toLowerCase().includes(term.toLowerCase()) ||
      x.node.excerpt.toLowerCase().includes(term.toLowerCase()) ||
      !term
    )
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
    this.handleEnter = this.handleEnter.bind(this)
  }

  componentDidMount() {
    this.textInput.focus()
  }

  searchHandler(event) {
    this.setState({ term: event.target.value })
  }

  handleEnter(event) {
    if (event.keyCode === 13) {
      event.preventDefault()
    }
  }

  focus() {
    this.textInput.focus()
  }

  render() {
    return (
      <Layout>
        <form style={formStyle}>
          <input
            style={inputStyle}
            type="text"
            onChange={this.searchHandler}
            onKeyDown={this.handleEnter}
            ref={input => {
              this.textInput = input
            }}
          />
        </form>
        <div>
          {this.state.pages
            .filter(searchingFor(this.state.term))
            .slice(0, 10)
            .map((page, i) => (
              <SearchResultWrapper key={i}>
                <h2>
                  <Link to={page.node.fields.slug}>
                    {page.node.frontmatter.title}
                  </Link>
                </h2>
                <p>{page.node.excerpt}</p>
              </SearchResultWrapper>
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
          layout
        }
      }
    }
  }
}
`

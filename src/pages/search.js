import React, { Component } from 'react'
import { Colors } from 'theme/variables'
import Link from 'gatsby-link'
import { Header } from 'theme/containers/Header.js'
import { SearchResultWrapper } from 'theme/containers/Search.js'
import { TagItem, TagIndex } from 'theme/containers/TagItem.js'
// import { Form } from 'theme/containers/Form.js'

import styled from 'styled-components'

const formStyle = {
  display: 'flex',
  color: '#000',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column'
}

const inputStyle = {
  fontSize: '3em',
  display: 'block',
  width: '50%',
  border: 'none',
  borderBottom: '2px solid gray'
}

const searchingFor = term => {
  return function(x) {
    return (
      (x.node.frontmatter.tags &&
        x.node.frontmatter.tags.every(tag =>
          tag.toLowerCase().includes(term.toLowerCase())
        )) ||
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
      <div>
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
          <div>
            {this.state.pages.filter(searchingFor(this.state.term)).map(page =>
              <SearchResultWrapper>
                <Link to={page.node.fields.slug}>
                  <h1>
                    {page.node.frontmatter.title}
                  </h1>
                  <h3>
                    {page.node.excerpt}
                  </h3>
                </Link>
                {/* <h3> */}
                {/*   {page.node.headings.map(heading=>heading.value)} */}
                {/* </h3> */}
                <TagIndex>
                  {page.node.frontmatter.tags
                    ? page.node.fields.tagSlugs.map(tagSlug =>
                        <Link to={tagSlug}>
                          <TagItem>
                            {tagSlug.slice(6, tagSlug.length - 1)}
                          </TagItem>
                        </Link>
                      )
                    : null}
                </TagIndex>
              </SearchResultWrapper>
            ).slice(0,10)}
          </div>
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
            tagSlugs
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

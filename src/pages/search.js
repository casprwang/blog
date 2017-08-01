import React, { Component } from 'react'
import Link from 'gatsby-link'
import { Header } from 'theme/containers/Header.js'
import { SearchItem } from 'theme/containers/SearchItem.js'
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
  borderBottom: '1px solid red'
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
  }


  componentDidMount() {
    this.textInput.focus();
  }

  searchHandler(event) {
    this.setState({ term: event.target.value })
  }


  focus() {
    this.textInput.focus();
  }

  render() {
    return (
      <div>
        <form style={formStyle}>
          <input 
            style={inputStyle} 
            type="text" 
            onChange={this.searchHandler}
            ref={(input) => { this.textInput = input; }}
          />
          {this.state.pages.filter(searchingFor(this.state.term)).map(page =>
            <SearchItem>
              <h1>
                {page.node.frontmatter.title}
              </h1>
              <h3>
                {page.node.excerpt}
              </h3>
              {/* <h3> */}
              {/*   {page.node.headings.map(heading=>heading.value)} */}
              {/* </h3> */}
              <TagIndex>
                {page.node.frontmatter.tags
                  ? page.node.frontmatter.tags.map(tag =>
                      <TagItem>
                        {tag}
                      </TagItem>
                    )
                  : null}
              </TagIndex>
            </SearchItem>
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

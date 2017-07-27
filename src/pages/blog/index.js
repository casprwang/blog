import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from 'styled-components'

const BlogArray = props =>
  <section className="list" key={props.slug}>
    <h3>
      <Link to={props.slug}>
        {props.title}
      </Link>
    </h3>
  </section>

export default class BlogIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      postsNumber: 4,
      tilNumber: 4,
      noteNumber: 4,
      blogNumber: 4
    }
  }

  _handleClick() {
    this.setState({
      postsNumber: this.state.postsNumber + 4,
      tilNumber: this.state.tilNumber,
      noteNumber: this.state.noteNumber,
      blogNumber: this.state.blogNumber
    })
  }

  _handleClickTil() {
    this.setState({
      postsNumber: this.state.postsNumber,
      tilNumber: this.state.tilNumber + 4,
      noteNumber: this.state.noteNumber,
      blogNumber: this.state.blogNumber
    })
  }

  _handleClickNote() {
    this.setState({
      postsNumber: this.state.postsNumber,
      tilNumber: this.state.tilNumber,
      noteNumber: this.state.noteNumber + 4,
      blogNumber: this.state.blogNumber
    })
  }

  _handleClickBlog() {
    this.setState({
      postsNumber: this.state.postsNumber,
      noteNumber: this.state.noteNumber,
      tilNumber: this.state.tilNumber,
      blogNumber: this.state.blogNumber + 4
    })
  }
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const siteTitle = this.props.data.site.siteMetadata.title
    const pathArray = this.props.data.allSitePage.edges
    const rows = []
    const linkRows = []
    const TILRows = []
    const notesRows = []

    /*
     ['til', 'notes', 'links', 'blogs(else)']
  */
    posts.forEach(post => {
      let slug = post.node.fields.slug
      let title = post.node.frontmatter.title
      switch (slug.split('/')[2]) {
        case 'til':
          TILRows.push(<BlogArray slug={slug} title={title} />)
          break
        case 'blog':
          rows.push(<BlogArray slug={slug} title={title} />)
          break
        case 'links':
          linkRows.push(<BlogArray slug={slug} title={title} />)
          break
        case 'notes':
          notesRows.push(<BlogArray slug={slug} title={title} />)
          break
        default:
          break
      }
    })

    return (
      <div className="content">
        <Helmet
          title={`Blog`}
          meta={[{ name: 'description', content: "Song Wang's Writings" }]}
        />
        <header>
          <h1>Blog</h1>
          <h2>TL;DR</h2>
        </header>
        <div className="blog-content">
          <h2>Today I learned</h2>
          {TILRows.slice(0, this.state.tilNumber)}
          <button
            style={{
              display:
                this.state.tilNumber >= TILRows.length ? 'none' : 'inline',
              opacity: '.5',
              fontSize: '92%'
            }}
            onClick={() => this._handleClickTil()}
          >
            more...
          </button>{' '}
          <h2>Notes</h2>
          {notesRows.slice(0, this.state.noteNumber)}

            <button
              style={{
                display:
                  this.state.noteNumber >= notesRows.length ? 'none' : 'inline',
                opacity: '.5',
                fontSize: '92%'
              }}
              onClick={() => this._handleClickNote()}
            >
              more...
            </button>{' '}
          <h2>Blogs</h2>
          {rows.slice(0, this.state.blogNumber)}
            <button
              style={{
                display:
                  this.state.blogNumber >= rows.length ? 'none' : 'inline',
                opacity: '.5',
                fontSize: '92%'
              }}
              onClick={() => this._handleClickBlog()}
            >
              more...
            </button>{' '}
          <h2>External Links </h2>
          <div class="row">{linkRows.slice(0, this.state.postsNumber)}</div>
          <button
            style={{
              display:
                this.state.postsNumber >= linkRows.length ? 'none' : 'inline',
              opacity: '.5',
              fontSize: '92%'
            }}
            onClick={() => this._handleClick()}
          >
            more...
          </button>{' '}
        </div>
      </div>
    )
  }
}

export const pageQuery = graphql`
  query BlogQuery {
    allSitePage {
      edges {
        node {
          path
        }
      }
    }
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
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

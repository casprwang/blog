import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'
import styled from 'styled-components'
import { Header } from 'theme/containers/Header.js'
import { BlogArray, LinkArray, NoteArray } from 'components/Lists/index.js'
import { BlogContent } from './index.style.js'
import {
  TilContainer,
  NoteContainer,
  BlogContainer,
  LinkContainer
} from 'theme/containers/BlogPostsContaners'
import { PullMoreButton } from 'components/Button/index.js'
import Footer from './index.style.js'

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
      const {
        excerpt,
        fields: { slug },
        frontmatter: {date, title, link, tags }
      } = post.node

      switch (slug.split('/')[2]) {
        case 'blog':
          rows.push(<BlogArray tags={tags} date={date} excerpt={excerpt} slug={slug} title={title} />)
          break
        case 'links':
          linkRows.push(<LinkArray tags={tags} slug={link} title={title} />)
          break
        case 'notes':
          notesRows.push(<NoteArray date={date} slug={slug} title={title} />)
          break
        default:
          break
      }
    })

    return (
      <div>
        <Helmet
          title={`Song Wang`}
          meta={[{ name: 'description', content: "Song Wang's website" }]}
        />
        <Header>
          <div>
            <h1>
              SongWang<span>.io</span>
            </h1>
            <p>
              Self driven designer/developer focusing in modular design and
              mordern Web technologies. Javascripter, Vimmer.
            </p>
            <Footer />
          </div>
        </Header>
        <BlogContent>
          <NoteContainer>
            <h2>Notes</h2>
            {notesRows.slice(0, this.state.noteNumber)}

            <PullMoreButton
              number={this.state.noteNumber}
              length={notesRows.length}
              onClick={() => this._handleClickNote()}
            >
              more...
            </PullMoreButton>
          </NoteContainer>
          <BlogContainer>
            <h2>Blogs</h2>
            {rows.slice(0, this.state.blogNumber)}
            <PullMoreButton
              number={this.state.blogNumber}
              length={rows.length}
              onClick={() => this._handleClickBlog()}
            >
              more...
            </PullMoreButton>
          </BlogContainer>
          <LinkContainer>
            <h2>External Links </h2>
            {linkRows.slice(0, this.state.postsNumber)}
            <PullMoreButton
              number={this.state.postsNumber}
              length={linkRows.length}
              onClick={() => this._handleClick()}
            >
              more...
            </PullMoreButton>
          </LinkContainer>
        </BlogContent>
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

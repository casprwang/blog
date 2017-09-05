import React from 'react'
import Helmet from 'react-helmet'
import Header from 'components/Header'
import {
  BlogArray,
  LinkArray,
  NoteArray,
  ProjectArray
} from 'components/Lists'
import { BlogContent } from './index.style.js'
import {
  NoteContainer,
  BlogContainer,
  LinkContainer,
  ProjectContainer
} from 'theme/containers/BlogPostsContaners'
import { PullMoreButton } from 'components/Button'
import { Colors } from 'theme/variables'

export default class BlogIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      postsNumber: 7,
      noteNumber: 6,
      blogNumber: 3
    }
  }

  _handleMouseDown(e) {
    e.preventDefault()
  }

  _handleClickLink() {
    this.setState({
      postsNumber: this.state.postsNumber + 4,
      noteNumber: this.state.noteNumber,
      blogNumber: this.state.blogNumber
    })
  }

  _handleClickNote() {
    this.setState({
      postsNumber: this.state.postsNumber,
      noteNumber: this.state.noteNumber + 4,
      blogNumber: this.state.blogNumber
    })
  }

  _handleClickBlog() {
    this.setState({
      postsNumber: this.state.postsNumber,
      noteNumber: this.state.noteNumber,
      blogNumber: this.state.blogNumber + 2
    })
  }
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const {
      bio,
      title: siteTitle
    } = this.props.data.site.siteMetadata
    const pathArray = this.props.data.allSitePage.edges
    const rows = []
    const linkRows = []
    const TILRows = []
    const notesRows = []
    const projectRows = []

    posts.forEach(post => {
      const {
        excerpt,
        fields: { slug, tagSlugs },
        frontmatter: { date, title, link, tags, color }
      } = post.node

      if (slug.split('/')[1] === 'projects')
        projectRows.push(
          <ProjectArray
            title={title}
            slug={slug}
            color={color}
          />
        )

      switch (slug.split('/')[2]) {
        case 'blog':
          rows.push(
            <BlogArray
              tagSlugs={tagSlugs}
              tags={tags}
              date={date}
              excerpt={excerpt}
              slug={slug}
              title={title}
            />
          )
          break
        case 'links':
          linkRows.push(
            <LinkArray
              tagSlugs={tagSlugs}
              tags={tags}
              slug={link}
              title={title}
            />
          )
          break
        case 'notes':
          notesRows.push(
            <NoteArray
              date={date}
              slug={slug}
              title={title}
            />
          )
          break
        default:
          break
      }
    })

    return (
      <div>
        <Helmet
          title={siteTitle}
          meta={[
            {
              name: 'description',
              content: "Song Wang's website"
            }
          ]}
        />
        <Header bio = {bio} />
        <BlogContent>
          <ProjectContainer>
            {/* <h2>Projects</h2> */}
            <section>
              {projectRows}
            </section>
          </ProjectContainer>
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
          <NoteContainer>
            <h2>Notes</h2>
            <section>
              {notesRows.slice(0, this.state.noteNumber)}
            </section>

            <PullMoreButton
              number={this.state.noteNumber}
              length={notesRows.length}
              onClick={() => this._handleClickNote()}
              onMouseDown={() => this._handleMouseDown()}
            >
              more...
            </PullMoreButton>
          </NoteContainer>
          <LinkContainer>
            <h2>Links </h2>
            {linkRows.slice(0, this.state.postsNumber)}
            <PullMoreButton
              number={this.state.postsNumber}
              length={linkRows.length}
              onClick={() => this._handleClickLink()}
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
        bio
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
            tagSlugs
          }
          frontmatter {
            title
            color
            link
            tags
            date(formatString: "MMM DD, YYYY")
            layout
          }
        }
      }
    }
  }
`

import React from 'react'
import Helmet from 'react-helmet'
import Header from 'components/Header'
import LandingContainer from 'theme/containers/LandingContent'
import {
  BlogArray,
  LinkArray,
  NoteArray,
  ProjectArray
} from 'components/Lists'
import {
  Projects,
  Notes,
  Blogs,
  Links,
  SubNav
} from 'components/LandingPage'

export default class BlogIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      postsNumber: 16,
      noteNumber: 8,
      blogNumber: 3,
      haveBlogs: true,
      haveNotes: false,
      haveLinks: false
    }
  }

  _showBlogs() {
    this.setState({
      postsNumber: this.state.postsNumber,
      noteNumber: this.state.noteNumber,
      blogNumber: this.state.blogNumber,
      haveBlogs: true,
      haveNotes: false,
      haveLinks: false
    })
  }

  _showNotes() {
    this.setState({
      postsNumber: this.state.postsNumber,
      noteNumber: this.state.noteNumber,
      blogNumber: this.state.blogNumber,
      haveBlogs: false,
      haveNotes: true,
      haveLinks: false
    })
  }

  _showLinks() {
    this.setState({
      postsNumber: this.state.postsNumber,
      noteNumber: this.state.noteNumber,
      blogNumber: this.state.blogNumber,
      haveBlogs: false,
      haveNotes: false,
      haveLinks: true
    })
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

    const rows = []
    const linkRows = []
    const TILRows = []
    const notesRows = []
    const projectRows = []

    posts.forEach(post => {
      const {
        excerpt,
        fields: { slug, tagSlugs },
        frontmatter: {
          date,
          title,
          link,
          tags,
          color,
          description
        }
      } = post.node

      if (slug.split('/')[1] === 'projects')
        projectRows.unshift(
          <ProjectArray
            title={title}
            slug={slug}
            color={color}
            description={description}
          />
        )
      else
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
                tags={tags}
                slug={link}
                title={title}
              />
            )
            break
          case 'notes':
            notesRows.push(
              <NoteArray
                tagSlugs={tagSlugs}
                tags={tags}
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
        <Header bio={bio} />
        <LandingContainer>
          <Projects row={projectRows} />
          <SubNav
            checkNote={this.state.haveNotes}
            checkBlog={this.state.haveBlogs}
            checkLink={this.state.haveLinks}
            clickNote={() => this._showNotes()}
            clickBlog={() => this._showBlogs()}
            clickLink={() => this._showLinks()}
          />
          {this.state.haveBlogs
            ? <Blogs
                row={rows.slice(0, this.state.blogNumber)}
                number={this.state.blogNumber}
                length={rows.length}
                onClick={() => this._handleClickBlog()}
              />
            : null}
          {this.state.haveNotes
            ? <Notes
                row={notesRows.slice(
                  0,
                  this.state.noteNumber
                )}
                number={this.state.noteNumber}
                length={notesRows.length}
                onClick={() => this._handleClickNote()}
              />
            : null}
          {this.state.haveLinks
            ? <Links
                row={linkRows.slice(
                  0,
                  this.state.postsNumber
                )}
                number={this.state.postsNumber}
                length={linkRows.length}
                onClick={() => this._handleClickLink()}
              />
            : null}
        </LandingContainer>
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
      filter: {frontmatter: {draft: { ne: true}}}
    ) {
      edges {
        node {
          excerpt(pruneLength: 250)
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
            description
            layout
          }
        }
      }
    }
  }
`

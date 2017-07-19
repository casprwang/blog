import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

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
      clicked: false
    }
  }

  _handleClick() {
    this.setState({
      postsNumber: this.state.postsNumber + 100,
      clicked: true
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
      switch (slug.split('/')[1]) {
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
          {TILRows}
          <div
            style={{
              backGround: 'red'
            }}
          />
          <h2>Notes</h2>
          {notesRows}
          <h2>Blogs</h2>
          {rows}
          <h2>External Links </h2>
          <div class="row">{linkRows.slice(0, this.state.postsNumber)}</div>
          <button
            style={{
              display: this.state.clicked ? 'none' : 'inline',
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

import React from "react"
import Helmet from "react-helmet"
import Header from "components/Header.jsx"
import LandingContainer from "theme/containers/LandingContent"
import {
  BlogArray,
  LinkArray,
  NoteArray,
  ProjectArray,
} from "components/Lists"
import { Projects, Notes, Blogs, Links, SubNav } from "components/LandingPage"

import { connect } from "react-redux"

const mapStateToProps = ({ blog, note, link, tab }) => {
  return {
    blog,
    note,
    link,
    tab,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increBlog: () => dispatch({ type: `INCREMENT_BLOG` }),
    increNote: () => dispatch({ type: `INCREMENT_NOTE` }),
    increLink: () => dispatch({ type: `INCREMENT_LINK` }),
    toggleBlog: () => dispatch({ type: `TOGGLE_BLOG` }),
    toggleNote: () => dispatch({ type: `TOGGLE_NOTE` }),
    toggleLink: () => dispatch({ type: `TOGGLE_LINK` }),
  }
}

const Index = props => {
  const posts = props.data.allMarkdownRemark.edges
  const { bio, title: siteTitle } = props.data.site.siteMetadata

  const rows = []
  const linkRows = []
  const TILRows = []
  const notesRows = []
  const projectRows = []

  posts.forEach(post => {
    const {
      excerpt,
      fields: { slug, tagSlugs },
      frontmatter: { date, title, link, tags, color, description },
    } = post.node

    if (slug.split(`/`)[1] === `projects`) {
      projectRows.unshift(<ProjectArray
        title={title}
        slug={slug}
        color={color}
        description={description}
      />)
    } else {
      switch (slug.split(`/`)[2]) {
      case `blog`:
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
      case `links`:
        linkRows.push(
          <LinkArray tags={tags} slug={link} title={title} />
        )
        break
      case `notes`:
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
    }
  })

  // organizing array
  projectRows.unshift(projectRows.pop())
  projectRows.unshift(projectRows.pop())

  return (
    <div>
      <Helmet
        title={siteTitle}
        meta={[
          {
            name: `description`,
            content: `Song Wang's website`,
          },
        ]}
      />
      <Header bio={bio} />
      <LandingContainer>
        <Projects row={projectRows} />
        <SubNav
          checkNote={props.tab.note}
          checkBlog={props.tab.blog}
          checkLink={props.tab.link}
          clickNote={props.toggleNote}
          clickBlog={props.toggleBlog}
          clickLink={props.toggleLink}
        />
        {props.tab.blog ? (
          <Blogs
            row={rows.slice(0, props.blog)}
            number={props.blog}
            length={rows.length}
            onClick={() => props.increBlog()}
          />
        ) : null}
        {props.tab.link ? (
          <Links
            row={linkRows.slice(0, props.link)}
            number={props.link}
            length={linkRows.length}
            onClick={() => props.increLink()}
          />
        ) : null}
        {props.tab.note ? (
          <Notes
            row={notesRows.slice(0, props.note)}
            number={props.note}
            length={notesRows.length}
            onClick={() => props.increNote()}
          />
        ) : null}
      </LandingContainer>
    </div>
  )
}

const ConnectedIndex = connect(mapStateToProps, mapDispatchToProps)(Index)

export default ConnectedIndex

// eslint-disable-next-line
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
      filter: { frontmatter: { draft: { ne: true } } }
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

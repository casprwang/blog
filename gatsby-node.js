const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

const getKebab = s => s.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/\s+/g, '-').toLowerCase()

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const blogPost = path.resolve(`./src/templates/blog-post.js`)
    // const tagPage = path.resolve(`./src/templates/tag-page.js`)
    resolve(
      graphql(
        `
          {
            allMarkdownRemark(
              sort: { fields: [frontmatter___date], order: DESC }
              limit: 1000
            ) {
              edges {
                node {
                  fields {
                    slug
                  }
                  frontmatter {
                    title
                    tags
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        // Create blog posts pages.
        const posts = result.data.allMarkdownRemark.edges

        posts.forEach((post, index) => {
          const previous =
            index === posts.length - 1 ? null : posts[index + 1].node
          const next = index === 0 ? null : posts[index - 1].node

          createPage({
            path: post.node.fields.slug,
            component: blogPost,
            context: {
              slug: post.node.fields.slug,
              previous,
              next,
            },
          })
        })

        let tags = new Set()

        posts.forEach(({ node }) => {
          if (node.frontmatter &&
            node.frontmatter.tags &&
            node.frontmatter.tags.length) {
            node.frontmatter.tags.forEach(tag => tags.add(tag.toLowerCase()))
          }
        })

        // tags.forEach(tag => {
        //   const tagPath = `/tags/${getKebab(tag)}/`
        //   createPage({
        //     path: tagPath,
        //     component: tagPage,
        //     context: {
        //       tag
        //     }
        //   })
        // })

      })
    )
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node)

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }

  if (node.frontmatter && node.frontmatter.tags && node.frontmatter.tags.length) {
    const tagSlugs = node.frontmatter.tags.map(tag => `/tags/${getKebab(tag)}/`)
    createNodeField({
      name: `tagSlugs`,
      node,
      value: tagSlugs,
    })
  }
}


exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: ["src", "node_modules"],
    },
  })
}

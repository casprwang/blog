module.exports = {
  siteMetadata: {
    title: 'Song Wang',
    author: 'Song Wang',
    homeCity: 'New York',
    bio:
      'Self driven developer who makes simple and stupid codes'
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: 'images'
      }
    },
    {
      resolve: `gatsby-plugin-postcss-sass`
    },
    `gatsby-transformer-sharp`,
    // `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 740
            }
          },
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants'
        ]
      }
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-101324222-1`
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Song Wang',
        short_name: 'Song',
        icons: [
          {
            src: '/logo.png',
            sizes: '1024x1024',
            type: 'image/png'
          }
        ],
        start_url: '/',
        background_color: 'white',
        theme_color: 'white',
        display: 'minimal-ui'
      }
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-preact`,
    `gatsby-plugin-react-helmet`
  ]
}

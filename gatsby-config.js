module.exports = {
  siteMetadata: {
    title: "Casper Wang",
    author: {
      name: "Casper Wang",
      summary: "Full stack engineering, coding and design",
    },
    description: "A Blog site from Casper Wang",
    siteUrl: "https://casprwang.com",
    social: {
      github: "https://github.com/casprwang",
      twitter: "https://twitter.com/casprwang",
      linkedin: "https://www.linkedin.com/in/casprwang/"
    },
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content`,
        name: "pages",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/assets`,
        name: "assets",
      },
    },
    "gatsby-plugin-sharp",
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 800,
              showCaptions: true,
            },
          },
          {
            resolve: "gatsby-remark-responsive-iframe",
            options: {
              wrapperStyle: "margin-bottom: 1.0725rem",
            },
          },
          "gatsby-remark-prismjs",
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-smartypants",
        ],
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-CJVRF7MCRX",
      },
    },
    "gatsby-plugin-feed",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Casper Wang",
        short_name: "CW",
        start_url: "/",
        background_color: "#f4f4f2",
        theme_color: "#43678a",
        display: "minimal-ui",
        icon: "content/assets/logo.png",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-offline",
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-netlify", // make sure to keep it last in the array
  ],
};

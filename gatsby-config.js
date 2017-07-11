module.exports = {
	siteMetadata: {
		title: 'Song Wang',
		author: 'Song Wang',
		homeCity: 'New Jersey'
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
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							// It's important to specify the maxWidth (in pixels) of
							// the content container as this plugin uses this as the
							// base for generating different widths of each image.
							maxWidth: 590
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
				name: 'Bricolage',
				short_name: 'Bricolage',
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

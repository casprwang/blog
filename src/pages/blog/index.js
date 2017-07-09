import React from 'react'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

const isLink = url => url.slice(0, 7) === '/links/'
const isTIL = url => url.slice(0, 5) === '/til/'

const BlogArray = props =>
	<section className="list" key={props.slug}>
		<h1>
			<Link to={props.slug}>
				{props.title}
			</Link>
		</h1>
	</section>

const pushArray = arr => {
	arr.push(<BlogArray slug={slug} title={title} />)
}

export default props => {
	const posts = props.data.allMarkdownRemark.edges
	const siteTitle = props.data.site.siteMetadata.title
	const pathArray = props.data.allSitePage.edges
	const rows = []
	const linkRows = []
	const TILRows = []

	posts.forEach(post => {
		let slug = post.node.fields.slug
		let title = post.node.frontmatter.title

		if (post.node.frontmatter.layout !== 'page') {
			if (!isLink(slug)) {
				if (isTIL(slug)) {
					TILRows.push(<BlogArray slug={slug} title={title} />)
				} else {
					rows.push(<BlogArray slug={slug} title={title} />)
				}
			} else if (isLink(slug)) {
					linkRows.push(<BlogArray slug={slug} title={title} />)
			}
		}
	})

	return (
		<div className="content">
			<Helmet
				title={`Writing`}
				meta={[{ name: 'description', content: "Song Wang's Writings" }]}
			/>
			<header>
				<h1>Writing</h1>
				<h2>TL;DR</h2>
			</header>
			<div className="blog-content">
				<h3>Today I learned</h3>
				{TILRows}
				<h3>Blogs</h3>
				{rows}
				<h3>External Links</h3>
				{linkRows}
			</div>
		</div>
	)
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

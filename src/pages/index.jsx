import React from "react";
import { graphql, Link } from "gatsby";

import Layout from "../components/Layout";
import SEO from "../components/SEO";

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const summary = data.site.siteMetadata?.author?.summary || `Title`;
  const post = data.allMarkdownRemark.nodes?.[0];
  const title = post?.frontmatter?.title;
  const slug = post?.fields?.slug;

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="All posts" />
      <div className="hero">
        <h1>{siteTitle}</h1>
        <p>{summary}</p>
        <p className="p-more">
          <Link className="link-about" to={"/about"}>
            Find out more
          </Link>
        </p>
        <p className="p-latest">
          <Link className="link-latest" to={"/blog"}>
            Latest
          </Link>
          <Link className="link-latest-post" to={slug}>{title}</Link>
        </p>
      </div>
    </Layout>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        author {
          summary
        }
      }
    }
    allMarkdownRemark(
      limit: 1
      filter: { fields: { slug: { glob: "/blog/**" } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      nodes {
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`;

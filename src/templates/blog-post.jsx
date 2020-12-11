import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import Header from "../components/Header";
import Comment from "../components/Comment";
import SEO from "../components/SEO";
import TagSection from "../components/TagSection";

const BlogPost = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <SEO title={post.frontmatter.title} description={post.excerpt} />
      <Header title={post.frontmatter.title} subtitle={post.frontmatter.date} />
      <main dangerouslySetInnerHTML={{ __html: post.html }} />
      <hr />
      <TagSection data={data} />
      <Comment />
    </Layout>
  );
};

export default BlogPost;

// eslint-disable-next-line
export const blogpageQuery = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        author
        homeCity
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      fields {
        slug
        tagSlugs
      }
      frontmatter {
        title
        tags
        description
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;

import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import MainContainer from 'theme/containers/MainContainer';

import Layout from 'components/Layout';
import Header from 'components/Header';
import Comment from 'components/Comment';
import SEO from 'components/SEO';
import TagSection from 'components/TagSection';


const BlogPost = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <SEO title={post.frontmatter.title} description={post.excerpt} />
      <Header title={post.frontmatter.title} subtitle={post.frontmatter.date} />
      <MainContainer dangerouslySetInnerHTML={{ __html: post.html }} />
      <hr />
      <TagSection data={data} />
      <Comment />
    </Layout>
  );
};

BlogPost.defaultProps = {
  data: {
    site: {
      siteMetadata: {
        author: '',
        homeCity: '',
      },
    },
    markdownRemark: {
      html: '',
      excerpt: '',
      fields: {
        slug: '',
        tagSlugs: [],
      },
      frontmatter: {
        title: '',
        tags: [],
        description: '',
        date: '',
      },
    },
  },
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        author: PropTypes.string,
        homeCity: PropTypes.string,
      }),
    }),
    markdownRemark: PropTypes.shape({
      html: PropTypes.string,
      excerpt: PropTypes.string,
      fields: PropTypes.shape({
        slug: PropTypes.string,
        tagSlugs: PropTypes.array,
      }),
      frontmatter: PropTypes.shape({
        title: PropTypes.string,
        tags: PropTypes.array,
        description: PropTypes.string,
        date: PropTypes.string,
      }),
    }),
  }),
};

export default BlogPost;

// eslint-disable-next-line
export const blogpageQuery = graphql`
  query ($slug: String!) {
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

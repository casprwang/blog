import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from 'components/Layout';
import NoteList from 'components/NoteList';
import Header from 'components/Header';
import SEO from 'components/SEO';


const Blog = ({ data }) => {
  const { title } = data.site.siteMetadata;
  return (
    <Layout>
      <SEO title={title} keywords={['blog', 'gatsby', 'javascript', 'react']} />
      <Header title="Blogs" />
      <NoteList notes={data.allMarkdownRemark.edges} viewCount={15} step={5} />
    </Layout>
  );
};

Blog.defaultProps = {
  data: {
    site: {
      siteMetadata: '',
    },
    allMarkdownRemark: {
      edges: [],
    },
  },
};

Blog.propTypes = {
  data: PropTypes.shape({
    site: {
      siteMetadata: PropTypes.string,
    },
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
};

export default Blog;

export const blogpageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { draft: { ne: true } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`;

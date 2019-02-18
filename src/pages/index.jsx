import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from 'components/Layout';
import NoteList from 'components/NoteList';
import Header from 'components/Header';
import SEO from 'components/SEO';


const Index = ({ data }) => {
  const { title, bio } = data.site.siteMetadata;
  return (
    <Layout>
      <SEO title={title} keywords={['blog', 'gatsby', 'javascript', 'react']} />
      <Header title={title} subtitle={bio} />
      <NoteList notes={data.allMarkdownRemark.edges} viewCount={3} />
    </Layout>
  );
};

Index.defaultProps = {
  data: {
    site: {
      siteMetadata: {
        title: '',
        bio: '',
      },
    },
    allMarkdownRemark: {
      edges: [],
    },
  },
};

Index.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string,
        bio: PropTypes.string,
      }),
    }),
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.shape({
        node: PropTypes.shape({
          excerpt: PropTypes.string,
          fields: PropTypes.shape({
            slug: PropTypes.string,
          }),
          frontematter: PropTypes.shape({
            date: PropTypes.string,
            title: PropTypes.string,
          }),
        }),
      })),
    }),
  }),
};

export default Index;

export const indexpageQuery = graphql`
  query {
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

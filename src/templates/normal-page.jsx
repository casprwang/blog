import React from 'react';
import { graphql } from 'gatsby';

import MainContainer from 'theme/containers/MainContainer';

import Layout from 'components/Layout';
import Header from 'components/Header';
import Comment from 'components/Comment';
import SEO from 'components/SEO';


const NormalPage = ({ data }) => {
  const post = data.markdownRemark;
  return (
    <Layout>
      <SEO title={post.frontmatter.title} description={post.excerpt} />
      <Header title={post.frontmatter.title} subtitle="" />
      <MainContainer dangerouslySetInnerHTML={{ __html: post.html }} />
      <hr />
      <Comment />
    </Layout>
  );
};

NormalPage.defaultProps = {
  data: {
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


export default NormalPage;


// eslint-disable-next-line
export const blogpageQuery = graphql`
  query ($slug: String!) {
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

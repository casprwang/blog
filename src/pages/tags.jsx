import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import TagListContainer from 'theme/containers/TagListContainer';

import Header from 'components/Header';
import Layout from 'components/Layout';
import SEO from 'components/SEO';


const getKebab = s => s.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/\s+/g, '-').toLowerCase();

const Tags = ({ data }) => {
  const { title, siteName } = data.site.siteMetadata;
  const allTags = data.allMarkdownRemark.group;

  const hashMap = {};
  allTags.forEach(({ fieldValue, totalCount }) => {
    if (hashMap[fieldValue.toLowerCase()]) {
      hashMap[fieldValue.toLowerCase()] += totalCount;
    } else {
      hashMap[fieldValue.toLowerCase()] = totalCount;
    }
  });
  const cleanTags = Object
    .entries(hashMap)
    .map(([key, value]) => ({ fieldValue: key, totalCount: value }));

  return (
    <Layout>
      <SEO title={title} keywords={['blog', 'gatsby', 'javascript', 'react']} />
      <Header title="Tags" subtitle={`All Tags from ${siteName}`} />
      <TagListContainer>
        {cleanTags
          .sort((a, b) => b.totalCount - a.totalCount)
          .map(tag => (
            <Link key={tag.fieldValue} to={`/tags/${getKebab(tag.fieldValue)}/`}>
              {tag.fieldValue}
              {' '}
              (
              {tag.totalCount}
              )
            </Link>
          ))}
      </TagListContainer>
    </Layout>

  );
};

Tags.defaultProps = {
  data: {
    site: {
      siteMetadata: {
        title: '',
        siteName: '',
      },
    },
    allMarkdownRemark: {
      group: {
        fieldValue: '',
        totalCount: 0,
      },
    },
  },
};

Tags.propTypes = {
  data: PropTypes.shape({
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string,
        siteName: PropTypes.string,
      }),
    }),
    allMarkdownRemark: PropTypes.shape({
      group: PropTypes.shape({
        fieldValue: PropTypes.string,
        totalCount: PropTypes.number,
      }),
    }),
  }),
};

export default Tags;

// eslint-disable-next-line
export const tagspageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        siteName
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`;

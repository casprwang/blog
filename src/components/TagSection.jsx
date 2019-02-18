import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import TagSectionContainer from 'theme/containers/TagSectionContainer';


const TagRow = ({ data }) => {
  let tags;
  if (data.markdownRemark.fields.tagSlugs) {
    const tagsArray = data.markdownRemark.fields.tagSlugs;
    tags = tagsArray.map((tag, i) => {
      const divider = i < tagsArray.length - 1 && <span>, </span>;
      return (
        <span key={tag}>
          <Link to={tag}>{data.markdownRemark.frontmatter.tags[i]}</Link>
          {divider}
        </span>
      );
    });
  }
  return tags;
};


const TagSection = ({ data }) => (
  <TagSectionContainer>
    <span>Tagged with</span>
    <TagRow data={data} />
  </TagSectionContainer>
);

TagSection.defaultProps = {
  data: {
    markdownRemark: {
      fields: {},
    },
  },
};

TagSection.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        tags: PropTypes.arrayOf(PropTypes.string),
      }),
      fields: PropTypes.shape({
        tagSlugs: PropTypes.string,
      }),
    }),
  }),
};

export default TagSection;

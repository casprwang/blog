import React from "react";
import { Link } from "gatsby";

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
  <div>
    <span>Tagged with</span>
    <TagRow data={data} />
  </div>
);

export default TagSection;

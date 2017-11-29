import React from "react"
import Link from "gatsby-link"
import { Em } from "./TagSection.style.js"
import { InlineTag } from "theme/containers/TagItem"

export const TagSection = props => {
  let tags
  let tagsSection
  if (props.data.markdownRemark.fields.tagSlugs) {
    const tagsArray = props.data.markdownRemark.fields.tagSlugs
    tags = tagsArray.map((tag, i) => {
      const divider = i < tagsArray.length - 1 && <span>{", "}</span>
      return (
        <span key={tag}>
          <Link to={tag}>{props.data.markdownRemark.frontmatter.tags[i]}</Link>
          {divider}
        </span>
      )
    })
    tagsSection = (
      <Em>
        <span
          style={{
            opacity: ".4",
            paddingRight: ".4em",
          }}
        >
          Tagged with
        </span>
        {tags}
      </Em>
    )
  }
  return tagsSection
}

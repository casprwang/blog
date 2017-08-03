import React from 'react'
import Link from 'gatsby-link'
import { InlineTag } from 'theme/containers/TagItem'

export const BlogArray = props =>
  <h3>
    <Link to={props.slug}>
      {props.title}
    </Link>
  </h3>


export const LinkArray = ({ tags, slug, title }) =>
  <h3>
    <a href={slug} target="_blank" rel="noopener">
      {title}
    </a>
    <InlineTag>
      {tags&&tags[0].toLowerCase()}
    </InlineTag>
  </h3>

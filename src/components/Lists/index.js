import React from 'react'
import Link from 'gatsby-link'

export const BlogArray = props =>
  <h3>
    <Link to={props.slug}>
      {props.title}
    </Link>
  </h3>


export const LinkArray = props =>
  <h3>
    <a href={props.slug} target="_blank" rel="noopener">
      {props.title}
    </a>
  </h3>

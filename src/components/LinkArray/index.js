import React from 'react'
import Link from 'gatsby-link'

export const LinkArray = props =>
  <section key={props.slug}>
    <h3>
      <a href={props.slug} target="_blank" rel="noopener">
        {props.title}
      </a>
    </h3>
  </section>

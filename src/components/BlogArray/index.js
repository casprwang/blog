import React from 'react'
import Link from 'gatsby-link'

export const BlogArray = props =>
  <section className="list" key={props.slug}>
    <h3>
      <Link to={props.slug}>
        {props.title}
      </Link>
    </h3>
  </section>

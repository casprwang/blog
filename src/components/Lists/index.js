import React from 'react'
import moment from 'moment'
import Link from 'gatsby-link'
import { InlineTag, TimeTag } from 'theme/containers/TagItem'
import { ContentContainer } from 'theme/containers/ContentContainer.js'
import { P } from './index.style.js'
import { ReadMoreButton } from 'components/Button/index.js'


export const BlogArray = props =>
  <div>
    <h3>
      <Link to={props.slug}>
        {props.title}
      </Link>
    <TimeTag>{moment(props.date).format('MMM D, YYYY')}</TimeTag>
    </h3>
    <P>{props.excerpt}</P>
  </div>

export const LinkArray = ({ tags, slug, title }) =>
  <h3>
    <a href={slug} target="_blank" rel="noopener">
      {title}
    </a>
    <InlineTag>
      {tags && tags[0].toLowerCase()}
    </InlineTag>
  </h3>

export const NoteArray = ({ slug, date, title }) =>
  <h3>
    <Link to={slug}>
      {title}
    </Link>
    <InlineTag>{moment(date).fromNow()}</InlineTag>
    {/* <InlineTag>{date}</InlineTag> */}
  </h3>

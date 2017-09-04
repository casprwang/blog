import React from 'react'
import Link from 'gatsby-link'
import { StyledLink } from 'theme/containers/StyledLink'
import {
  InlineTag,
  BlogInlineTag,
  TimeTag,
  TagWrapper
} from 'theme/containers/TagItem'
import { ContentContainer } from 'theme/containers/ContentContainer.js'
import { ReadMoreButton } from 'components/Button/index.js'
import { BlogTags } from 'components/TagSection'

export const ProjectArray = props => {
  return (
    <h3>
      <StyledLink to={props.slug} color={props.color}>
        {props.title}
        {/* <TagWrapper> */}
        {/*   <TimeTag> */}
        {/*     {props.date} */}
        {/*   </TimeTag> */}
        {/*   <BlogInlineTag> */}
        {/*     <BlogTags tagNames={props.tags} /> */}
        {/*   </BlogInlineTag> */}
        {/* </TagWrapper> */}
        {/* <p> */}
        {/*   {props.excerpt} */}
        {/* </p> */}
      </StyledLink>
    </h3>
  )
}

export const BlogArray = props => {
  return (
    <div>
      <Link to={props.slug}>
        <h3>
          {props.title}
          <TagWrapper>
            <TimeTag>
              {props.date}
            </TimeTag>
            <BlogInlineTag>
              <BlogTags tagNames={props.tags} />
            </BlogInlineTag>
          </TagWrapper>
        </h3>
        <p>
          {props.excerpt}
        </p>
      </Link>
    </div>
  )
}

export const LinkArray = props =>
  <h3>
    <a href={props.slug} target="_blank" rel="noopener">
      {props.title}
    </a>
    <InlineTag>
      <Link to={props.tagSlugs[0]}>
        {props.tags && props.tags[0].toLowerCase()}
      </Link>
    </InlineTag>
  </h3>

export const NoteArray = ({ slug, date, title }) =>
  <h3>
    <Link to={slug}>
      {title}
    </Link>
    {/* <InlineTag> */}
    {/* </InlineTag> */}
    {/* <InlineTag>{date}</InlineTag> */}
  </h3>

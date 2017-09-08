import React from 'react'
import Link from 'gatsby-link'
import {
  ProjectLink,
  PostLink,
  LinkLink
} from 'theme/containers/Links'
import {
  InlineTag,
  BlogInlineTag,
  TimeTag,
  TagWrapper,
  NoteTag
} from 'theme/containers/TagItem'
import { ContentContainer } from 'theme/containers/ContentContainer.js'

export const ProjectArray = props => {
  return (
    <h3>
      <ProjectLink to={props.slug} color={props.color}>
        {props.title}
      </ProjectLink>
    </h3>
  )
}

export const BlogArray = props => {
  return (
    <div>
      <h3>
        <PostLink to={props.slug}>
          {props.title}
        </PostLink>
        <TagWrapper>
          <TimeTag>
            {props.date}
          </TimeTag>
          <BlogInlineTag>
            {props.tags.map((tag, i) =>
              <Link to={props.tagSlugs[i]}>
                {tag}
              </Link>
            )}
          </BlogInlineTag>
        </TagWrapper>
      </h3>
      <p>
        <PostLink
          style={{
            cursor: 'pointer',
            backgroundImage: 'none'
          }}
          to={props.slug}
        >
          {props.excerpt}
        </PostLink>
      </p>
    </div>
  )
}

export const LinkArray = props =>
  <h3>
    <LinkLink
      href={props.slug}
      target="_blank"
      rel="noopener"
    >
      {props.title}
    </LinkLink>
  </h3>

export const NoteArray = props =>
  <h3>
    <PostLink to={props.slug}>
      {props.title}
    </PostLink>
    <TagWrapper>
      <TimeTag>
        {props.date}
      </TimeTag>
      <BlogInlineTag>
        {props.tags.map((tag, i) =>
          <Link to={props.tagSlugs[i]}>
            {tag}
          </Link>
        )}
      </BlogInlineTag>
    </TagWrapper>
  </h3>

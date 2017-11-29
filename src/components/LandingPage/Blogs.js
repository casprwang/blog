import React from 'react'
import { BlogContainer } from 'theme/containers/BlogPostsContaners'
import { PullMoreButton } from 'theme/containers/Button.style.js'


export default props =>
  <BlogContainer>
    {props.row}
    <PullMoreButton
      number={props.number}
      length={props.length}
      onClick={props.onClick}
      onMouseDown={e => {
        e.preventDefault()
      }}
    >
      More
    </PullMoreButton>
  </BlogContainer>

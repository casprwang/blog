import React from 'react'
import { BlogContainer } from 'theme/containers/BlogPostsContaners'
import { PullMoreButton } from 'theme/containers/Button.style.js'

export default props =>
  <BlogContainer>
    <h2>Blogs</h2>
    {props.row}
    <PullMoreButton
      number={props.number}
      length={props.length}
      onClick={props.onClick}
      onMouseDown={e => {
        e.preventDefault()
      }}
    >
      more...
    </PullMoreButton>
  </BlogContainer>

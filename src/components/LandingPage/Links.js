import React from 'react'
import { LinkContainer } from 'theme/containers/BlogPostsContaners'
import { PullMoreButton } from 'theme/containers/Button.style.js'

export default props =>
  <LinkContainer>
    <h2>Links</h2>
    {props.row}
    <PullMoreButton
      number={props.number}
      length={props.length}
      onClick={props.onClick}
    >
      more...
    </PullMoreButton>
  </LinkContainer>



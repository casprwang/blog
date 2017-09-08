import React from 'react'
import { LinkContainer } from 'theme/containers/BlogPostsContaners'
import { PullMoreButton } from 'theme/containers/Button.style.js'

export default props =>
  <LinkContainer>
    <section>
      {props.row}
    </section>
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
  </LinkContainer>

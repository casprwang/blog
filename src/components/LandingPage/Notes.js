import React from 'react'
import { NoteContainer } from 'theme/containers/BlogPostsContaners'
import { PullMoreButton } from 'theme/containers/Button.style.js'

export default props =>
  <NoteContainer>
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
  </NoteContainer>

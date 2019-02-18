import React from 'react'
import CommentContainer from 'theme/containers/CommentContainer'


const URL = 'https://github.com/wangsongiam/songwang.io/issues/new'

export default () => (
  <CommentContainer>
    <p>
      Questions, Comments, Suggestions?
      <a rel="noopener noreferrer" target="__blank" href={URL}>
        Open an Issue
      </a>
    </p>
  </CommentContainer>
)

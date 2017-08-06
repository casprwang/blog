import React from 'react'
import styled from 'styled-components'

const issueUrl = 'https://github.com/wangsongiam/songwang.io/issues/new'

const CommentSection = styled.div`
  margin-top: 2em;
  a {
    font-weight: 550;
    border-bottom: 1px dashed;
    margin-left: .3em;
  }
`

export default () =>
  <CommentSection>
    <p>
      Questions, Comments, Suggestions? 
      <a rel="noopener noreferrer" target="__blank" href={issueUrl}>
        Open an Issue
      </a>
    </p>
  </CommentSection>

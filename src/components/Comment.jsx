import React from "react"
import styled from "styled-components"
import { media } from "theme/utils/media"

const issueUrl = `https://github.com/wangsongiam/songwang.io/issues/new`

const CommentSection = styled.div`
  margin-top: 2em;
  a {
    font-weight: 550;
    border-bottom: 1px dashed;
    margin-left: 0.3em;
    ${media.phone`
      display: inline-block;
      text-align: center;
      margin: 0 auto;
    `};
  }
`

export default () => (
  <CommentSection>
    <p>
      Questions, Comments, Suggestions?
      <a rel="noopener noreferrer" target="__blank" href={issueUrl}>
        Open an Issue
      </a>
    </p>
  </CommentSection>
)

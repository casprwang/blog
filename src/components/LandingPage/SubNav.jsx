import React from "react"
import StyledSubNav from "theme/containers/Links/SubNav"

export default props =>
  <StyledSubNav>
    <button
      className={props.checkBlog ? `down` : null}
      onClick={props.clickBlog}
      onMouseDown={e => {
        e.preventDefault()
      }}
    >
      Blogs
    </button>

    <button
      className={props.checkNote ? `down` : null}
      onClick={props.clickNote}
      onMouseDown={e => {
        e.preventDefault()
      }}
    >
      Notes
    </button>
    <button
      className={props.checkLink ? `down` : null}
      onClick={props.clickLink}
      onMouseDown={e => {
        e.preventDefault()
      }}
    >
      Links
    </button>
  </StyledSubNav>

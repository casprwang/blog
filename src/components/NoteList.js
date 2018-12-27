import React, { useState } from 'react'
import { Link } from 'gatsby'

import NoteListContainer from 'theme/containers/NoteListContainer'
import PullMoreButton from "theme/containers/PullMoreButton"

const NoteList = ({ notes, viewCount }) =>
  notes
    .filter((_, i) => i < viewCount)
    .map(({ node }) =>
      <NoteListContainer key={node.fields.slug}>
        <h2>
          <Link to={node.fields.slug}>
            {node.frontmatter.title}
          </Link>
        </h2>
        <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
      </NoteListContainer>
    )

export default ({ notes, viewCount }) => {
  const [count, setCount] = useState(viewCount ? viewCount : 1)
  return (
    <>
      <NoteList notes={notes} viewCount={count} />
      <PullMoreButton
        number={count}
        length={notes.length}
        onClick={() => setCount(count + 2)}
        onMouseDown={e => {
          e.preventDefault()
        }}
      >
        more...
      </PullMoreButton>
    </>
  )
}

import React, { useState } from "react";
import { Link } from "gatsby";

const NoteList = ({ notes, viewCount }) =>
  notes
    .filter((_, i) => i < viewCount)
    .map(({ node }) => (
      <div>
        <h2>
          <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
        </h2>
        {/* eslint-disable-next-line */}
        <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
      </div>
    ));

export default ({ notes, viewCount, step }) => {
  const [count, setCount] = useState(viewCount || 1);
  return (
    <>
      <NoteList notes={notes} viewCount={count} />
      <button
        number={count}
        length={notes.length}
        onClick={() => setCount(count + (step || 3))}
        onMouseDown={(e) => {
          e.preventDefault();
        }}
      >
        More...
      </button>
    </>
  );
};

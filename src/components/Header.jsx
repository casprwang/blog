import React from "react"
import { Header } from "theme/containers/Header.js"
import { Colors } from "theme/variables"

const styledHeader = ({ bio }) =>
  <Header>
    <div>
      <h1 className="mo">Song Wang</h1>
      <p
        style={{
          color: Colors.h,
        }}
      >
        {bio}
      </p>
    </div>
  </Header>

export default styledHeader

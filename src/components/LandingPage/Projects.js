import React from 'react'
import { ProjectContainer } from 'theme/containers/BlogPostsContaners'
import { PullMoreButton } from 'theme/containers/Button.style.js'

export default props =>
  <ProjectContainer>
    <section>
      {props.row}
    </section>
  </ProjectContainer>

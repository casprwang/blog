import React from 'react'
import Link from 'gatsby-link'


const Links = props => {
}

export default props => {
  console.log(props)
  return (
    <nav>
      <ul>
        <li>
          <Link to={'/'}>S.Wang</Link>
        </li>
        {/* <li> */}
        {/*   <Link to={'/about/'}> */}
        {/*     About */}
        {/*   </Link> */}
        {/* </li> */}
        <li>
          <Link to={'/blog/'}>Writing</Link>
        </li>
        <li>
          <Link to={'/hire/'}>Hire Me</Link>
        </li>
      </ul>
    </nav>
  )
}

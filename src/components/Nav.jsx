import React from 'react'
import Link from 'gatsby-link'

const paths = ['/','/blog/','/about/', '/hire/']

const Li = props => {
  let style = (props.location === props.current)? {color: '#a212d1'} : {color:'#000'}
  {/* console.log(props.location === props.current) */}
  console.log(props.location.length>1)
  if (props.location.length>1){
    return (
      <li>
        <Link 
          style={style}
          to={`${props.location}`}
        >
          {props.location.slice(1, props.location.length-1)}
        </Link>
      </li>
      )
    } else {
    return (
      <li>
        <Link 
          style={style}
          to={`${props.location}`}
        >
          {'Home'}
        </Link>
      </li>
      )
      }
}

export default props => {
  let links = paths.map(path=><Li location={path} current={props.location.pathname}/>)
  
  return (
    <nav>
      <ul>
        {links}
      </ul>
    </nav>
  )
}

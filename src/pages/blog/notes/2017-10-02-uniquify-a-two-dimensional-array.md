---
title: Uniquify a two dimensional array
date: '2017-10-02T15:04:24-04:00'
tags:
  - javascript
  - array
---
Use the following function to get non duplicate version of a two dimensional array

\`\`\`js

const unique = (arr) => {

    let map = {}

    return arr.filter(item=> {

    return item in map ? false : (map\[item\] = true)

  })

}

\`\`\`

note that the \`item in map\` has to be in a single line after return.

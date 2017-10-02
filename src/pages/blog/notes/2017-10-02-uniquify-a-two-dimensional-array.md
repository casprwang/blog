---
title: Uniquify a two dimensional array
date: '2017-10-02T15:04:24-04:00'
tags:
  - javascript
  - array
---
Use the following function to get non-duplicate version of a two-dimensional​ array

```js
const unique = (arr) => {
  let map = {}
  return arr.filter(item => {
    if (item in map) return false
    else {
      map[item] = true
      return true
    }
  })
}

uique([[1,2], [1,2]]) 
//=> [[1,2]]
```






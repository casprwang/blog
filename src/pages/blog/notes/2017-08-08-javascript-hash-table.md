---
title: Javascript Hash Table
date: '2017-08-08T03:32:30-04:00'
tags:
  - javascript
  - algorithm
---
```js
const findTheDifference = (s, t) => {
  let hash = {}
  for (let v of [...t]) {
    hash[v] ? hash[v]++ : (hash[v] = 1)
  }
  for (let v of [...s]) {
    hash[v]--
  }
  for (let key in hash) {
    if(hash[key] === 1) return key
  }
}
```

Ref: https://leetcode.com/problems/find-the-difference/description/



---
title: Creating 2d Array the ES6 way
date: '2017-08-04T17:19:14-04:00'
tags:
  - javascript
---
```js
const constructTwoD = ( columnNumber, rowNumber ) => [...Array(rowNumber)].map(row=>Array(columnNumber))

constructTwoD(2,3)
// => [[ , , ], [ , , ]]
```



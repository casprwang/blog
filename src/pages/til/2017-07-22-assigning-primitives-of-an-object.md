---
title: Assigning primitives of an object
date: '2017-07-22T14:20:28-04:00'
tags:
  - object
  - javascript
---
```js
let v = 'st'

let obj = Object.assign({}, v)
// obj = { '0': 's', '1': 't'}
// obj['1'] = 't'
```


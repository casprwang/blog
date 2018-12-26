---
title: Use JSON.stringify for storing in Sets
date: '2017-10-01T21:35:06-04:00'
tags:
  - javascript
  - set
---
Set can store different kinds of element, but specifically for storing Arrays, you will have to use `JSON.stringify()` to avoid duplication. 

without stringify:
```js
let set = new Set()
set.add([1])
set.add([1])

set.size // => 2
```

with stringify:
```js
set.add(JSON.stringify([1]))
set.add(JSON.stringify([1]))

set.size // => 1
```

Also, whenever you want to pull the data back as Arrays, use `JSON.parse` with `Array.prototype.map()`
```js
[...set] //=> '[1]'
[...set].map(JSON.parse) //=> [1]
```






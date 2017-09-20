---
title: Double tilde makes undefined or null to zero
date: '2017-09-20T18:10:57-04:00'
tags:
  - javascript
  - bit manipulation
---
```js

~~(undefined)
//=> 0

~~(null)
//=> 0
```

### Side note
It's pretty useful for creating a Hashmap, since it doesn't change an integer except changing undefined to 0.

```js
let hash = {}

for (let item of things) hash[item] = ~~hash[item] + 1

//=> { 'a': 1, 'b': 2, ... }
```

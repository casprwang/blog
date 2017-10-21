---
title: For in is not good for array looping with index
date: '2017-10-21T15:48:56-04:00'
tags:
  - javascript
---
I am having a different result from two simple looping approach.

```js
for(let i = 0; i<left.length ; i++) {
  bfs([...temp, left[i]], [...left.slice(0, i), ...left.slice(i+1)])
}
```

and 
```js
for(let i in left) {
  bfs ([...temp, left[i]], [...left.slice(0, i), ...left.slice(i+1)])
}
```

The problem came from a bad use of for in for array looping with the care of indexing

> Note:`for...in`should not be used to iterate over an[`Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)where the index order is important. --- MDN



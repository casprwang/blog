---
title: Spread operator doubles runtime
date: '2017-08-29T20:47:06-04:00'
tags:
  - javascript
---
the following two expressions do the same job, but the later one doubles the runtime.

```js
const arr = new Array(100)
arr[0] = 1

```

```js
const arr = [1, ...new Array(99)]
```

---
title: Be careful call backing array.fill()
date: '2017-08-04T20:00:16-04:00'
tags:
  - javascript
---
Imagine​ filling out an empty 2d array with this

```js
let emptyTwoD = Array(3).fill(Array(3).fill(''))
// emptyTwoD = [['','','']['','','']['','','']]

// tring to change on spot 
emptyTwoD[1][1] = 3
// emptyTwoD = [['', 3,'']['', 3,'']['', 3,'']]

```
wtf? I just assigned once!


better use map instead

```js
let emptyTwoD = Array(3).fill('').map(e=>Array(3).fill(''))

emptyTwoD[1][1] = 3
// emptyTwoD = [['','','']['', 3,'']['', '','']]
```

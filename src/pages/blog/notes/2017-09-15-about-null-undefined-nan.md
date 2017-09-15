---
title: 'About null, undefined, NaN'
date: '2017-09-15T17:40:06-04:00'
tags:
  - javascript
---
## Type
```js
typeof null
//=> "object"

typeof undefined
//=> "undefined"

typeof NaN
//=> "number"
```
undefined is undefined, null is an obejct standing for nothing, while undefined 


## Expressions
```js
null + ''
//=> "null"

undefined + ''
//=> "undefined"

// NaN -> NaN
NaN + ''
//=> "NaN"

NaN + 1
//=> NaN

NaN + 3
//=> NaN

// null + int -> int
null + 3
//=> 3

// NaN + undefined||null -> NaN
null + NaN
//=> NaN

undefined + NaN
//=> NaN

undefined + 3
//=> NaN

// WTF
null + undefined
//=> NaN
```



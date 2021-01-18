---
title: About null, undefined, NaN
date: 2017-09-15T17:40:06-04:00
tags:
  - javascript
---
## Type

```js
typeof null;
//=> "object"

typeof undefined;
//=> "undefined"

typeof NaN;
//=> "number"
```

`undefined` is `undefined` type, `null` is an object standing for nothing,

## Expressions and conversions

`undefined` and `null` are loosely equal, but the conversion of `null` is a bit closer to the Number type.



```javascript
// String conversion is typically in higher priority.

null + ""; //=> "null"

undefined + ""; //=> "undefined"

// NaN + String will do string conversion
NaN + "a"; // "NaNa"

// NaN with - will do Number conversion
NaN - 'a'; // -> NaN

NaN + 1; // NaN

NaN + 3; // NaN


// null can be converted to 0, while undefined can't

// null + int -> int
null + 3;  // 3

// NaN + undefined|null -> NaN
null + NaN; // NaN

undefined + NaN; // NaN

undefined + 3; // NaN

// null can be converted to 0, while undefined is converted to NaN
// thus the following is equivalent of 0 + NaN => NaN
null + undefined; //=> NaN
```
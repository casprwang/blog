---
title: Currying in Javascript
date: 2017-01-10T16:05:45-08:00
---
Sometimes we want to revise a function with many arguments into a composition of sub-functions so that we can easily compose variant functions by tweaking partial arguments.

```javascript
/*
original formula:
f(a, b)

a more composed formula:
g(a)(b)

transformer(curry) function
curry = f => g
*/
// curry helper(two parameter)
const curry = f => a => b => f(a, b)

// curry helper(arbitrary number of parameters)

// usage
const add = (a, b) => a + b
const curriedAdd = curry(add)
curriedAdd(1)(2) // => 3
// tweak into other functions
const addOne = curriedAdd(1)
const addTwo = curriedAdd(2)
```
---
title: Currying in Javascript
date: 2017-01-10T16:05:45-08:00
---
Sometimes we want to revise a function with many arguments into a composition of sub-functions to perform partial applications by tweaking arguments.

```javascript
/*
original formula:
f(a, b)

formula for partial application:
g(a)(b)

transformer(curry) function
curry = f => g
*/
// curry helper(two parameters)
const curry = f => a => b => f(a, b)

// curry helper(arbitrary number of parameters)
const autoCurry = fn => {
  // recursive
  const curried = (...args) => {
    // enough arguments received
    if (args.length >= fn.length) {
      return fn(...args)
    }
    // curry further
    return curried.bind(this, ...args)
  }
  return curried
}


// usage
const add = (a, b) => a + b
const curriedAdd = curry(add)
curriedAdd(1)(2) // => 3

// tweak into other functions
const addOne = curriedAdd(1)
const addTwo = curriedAdd(2)
```
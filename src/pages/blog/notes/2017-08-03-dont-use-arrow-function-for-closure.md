---
title: Don't use arrow function for closure
date: '2017-08-03T16:49:59-04:00'
tags:
  - javascript
---
​I love both closure and arrow function; I take one for simplified class and one for simplified function syntax. After a try, I found that they don't like each other.


I was imagining this 
```js
const makeEmployee = name =>  
  function getName () {
      return name
    }
```
or 

```js
const makeEmployee =
  name => () => name

```

would work like 

```
const makeEmployee = name => {
  return {
    getName() {
      return name
    }
  }
}
```

but apparently, arrow functions are made for one liner things, not without a function name or returning a normal function.

---
title: Why react uses bind this and arrow function in a component
date: '2017-09-15T22:36:46-04:00'
tags:
  - react
  - javascript
---
## Arrow
> The ES2015 specification introduces the[arrow function syntax](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions)for writing function expressions. As well as being terser than regular function expressions, they can also have implicit return and most importantly, they always use the value of`this`from the enclosing scope.


## Bind this
> React allows you to define arbitrary methods on your component classes and these methods are automatically bound with the correct context for`this`when you create your components with`React.createClass`. This allows you move your callback code out onto your component.

---
title: Finding Closure in Chrome developer tools
date: '2017-11-11T20:12:54-05:00'
tags:
  - javascript
  - closure
---
Chrome is amazing, and provides closure scope variable for a better debugging experience.

In console with the following codes, the obj function returns an object with a closure. Without developer tool, we don't know what exactly the closure is for either `setI or getI`, but after logging the returning object, Chrome gives us a `[[Scopes]]` referencing object for both `setI` and `getI`, with the Closure obj of `i`.

```
let obj = function() {
  let i = 0

  return {
    setI(k) {
      i = k
    },

    getI() {
      return i
    },
  }
}

let x = obj()

console.log(x)

```

![Closure in Chrome](images/uploads/11-11.png)


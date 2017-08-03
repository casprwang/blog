---
title: Don't refer a child from another child when declaring an obj
date: '2017-07-29T20:11:11-04:00'
tags:
  - javascript
---
Apparently, in declaring an obj, a child cannot be assign or refer to another child within the same obj which is being declared. 

```js
let obj = {
  a: 1,
  b: 3,
}

console.log(
  obj.c
) 
// => undefined
```

Instead, declare function to re-access the obj like this
```js
let obj2 = {
  a: 'it',
  b (){
    return this.a + ' works'
  }
}

console.log(
  obj2.b()
)
// => it works
```


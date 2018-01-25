---
title: == actually does more jobs than ===
date: '2017-10-19T01:25:43-04:00'
tags:
  - javascript
---
I used to believe that the triple equal checks both type and equality whereas double equal only checks for equality, which makes triple equal more strict and does more jobs. But I just found out that I was wrong after reading this.

> 
It's not that === checks for type, it's that == additionally converts into compatible types.

```js
x = new Number(1);
y = new Number(1);
z = 1;

x == y; \\ false (x and y, despite both being Number, refer to different memory addresses)
x == z; \\  true (x is converted to builtin primitive 1)
x === y; \\ false (x and y refer to different memory addresses)﻿
```

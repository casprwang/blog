---
title: == does more jobs than ===
date: 2017-10-19T01:25:43-04:00
tags:
  - javascript
---
I believed that the triple equal checks on both the type and equality, whereas double equal only checks for equality, making triple equal more strict and doing more jobs. 

But apparently, I was wrong after reading this.

> It's not that === checks for type, it's that == additionally converts into compatible types.

```js
x = new Number(1);
y = new Number(1);
z = 1;

x == y; \\ false (x and y, despite both being Number, refer to different memory addresses)
x == z; \\  true (x is converted to builtin primitive 1)
x === y; \\ false (x and y refer to different memory addresses)﻿
```
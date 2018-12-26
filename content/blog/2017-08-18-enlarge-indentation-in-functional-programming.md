---
title: Enlarge indentation in functional programming
date: '2017-08-18T19:22:49-04:00'
tags:
  - coding
  - functional programming
---
Recently, I was learning functional programming, and I happened to notice in [this book](https://github.com/getify/Functional-Light-JS/blob/7ad68a545f2800611d11d10d5a8337e4561c867e/ch3.md), the author uses eight widths of indentation all the time. To be honest, that's not the coding styled I would like to read/code, and I was pissed by reading that enlarged indentation a lot. But surprisingly, it didn't piss me at all. 

I believe that was the arrow function and functional programming thing going on. 

Consider the following code
```js
const findLUSlength = 
  (a,b)=> 
    a===b 
    ? -1
    : Math.max(a.length, b.length)​
```
I wrote those codes hours ago, now I am converting it to 8 width indentation:

```js
const findLUSlength = 
        (a,b)=> 
                a===b 
                        ? -1
                        : Math.max(a.length, b.length)​
```

It looks more straightforward to me, my eyes feel more focused on a ​single function level scope, and that could be necessary for codes without curly braces. 





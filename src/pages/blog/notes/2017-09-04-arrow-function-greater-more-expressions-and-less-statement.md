---
title: More expressions and less statements with arrows
date: '2017-09-04T15:10:21-04:00'
tags:
  - functional programming
  - es6
---
You better do rather than declare!

Functional programming is all about what you "do" rather than what you "are" or what something "is," and that's a cool way to code. Statements, like `a = a+b` is the same as declaring with "is/are," not what they do. So, in functional programming, the way could and should be `a => a+b`, and by that, you got one less state: there is no state `a`. You got `an` as an input, `a + b` as an output and that is it. You don't need a state, or a "name" for your output as `a`, you just need the output `a+b`. In other words, you need one function with one expression for your output.


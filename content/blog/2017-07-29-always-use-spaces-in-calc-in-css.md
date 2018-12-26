---
title: Always use spaces in calc() in CSS
date: '2017-07-29T19:44:55-04:00'
tags:
  - CSS
---
The `+` and `-` operators must always be surrounded by whitespace. The operand of `calc(50% -8px)` for instance will be parsed as a percentage followed by a negative length, an invalid expression, while the operand of `calc(50% - 8px)` is a percentage followed by a minus sign and a length. Even further, `calc(8px + -50%)` is treated as a length followed by a plus sign and a negative percentage.

Ref: https://developer.mozilla.org/en-US/docs/Web/CSS/calc

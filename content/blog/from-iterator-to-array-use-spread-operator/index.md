---
title: Using spread operator on Iterable object
date: 2017-08-09T18:47:11-04:00
tags:
  - javascript
---
For all iterable typed data, we can iterator through the spread operator or  `for...of`

```javascript
// Set =>
[...Set]

// String
[...String]

// Array
[...Array]

// Generator/Iterable
[...Generator]
```
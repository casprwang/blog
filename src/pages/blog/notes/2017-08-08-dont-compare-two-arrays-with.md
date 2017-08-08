---
title: Don't compare two arrays with ===
date: '2017-08-07T23:16:33-04:00'
tags:
  - javascript
  - array
---
So, if you want to check if two arrays are equal, you might want 
```js
[]===[]

// or

[1,2,3]===[1,2,3]
```

Well, by that you would probably assume two trues come back, but actually, you are going to get false and false.

so, better use join() so you can compare strings.



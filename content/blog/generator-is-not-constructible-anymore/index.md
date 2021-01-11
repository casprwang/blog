---
title: "Generator is not constructible anymore "
date: 2016-01-10T11:41:21-08:00
---
Apparently, the committee made some modifications on ES6, making the generator function not as a constructor anymore. 

```javascript
function* myGen(a) { yield a }

const gen = new myGen(1) // VM639:1 Uncaught TypeError: myGen is not a constructor
const gen = myGen(1) // -> a Generator instance
```
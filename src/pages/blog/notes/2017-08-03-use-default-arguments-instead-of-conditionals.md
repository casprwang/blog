---
title: Use default arguments instead of conditionals
date: '2017-08-03T14:33:21-04:00'
tags:
  - javascript
---
Bad

```js
functioncreateMicrobrewery(name) {
  constbreweryName= name ||'Hipster Brew Co.';
  // ...
}
```

Good

```js
functioncreateMicrobrewery(breweryName='Hipster Brew Co.') {
  // ...
}
```




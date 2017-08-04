---
title: Better encapsulate conditionals
date: '2017-08-03T15:53:05-04:00'
tags:
  - coding
---
Bad:
```js
if (fsm.state==='fetching'&&isEmpty(listNode)) {
  // ...
}
```

Good: 
```js
functionshouldShowSpinner(fsm, listNode) {
  returnfsm.state==='fetching'&&isEmpty(listNode);
}

if (shouldShowSpinner(fsmInstance, listNodeInstance)) {
  // ...
}
```





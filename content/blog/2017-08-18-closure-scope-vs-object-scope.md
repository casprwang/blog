---
title: Closure scope vs. Object scope
date: '2017-08-18T16:52:25-04:00'
tags:
  - javascript
  - functional programming
---
```js
function outer() {
	var one = 1;
	var two = 2;

	return function inner(){
		return one + two;
	};
}

const three = outer();

three();			// 3
```


And an illustration of a simple object:



```js
const obj = {
	one: 1,
	two: 2
};

function three(outer) {
	return outer.one + outer.two;
}

three( obj );		// 3
```


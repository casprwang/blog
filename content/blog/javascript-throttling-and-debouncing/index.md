---
title: Javascript throttling and debouncing
date: 2018-01-09T00:54:48-05:00
tags:
  - javascript
  - throttling
  - debouncing
  - event
draft: true
---
This is a question asked by an interviewer from Evernote. Throttling and debouncing drop unnecessary events, with a slightly different taste. 

### Throttling

To allow only one event able to be consumed in a fixed interval, throttling is the way to go. For example, the `mousemove` event is fired in a high frequency, and thus we drop some events to get a lower rate. Here's one example. 

```js
function displayCorrds(e) {
	document.body.textContent = `${e.pageX}, ${e.pageY}`;
	console.log(e);
}

let ready = true;

document.addEventListener("mousemove", function (e) {
	if (ready) {
		ready = false;
		setTimeout(function () {
			displayCorrds(e);
			ready = true;
		}, 250);
	}
});
```

### Debouncing

When we want to drop frequent events but we care about the last one, denounce is the way to go. We keep firing and removing events if the next event comes too fast.

```js
// debouncing got triggered when stop moving for a certain time
// the approach is to clear the timeout when another event got
// fired before the threshold

function displayCorrds(e) {
	document.body.textContent = `${e.pageX}, ${e.pageY}`;
	console.log(e);
}

let timer;

document.addEventListener("mousemove", function (e) {
	clearTimeout(timer);

	timer = setTimeout(function () {
		displayCorrds(e);
	}, 1000);
});
```
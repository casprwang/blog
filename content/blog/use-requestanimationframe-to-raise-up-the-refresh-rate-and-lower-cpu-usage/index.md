---
title: Bumping refresh rate when scrolling
date: 2016-04-14T13:36:10-04:00
tags:
  - DOM
  - javascript
  - JQuery
---
We can manually call `window.equestAnimationFrame` from the scroll event in each tick. Tested on Firefox 23. 

```js
(function () {
	var lastScrollY = 0;
	var ticking = false;

	var update = function () {
		// do your stuff
		ticking = false;
	};

	var requestTick = function () {
		if (!ticking) {
			window.requestAnimationFrame(update);
			ticking = true;
		}
	};

	var onScroll = function () {
		lastScrollY = window.scrollY;
		requestTick();
	};

	$(window).on("scroll", onScroll);
})();
```
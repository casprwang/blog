---
title: 'How to raise up the refresh rate and lower CPU usage '
date: '2017-07-14T13:36:10-04:00'
tags:
  - DOM
  - javascript
  - JQuery
---
```js
(function() {
  var lastScrollY = 0;
  var ticking = false;

  var update = function() {
    // do your stuff
    ticking = false;
  };

  var requestTick = function() {
    if (!ticking) {
      window.requestAnimationFrame(update);
      ticking = true;
    }
  };

  var onScroll = function() {
    lastScrollY = window.scrollY;
    requestTick();
  };

  $(window).on('scroll', onScroll);
})();
```


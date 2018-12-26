---
title: logging the scrolled position smoother
date: '2017-07-15T17:07:30-04:00'
tags:
  - HTML
  - javascript
---
With `window.requestAnimationFrame` the refreshing frequency will be 60fps, with less GPU usage even.

![scrolling example](images/uploads/2017-07-15%2017.09.10.gif)
```html

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title></title>
  <style>
    html {
      height: 2000px;
    }
  </style>
</head>

<body>
  lol
</body>
<script>
  var last_known_scroll_position = 0;
  var ticking = false;

  function doSomething(scroll_pos) {
    console.log(
      last_known_scroll_position
    )
  }

  window.addEventListener('scroll', function(e) {
    last_known_scroll_position = window.scrollY;
    if (!ticking) {
      window.requestAnimationFrame(function() {
        doSomething(last_known_scroll_position);
        ticking = false;
      });
    }
    ticking = true;
  });
</script>

</html>

```



---
title: Centralizing box in screen
date: '2017-07-19T16:02:26-04:00'
tags:
  - CSS
---
```jade
.tiles
    .tile jasdklfjslkadjfsdkla
    .tile jasdklfjslkadjfsdkla
    .tile jasdklfjslkadjfsdkla
    .tile jasdklfjslkadjfsdkla

```

```css
.tiles {
  position: absolute;
  width: 1000px;
  text-align: center;
  border: 1px solid black;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  
  .tile {
  }
}
```
<p data-height="265" data-theme-id="0" data-slug-hash="owrQEx" data-default-tab="css,result" data-user="wangsup" data-embed-version="2" data-pen-title="owrQEx" class="codepen">See the Pen <a href="https://codepen.io/wangsup/pen/owrQEx/">owrQEx</a> by wangsup (<a href="https://codepen.io/wangsup">@wangsup</a>) on <a href="https://codepen.io">CodePen</a>.</p>
<script async src="https://production-assets.codepen.io/assets/embed/ei.js"></script>

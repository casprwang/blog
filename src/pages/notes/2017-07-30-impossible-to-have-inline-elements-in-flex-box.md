---
title: Impossible to have inline elements in flex box
date: '2017-07-29T23:19:43-04:00'
tags:
  - CSS
---
The following `span` and `small` are block level elements, not inline level element as usual. 
```html
<div style="display: flex;">
  <span>block level</span>
  <small>not inline</small>
</div>
```

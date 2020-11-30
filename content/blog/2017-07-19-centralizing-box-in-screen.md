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


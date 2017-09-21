---
title: Id in HTML gives window a key
date: '2017-09-17T00:31:10-04:00'
tags:
  - dom
  - javascript
  - html
---
Say you have a HTML tag like
```html
  <h1 id='lol'>Hello</h1>
```


This means you can access the elements with an id lol by

```
window.lol
//=> 
<h1 id=​"lol">​Hello​</h1>​
```




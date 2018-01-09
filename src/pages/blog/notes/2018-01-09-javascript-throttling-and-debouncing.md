---
title: Javascript throttling and debouncing
date: '2018-01-09T00:54:48-05:00'
tags:
  - javascript
  - throttling
  - debouncing
  - event
---
This is a question asked by an interviewer from Evernote. Event throttling avoids a massive event jamming in the browser. 

```js
function displayCorrds (e) {
  document.body.textContent = `${e.pageX}, ${e.pageY}`
  console.log(e)
}


let ready = true

document.addEventListener("mousemove", function(e){
  if(ready){
    ready = false
    setTimeout(function(){
      displayCorrds(e)
      ready = true
    }, 250)
  }
})

```

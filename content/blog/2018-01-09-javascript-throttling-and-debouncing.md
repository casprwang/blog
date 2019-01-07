---
title: Javascript throttling and debouncing
date: '2018-01-09T00:54:48-05:00'
tags:
  - javascript
  - throttling
  - debouncing
  - event
draft: true
---
This is a question asked by an interviewer from Evernote. Event throttling avoids a massive event jamming in the browser. 

### Throttling

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
### Debouncing

```js
// debouncing got triggered when stop moving for a certain time
// the approach is to clear the timeout when another event got
// fired before the threshold

function displayCorrds (e) {
  document.body.textContent = `${e.pageX}, ${e.pageY}`
  console.log(e)
}

let timer

document.addEventListener("mousemove", function(e){

  clearTimeout(timer)

  timer = setTimeout(function(){
    displayCorrds(e)
  }, 1000)
})


```


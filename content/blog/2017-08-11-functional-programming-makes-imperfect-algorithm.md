---
title: Functional programming makes imperfect algorithm
date: '2017-08-11T01:56:57-04:00'
tags:
  - functional programming
  - javascript
---
I love functional programming(FP), but at the same time, it makes me tend to reach more space and time in computing. 

As one of the core principles in FP, is avoiding declaring variables, not even temporary variables. Which means all the data are supposed to be taken from the arguments. And so in Javascript, functional programmers tend to avoid `for` looping and make the best use of `Array.prototype.map`, `Array.prototype.reduce`(my favorite), etc., and loop the iterators without touching the variables out of the function's scope. 

In this example, the algorithm is for determining whether an array of numbers has duplicate elements.

```js
// []int -> bool
const containsDuplicate = nums => nums.reduce((acc,cur)=>{
  if (acc.stack.includes(cur)) acc.bool = true
  acc.stack.push(cur)
  return acc
}, { 
  bool: false, stack: []
}).bool
```
Clean, functional programming right? not declaring a single variable​ and takes one input, gives one output. `reduce` and shorten the argument from an array to boolean. 

And yet, it has to eat all the elements from that array and push all of them into accelerator's stack, while if you declared a temp Set on a higher scope and looping by `forEach` or ordinary `for`, you could jump out the first time you meet the duplicated element in the middle of looping, which, clearly makes more sense.



```js
const containsDuplicate = nums => {
  let set = new Set()
  let flag = false
  nums.forEach(e=>{
    if (set.has(e)) flag = true
    set.add(e)
  })
  return flag
}
```


> Note: There is no way to stop or break a forEach\(\) loop other than by throwing an exception. If you need such behaviour,  the .forEach\(\) method is the wrong tool, use a plain loop instead. If you are testing the array elements for a predicate  and need a boolean return value, you can use every\(\) or some\(\) instead.
> <cite>-- MDN</cite>

So, the more reasonable way would still be the boring `for` loop, which allows you jump out from the middle.


```js
const containDuplicate = nums => {
  let set = new Set()
  for (let i =0; i<nums.length; i++){
    if (set.has(nums[i])) return true
    set.add(nums[i])
  }
  return false
}
```

